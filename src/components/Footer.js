import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-[#008000] text-white py-8" id="contact">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* About */}
        <div className="px-4 mb-4 w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">About</h3>
          <ul>
            <li><Link className="hover:text-gray-400" to="/" onClick={() => scrollToSection('about')}>Our Story</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="px-4 mb-4 w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li><Link className="hover:text-gray-400">EMAIL: info@bukasatechnologies.com</Link></li>
            <li><Link className="hover:text-gray-400">PHONE: +256 787 959721</Link></li>
            <li><Link className="hover:text-gray-400">ADDRESS: Nalya, Kampala, UG</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="px-4 mb-4 w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li><Link className="hover:text-gray-400" to="/" onClick={() => scrollToSection('services')}>Our Services</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p>© {currentYear} Bukasa Technologies Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
