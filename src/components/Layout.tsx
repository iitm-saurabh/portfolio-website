import React from 'react';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; 2024 Saurabh Lohakare. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
