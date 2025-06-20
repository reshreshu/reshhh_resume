import React, { useState, useEffect } from 'react';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [animatedSkill, setAnimatedSkill] = useState(false);
  const [achievementTab, setAchievementTab] = useState('achievements');

  useEffect(() => {
    if (activeTab === 'skills') {
      const timer = setTimeout(() => setAnimatedSkill(true), 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedSkill(false);
    }
  }, [activeTab]);

  const tabs = [
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Professional Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'achievements', label: 'Certificates & Achievements' },
  ];

  const certificates = [
    {
      title: '🥇 First Prize – Paper Presentation',
      desc: 'Extended Reality | Kongu Engineering College',
      image: 'https://img.icons8.com/color/96/prize.png',
      link: 'https://example.com/paper-presentation',
    },
    {
      title: '🥇 fifth Prize –finding brain tumor using CNN',
      desc: 'Presented at SRM college',
      image: 'https://img.icons8.com/color/96/design.png',
      link: 'https://example.com/uiux-presentation',
    },
    {
      title: '🎤 UI/UX Design Presenter',
      desc: 'Presented at Coimbatore Institute of Technology',
      image: 'https://img.icons8.com/color/96/design.png',
      link: 'https://example.com/uiux-presentation',
    },
     {
      title: 'Self driving car',
      desc: 'Presented aT kongu engineering college',
      image: 'https://img.icons8.com/color/96/design.png',
      link: 'https://example.com/uiux-presentation',
    },
  ];

  const achievements = [
    {
      title: 'Hindi Certified (Degree Level)',
      platform: 'Dakshin Bharat Hindi Prachar Sabha',
      image: 'https://img.icons8.com/external-flat-juicy-fish/60/external-language-back-to-school-flat-flat-juicy-fish.png',
      link: 'https://example.com/hindi-certificate',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      platform: 'Amazon Web Services',
      image: 'https://img.icons8.com/color/96/000000/amazon-web-services.png',
      link: 'https://example.com/aws-certificate',
    },
    {
      title: 'Mongodb Certified Developer Associate',
      platform: 'Mongodb',
      image: 'https://img.icons8.com/color/96/000000',
      link: 'https://example.com/aws-certificate',
    },
  ];

  const experienceCards = [
    {
      title: 'CodSoft – Web Developer Intern',
      desc: 'Built modern responsive interfaces, implemented React features, and delivered 3+ working demo projects.',
      color: 'text-red-400',
      img: 'https://img.icons8.com/color/96/code.png',
    },
    {
      title: ' – Inplant Training',
      desc: 'Worked t.',
      color: 'text-yellow-300',
      img: 'https://img.icons8.com/color/96/server.png',
    },
    {
      title: ' – Inplant Training',
      desc: 'Created engaging and',
      color: 'text-pink-400',
      img: 'https://img.icons8.com/color/96/website.png',
    },
  ];

  return (
    <section className="min-h-screen px-4 md:px-24 py-12 bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 border ${
              activeTab === tab.key
                ? 'border-red-500 bg-red-600 text-white shadow-lg'
                : 'border-gray-700 hover:border-red-400 hover:text-red-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="space-y-10">
          <h2 className="text-3xl font-bold text-center text-red-400 underline underline-offset-4">
            Education Timeline
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'Kongu Engineering College',
                subtitle: 'B.Tech in Information Technology (2022–2026)',
                grade: 'CGPA: 8.31',
                badgeColor: 'bg-red-600',
                desc: 'Engaged in full-stack development, project building, and real-time problem solving.',
              },
              {
                title: 'SVB Matric Hr. Sec. School',
                subtitle: 'HSC – 2022',
                grade: '93.5%',
                badgeColor: 'bg-yellow-600',
                desc: 'Focused on computer science, math, and science with leadership in inter-school tech events.',
              },
              {
                title: 'Holy Angels Matric Hr. Sec. School',
                subtitle: 'SSLC – 2020',
                grade: '86.5%',
                badgeColor: 'bg-green-600',
                desc: 'Participated in science exhibitions, computer fairs, and district-level quiz competitions.',
              },
            ].map((edu, i) => (
              <div key={i} className="border-l-4 border-red-500 pl-4 relative">
                <div className="bg-red-500 w-4 h-4 rounded-full absolute -left-2 top-1.5"></div>
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-sm text-gray-300">{edu.subtitle}</p>
                <span
                  className={`text-sm ${edu.badgeColor} px-3 py-1 rounded-full inline-block mt-1`}
                >
                  {edu.grade}
                </span>
                <p className="mt-2">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {activeTab === 'skills' && (
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {[
            {
              title: 'Design Skills',
              color: 'from-red-500 to-yellow-500',
              skills: [{ name: 'Figma', percent: 90 }],
            },
            {
              title: 'Database',
              color: 'from-pink-600 to-yellow-500',
              skills: [
                { name: 'MongoDB', percent: 90 },
                { name: 'SQL', percent: 85 },
              ],
            },
            {
              title: 'Development Skills',
              color: 'from-red-400 to-yellow-500',
              skills: [
                { name: 'React', percent: 90 },
                { name: 'HTML5', percent: 95 },
                { name: 'CSS3', percent: 90 },
                { name: 'JavaScript', percent: 88 },
              ],
            },
          ].map(({ title, color, skills }, i) => (
            <div key={i}>
              <h3
                className={`text-xl font-bold mb-2 ${
                  i === 0 ? 'text-red-400' : 'text-yellow-300'
                }`}
              >
                {title}
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded">
                    <div
                      className={`h-full rounded bg-gradient-to-r ${color} transition-all duration-700 ease-in-out`}
                      style={{ width: animatedSkill ? `${skill.percent}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Experience Section */}
      {activeTab === 'experience' && (
        <div className="grid md:grid-cols-2 gap-6 mt-8 px-4">
          {experienceCards.map((exp, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition"
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className={`text-xl font-bold mb-2 ${exp.color}`}>{exp.title}</h3>
              <p className="text-gray-300">{exp.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Achievements & Certifications Section */}
      {activeTab === 'achievements' && (
        <div className="mt-8">
          <div className="flex justify-center mb-6 space-x-4">
            <button
              onClick={() => setAchievementTab('achievements')}
              className={`px-4 py-1 rounded-full border transition ${
                achievementTab === 'achievements'
                  ? 'bg-yellow-400 text-black'
                  : 'border-gray-600 hover:border-yellow-400'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setAchievementTab('certifications')}
              className={`px-4 py-1 rounded-full border transition ${
                achievementTab === 'certifications'
                  ? 'bg-red-500 text-black'
                  : 'border-gray-600 hover:border-red-400'
              }`}
            >
              Achievements
            </button>
          </div>

          {achievementTab === 'achievements' ? (
            <div className="grid md:grid-cols-3 gap-6 px-4">
              {achievements.map((cert, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 hover:scale-105 transition">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-red-300 text-center">
                    {cert.title}
                  </h4>
                  <p className="text-sm mb-3 text-gray-300 text-center">{cert.platform}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-2 px-3 py-1 bg-red-600 rounded-full text-sm hover:bg-red-500"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 px-4">
              {certificates.map((ach, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-5 rounded-lg hover:scale-105 transition"
                >
                  <h4 className="text-lg font-semibold text-yellow-400">
                    {ach.title}
                  </h4>
                  <p className="text-gray-300">{ach.desc}</p>
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-300 underline mt-2 inline-block"
                  >
                    View Achievement
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProfileTabs;
