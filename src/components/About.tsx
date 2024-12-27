import React from 'react';
import { Code, Palette, Globe, Sparkles } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Web Development',
      description: 'Building robust and scalable web applications with modern technologies.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Animations',
      description: 'Crafting engaging animations and interactive experiences.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Design',
      description: 'Designing modern and responsive websites that stand out.',
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that combine beautiful design with powerful functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;