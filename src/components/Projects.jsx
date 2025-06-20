import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Project data
const projects = [
  {
    title: 'MediScan Hub – Real-Time Web Portal',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: [
      'Built a landing page and full UI for a diagnostic center.',
      'Emphasized responsive UI/UX, cross-device compatibility.',
    ],
    link: 'https://sanjayscans.in',
    github: 'https://github.com/yourusername/mediscan-hub',
  },
  {
    title: 'Recipe Finder',
    tech: ['React', 'CSS', 'Node.js', 'MongoDB'],
    description: [
      'Built a search-based recipe app using MongoDB and React.',
      'Focused on responsive design and user-friendly UI.',
    ],
    github: 'https://github.com/yourusername/recipe-finder',
  },
  {
    title: 'News Aggregator',
    tech: ['React', 'Node.js', 'MongoDB', 'APIs'],
    description: [
      'Built a real-time news aggregator using multiple news APIs.',
      'Integrated smart state management and a clean responsive interface.',
    ],
    github: 'https://github.com/yourusername/news-aggregator',
  },
  {
  title: 'Portfolio Website',
  tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Jenkins', 'GitHub Actions'],
  description: [
    'Developed a modern portfolio website with smooth animations and responsive design.',
    'Includes sections like About, Projects, Contact, Resume download, and theme toggle (light/dark).',
    'Built entirely with React and styled using Tailwind CSS following utility-first design principles.',
    'Integrated CI/CD using Jenkins and GitHub Actions for automated builds and deployment on every push.',
    'Ensured zero-downtime deployments and automated testing to maintain reliability across changes.',
  ],
  link: 'https://yourportfolio.live',
  github: 'https://github.com/yourusername/portfolio-react-tailwind',
}

];

// Flip card component
const FlipCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-[500px] h-[450px] perspective cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-[#1c1c1c] border border-red-800 p-8 rounded-3xl shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_35px_rgba(255,0,0,0.4)]">
          <h3 className="text-2xl font-semibold text-red-400 mb-4">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
            {project.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#111111] border border-pink-800 p-8 rounded-3xl shadow-[0_0_20px_rgba(255,0,0,0.2)] text-white flex flex-col justify-center items-center gap-4">
          <h3 className="text-xl font-bold text-pink-400">🔗 Links</h3>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:shadow-pink-600/70 transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow"
            >
              <FaGithub /> GitHub Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Projects section
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-24 py-20 bg-gradient-to-b from-black via-[#111] to-black text-gray-100"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-red-600">
        🚀 Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <FlipCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
