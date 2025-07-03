import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ toggleTheme, isDark }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'ProfileTabs', href: '#ProfileTabs' },
    { label: 'Resume', href: '/Reshma_Resume.pdf', download: true }, // corrected path
  ];

  return (
    <nav className="bg-white dark:bg-black shadow fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600 dark:text-white">Reshma A</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-800 dark:text-white font-medium">
          {navLinks.map((link, index) =>
            link.download ? (
              <a
                key={index}
                href={link.href}
                download
                className="hover:text-red-500 underline transition"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={index}
                href={link.href}
                className="hover:text-red-500 transition"
              >
                {link.label}
              </a>
            )
          )}

          <button
            onClick={toggleTheme}
            className="ml-4 text-xl hover:text-yellow-400 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-gray-800 dark:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[300px] py-4' : 'max-h-0'
        } bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-white`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) =>
            link.download ? (
              <a
                key={index}
                href={link.href}
                download
                className="hover:text-red-500 transition"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={index}
                href={link.href}
                className="hover:text-red-400 transition"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-yellow-400 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
