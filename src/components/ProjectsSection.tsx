'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tech_stack: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md ${filter === category ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-secondary rounded-lg overflow-hidden">
            <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map(tech => (
                  <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-sm">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
