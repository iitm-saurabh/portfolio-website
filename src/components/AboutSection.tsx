import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  bio: string;
  education: {
    degree: string;
    university: string;
    logo: string;
  }[];
}

const AboutSection = ({ bio, education }: AboutSectionProps) => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me
      </h2>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-muted-foreground">{bio}</p>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={edu.logo} alt={edu.university} width={64} height={64} className="rounded-full bg-secondary p-2" />
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
