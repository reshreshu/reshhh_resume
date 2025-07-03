import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-gray-100"
    >
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-800 animate-pulse"
        data-aos="fade-down"
      >
        About Me
      </h2>

      <div
        className="max-w-6xl mx-auto bg-[#1f1f1f] backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgba(255,0,0,0.1)] hover:shadow-[0_12px_45px_rgba(255,0,0,0.25)] transition-all duration-500 space-y-10"
        data-aos="zoom-in"
      >
        {/* Grid Layout for Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Education */}
          <div className="flex items-start gap-4">
            <FaGraduationCap className="text-red-500 text-3xl mt-1 shrink-0" />
            <p className="text-base sm:text-lg hover:scale-[1.02] transition-transform duration-300">
              🎓 I'm currently pursuing my <strong>Bachelor of Technology in Information Technology</strong> at
              <span className="text-red-400 font-semibold"> Kongu Engineering College</span>, Tamil Nadu.
              With a CGPA of <strong>8.31</strong>, I actively engage in real-time development, technical workshops,
              and hands-on learning through academic and personal projects.
            </p>
          </div>

          {/* Internship */}
          <div className="flex items-start gap-4">
            <FaLaptopCode className="text-pink-500 text-3xl mt-1 shrink-0" />
            <p className="text-base sm:text-lg hover:scale-[1.02] transition-transform duration-300">
              💻 As a <span className="text-red-400 font-semibold">Web Developer Intern</span> at CodSoft,
              I developed dynamic and responsive interfaces including portfolios, calculators, and landing pages.
              My tech stack includes <span className="text-pink-400 font-medium">HTML</span>,
              <span className="text-pink-400 font-medium"> CSS</span>, <span className="text-pink-400 font-medium">JavaScript</span>,
              <span className="text-pink-400 font-medium"> React</span>, and
              <span className="text-green-400 font-medium"> MongoDB</span>. I also explored version control and real-time debugging workflows.
            </p>
          </div>

          {/* Interests */}
          <div className="flex items-start gap-4">
            <FaRocket className="text-yellow-500 text-3xl mt-1 shrink-0" />
            <p className="text-base sm:text-lg hover:scale-[1.02] transition-transform duration-300">
              🚀 I enjoy crafting seamless user experiences through clean UI/UX design and component-driven development.
              My focus lies in building intuitive web applications that blend visual elegance with backend logic —
              transforming ideas into real-world digital solutions.
            </p>
          </div>

          {/* Extra Value */}
          <div className="flex items-start gap-4">
            <FaLightbulb className="text-green-400 text-3xl mt-1 shrink-0" />
            <p className="text-base sm:text-lg hover:scale-[1.02] transition-transform duration-300">
              💡 Outside of coding, I enjoy exploring creative design tools like Figma. I believe in continuous learning,
              teamwork, and using technology to solve real problems. I take pride in delivering work that’s not only
              functional but also thoughtfully designed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
