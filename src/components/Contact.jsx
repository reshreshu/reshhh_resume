import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-12 text-center underline underline-offset-4">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">📍 Location</h3>
              <p className="text-gray-300">Tiruchengode, Tamil Nadu, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">📧 Email</h3>
              <p className="text-gray-300 break-words">reshreshualavutheen09@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-2">📞 Phone</h3>
              <p className="text-gray-300">+91 9342134536</p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-6 text-2xl">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div>
            {submitted && (
              <div className="bg-green-600 text-white p-3 rounded mb-4 transition-all duration-300">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-5 text-left">
              <div>
                <label className="text-sm block mb-1">Name</label>
                <div className="flex items-center bg-gray-800 p-2 rounded">
                  <FaUser className="text-red-500 mr-2" />
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm block mb-1">Email</label>
                <div className="flex items-center bg-gray-800 p-2 rounded">
                  <FaEnvelope className="text-red-500 mr-2" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm block mb-1">Message</label>
                <div className="flex items-start bg-gray-800 p-2 rounded">
                  <FaCommentDots className="text-red-500 mt-1 mr-2" />
                  <textarea
                    required
                    rows="4"
                    placeholder="Type your message..."
                    className="bg-transparent outline-none w-full text-white resize-none placeholder-gray-400"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 py-2 bg-red-600 hover:bg-red-500 rounded text-white font-semibold transition-colors"
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
