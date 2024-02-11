'use client';   
import { useEffect, useState } from 'react';

const ScrollShadowHeader = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-10 ${hasScrolled ? 'shadow-lg bg-gray-100' : ''}`}>
      <nav className="flex items-center justify-between p-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Glorious Satria</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold">About</a>
          <a href="#" className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold">Experiences</a>
          <a href="#" className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold">Achievements</a>
          <a href="#" className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold">Volunteer</a>
          <a href="#" className="text-lg transition-colors hover:text-[#6F452C] hover:font-bold">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default ScrollShadowHeader;
