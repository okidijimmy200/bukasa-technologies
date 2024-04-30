import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className=" w-full z-50 bg-transparent">
      <div className='flex'>
      <div className=''>
        <Link className='text-xl font-bold'>
          <img src={Logo} alt='Logo' className='h-[7rem] w-[8rem]' />
        </Link>
        </div>
      <div className="container mx-auto px-4 py-2 flex items-center justify-end">
        <ul className="hidden md:flex space-x-4 text-zinc-800 ">
          <li>
            <Link className='hover:text-gray-200' to="/" onClick={() => scrollToSection('about')}>About</Link>
          </li>
          <li>
          <Link className='hover:text-gray-200' to="/" onClick={() => scrollToSection('services')}>Services</Link>
          </li>
          <li>
          <Link className='hover:text-gray-200' to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
          </li>
        </ul>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 text-zinc-800"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Mobile Navigation Menu (shown when hamburger is clicked) */}
        {isOpen && (
          <ul className="md:hidden absolute top-[6rem] left-0 w-full py-4 bg-white shadow-md">
            <li>
            <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="/" onClick={() => scrollToSection('about')}>About</Link>
            </li>
            <li>
            <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="/" onClick={() => scrollToSection('services')}>Services</Link>
            </li>
            <li>
            <Link className='block px-4 py-2 text-gray-700 hover:bg-gray-100' to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
            </li>
          </ul>
        )}
      
      </div>
    </nav>
  );
};

export default Navbar;
