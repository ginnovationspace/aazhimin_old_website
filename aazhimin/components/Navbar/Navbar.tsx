'use client'
import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import NavItems from './components/NavItems';
import Search from './components/Search';

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="fixed w-full top-0 z-50 text-black">
      <div className={`w-full flex justify-between items-center transition-transform duration-3000 ${isVisible ? 'translate-y-0' : '-translate-y-20'} py-5 md:px-10 px-5 bg-white text-black`}>
        <div className="hidden w-[80%] lg:flex justify-between items-center">
          <Logo />
          <NavItems />
        </div>
        <div className="hidden lg:flex">
          <Search />
        </div>
        <div className="lg:hidden flex justify-between items-center w-full">
          <Logo />
          <div className='w-[20%] md:w-[10%] justify-between flex'>
            <Search />
            <NavItems />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
