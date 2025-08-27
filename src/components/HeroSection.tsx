import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  tagline: string;
  location: string;
}

const HeroSection = ({ name, title, tagline, location }: HeroSectionProps) => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">{title}</h2>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          {tagline}
        </p>
        <p className="text-lg text-muted-foreground">{location}</p>
      </div>
      {/* Placeholder for image */}
      <div className="hidden lg:block">
        <div className="w-80 h-80 bg-secondary rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
