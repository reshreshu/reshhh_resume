import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProfileTabs from './components/ProfileTabs';
import Contact from './components/Contact';
import Footer from './components/Footer';

// AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Persist theme in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply theme to root <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // AOS initialization
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} isDark={darkMode} />
      <Hero />
      <About />
      <Projects />
      <ProfileTabs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
