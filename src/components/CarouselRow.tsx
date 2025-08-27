'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech_stack: string[];
}

interface CarouselRowProps {
  projects: Project[];
  category: string;
}

const CarouselRow = ({ projects, category }: CarouselRowProps) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 container">{category}</h3>
      <div className="relative group/carousel">
        <div ref={scrollContainer} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide pl-4 md:pl-8 lg:pl-16">
          {projects.map(project => (
            <div key={project.id} className="group/card min-w-[300px] bg-secondary rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 hover:relative">
              <div className="relative">
                <Image src={project.image} alt={project.title} width={300} height={170} className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pt-2 h-0 group-hover/card:h-auto">
                  <p className="text-sm text-muted-foreground">{project.description.substring(0, 80)}...</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech_stack.map(tech => (
                      <span key={tech} className="bg-primary/20 text-primary px-2 py-1 rounded-md text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('left')} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">‹</button>
        <button onClick={() => scroll('right')} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity">›</button>
      </div>
    </div>
  );
};

export default CarouselRow;
