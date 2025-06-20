import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ toggleTheme, isDark }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'ProfileTabs', href: '#ProfileTabs' },
    { label: 'Resume', href: 'public/Reshma_Resume.pdf.pdf', download: true },
  ];

  return (
    <nav className="bg-white dark:bg-black shadow fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-white">Reshma A</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 dark:text-white font-medium">
          {navLinks.map((link, i) =>
            link.download ? (
              <a key={i} href={link.href} download className="underline hover:text-red-500">
                {link.label}
              </a>
            ) : (
              <a key={i} href={link.href} className="hover:text-red-400">
                {link.label}
              </a>
            )
          )}
          <button onClick={toggleTheme} className="ml-4 text-xl hover:text-yellow-400 transition">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-xl text-gray-700 dark:text-white">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-3 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-300">
          {navLinks.map((link, i) =>
            link.download ? (
              <a key={i} href={link.href} download className="hover:text-red-500">
                {link.label}
              </a>
            ) : (
              <a key={i} href={link.href} className="hover:text-red-400">
                {link.label}
              </a>
            )
          )}
          <button onClick={toggleTheme} className="text-xl hover:text-yellow-400">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </nav>
  );
}
