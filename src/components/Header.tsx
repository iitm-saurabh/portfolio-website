import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Saurabh Lohakare
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#gate">GATE Prep</Link>
            <Link href="/#blog">Blog</Link>
            <Link href="/#contact">Contact</Link>
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
