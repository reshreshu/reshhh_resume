import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import heroImage from '../assests/resh.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-br from-black via-[#1f1f1f] to-black text-white font-sans">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left py-12" data-aos="fade-right">
        <p className="text-sm italic tracking-widest text-red-400 mb-3">
          Welcome to my world
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold italic mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-600">
          <Typewriter
            options={{
              strings: ['Hello Guys!', "Hi, I'm Reshma Alavutheen"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic text-red-500 mb-4">
          A Passionate Full Stack Web Developer
        </h2>

        <p className="text-gray-300 text-base sm:text-lg italic mb-8 leading-relaxed">
          I specialize in bringing ideas to life by crafting clean, user-friendly interfaces and interactive components.
          With a strong focus on intuitive UI/UX design and seamless frontend experiences, I blend visual elegance with
          backend logic to build scalable, real-world solutions that solve problems and delight users.
        </p>

        {/* Social + Skills Section */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between items-center sm:items-start">
          {/* Socials */}
          <div className="text-center sm:text-left">
            <p className="mb-2 font-semibold tracking-wide text-gray-400">FIND ME IN</p>
            <div className="flex gap-6 justify-center sm:justify-start">
              <a href="#" className="hover:scale-110 transition duration-300 text-white hover:text-red-500">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="#" className="hover:scale-110 transition duration-300 text-white hover:text-red-500">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="text-center sm:text-left">
            <p className="mb-2 font-semibold tracking-wide text-gray-400">BEST SKILL ON</p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              <img
                src="https://skillicons.dev/icons?i=html,css,react,nodejs,tailwind,figma,vscode,mongodb,mysql,jenkins"
                alt="Skills"
                className="h-8 sm:h-10 hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center py-10" data-aos="fade-left">
        <img
          src={heroImage}
          alt="Reshma"
          className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-red-500 shadow-2xl hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
