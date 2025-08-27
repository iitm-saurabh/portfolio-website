'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-secondary' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">
              SAURABH
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <Link href="/#about" className="hover:text-foreground">About</Link>
            <Link href="/#projects" className="hover:text-foreground">Projects</Link>
            <Link href="/#gate" className="hover:text-foreground">GATE Prep</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
