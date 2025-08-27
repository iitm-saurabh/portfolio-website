'use client';

import React from 'react';
import CarouselRow from './CarouselRow';

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
  // Group projects by category
  const projectsByCategory: { [key: string]: Project[] } = projects.reduce((acc, project) => {
    const category = project.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as { [key: string]: Project[] });

  return (
    <section id="projects" className="py-24 sm:py-32 space-y-12">
      {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
        <CarouselRow key={category} category={category} projects={categoryProjects} />
      ))}
    </section>
  );
};

export default ProjectsSection;
