const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('light-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save preference to local storage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

// Projects Section
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.close-btn');

    let projects = [];

    // Fetch projects data
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;
            displayProjects(projects);
        });

    // Display projects
    function displayProjects(projectItems) {
        projectsGrid.innerHTML = projectItems.map(project => `
            <div class="project-card" data-id="${project.id}">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                </div>
            </div>
        `).join('');
    }

    // Filter projects
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            const filteredProjects = filter === 'all'
                ? projects
                : projects.filter(p => p.category === filter);
            displayProjects(filteredProjects);
        });
    });

    // Open modal
    projectsGrid.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (card) {
            const projectId = parseInt(card.getAttribute('data-id'));
            const project = projects.find(p => p.id === projectId);
            modalBody.innerHTML = `
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}" style="width:100%; margin-bottom: 1rem;">
                <p>${project.description}</p>
                <p><strong>Tech Stack:</strong> ${project.tech_stack.join(', ')}</p>
                <a href="${project.github_link}" class="btn" target="_blank">GitHub</a>
                <a href="${project.live_demo_link}" class="btn" target="_blank">Live Demo</a>
            `;
            modal.style.display = 'block';
        }
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Skills Section
    const programmingLanguagesContainer = document.getElementById('programming-languages');
    const electronicsExpertiseContainer = document.getElementById('electronics-expertise');
    const certificationsContainer = document.getElementById('certifications');

    fetch('data/skills.json')
        .then(response => response.json())
        .then(data => {
            // Programming Languages
            programmingLanguagesContainer.innerHTML = data.programming_languages.map(skill => `
                <div class="skill-item">
                    <h4>${skill.name}</h4>
                    <p>${skill.level}%</p>
                </div>
            `).join('');

            // Electronics Expertise
            electronicsExpertiseContainer.innerHTML = data.electronics_expertise.map(skill => `
                <li>${skill}</li>
            `).join('');

            // Certifications
            certificationsContainer.innerHTML = data.certifications.map(cert => `
                <li><a href="${cert.link}" target="_blank">${cert.name}</a></li>
            `).join('');
        });

    // Experience Section
    const timeline = document.getElementById('timeline');
    fetch('data/experience.json')
        .then(response => response.json())
        .then(data => {
            timeline.innerHTML = data.map(item => `
                <div class="timeline-item">
                    <div class="timeline-content">
                        <h3>${item.title}</h3>
                        <h4>${item.institution}</h4>
                        <p>${item.date}</p>
                        <p>${item.description}</p>
                    </div>
                </div>
            `).join('');
        });

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed: ', err));
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.log('FAILED...', error);
            });
    });
});
