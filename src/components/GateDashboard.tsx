'use client';

import React, { useState, useEffect } from 'react';

interface GateDashboardProps {
  title: string;
  countdown: string;
  subjects: {
    name: string;
    status: string;
  }[];
  motivational_quotes: string[];
}

const GateDashboard = ({ title, countdown, subjects, motivational_quotes }: GateDashboardProps) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(motivational_quotes[Math.floor(Math.random() * motivational_quotes.length)]);

    const timer = setInterval(() => {
      const difference = +new Date(countdown) - +new Date();
      let timeLeftString = '';

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        timeLeftString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
      setTimeLeft(timeLeftString);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, motivational_quotes]);

  return (
    <section id="gate" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="text-center text-4xl font-bold text-primary mb-8">{timeLeft}</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {subjects.map(subject => (
          <div key={subject.name} className="bg-secondary p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
            <p className="text-muted-foreground">{subject.status}</p>
          </div>
        ))}
      </div>
      <div className="text-center italic text-muted-foreground">
        {quote && <p>&quot;{quote}&quot;</p>}
      </div>
    </section>
  );
};

export default GateDashboard;
