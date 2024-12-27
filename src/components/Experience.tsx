import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: 'Tech Innovation Co',
      role: 'Senior Web Developer',
      period: '2020 - Present',
      description: 'Leading development of enterprise applications and mentoring junior developers.',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    },
    {
      company: 'Digital Solutions Inc',
      role: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      skills: ['Vue.js', 'Python', 'Docker', 'PostgreSQL'],
    },
    {
      company: 'Creative Agency',
      role: 'Frontend Developer',
      period: '2016 - 2018',
      description: 'Created responsive and interactive web applications for various clients.',
      skills: ['JavaScript', 'CSS', 'HTML5', 'UI/UX'],
    },
    {
      company: 'Freelance',
      role: 'Web Designer',
      period: '2015 - 2016',
      description: 'Designed and developed custom websites for small businesses.',
      skills: ['WordPress', 'PHP', 'UI Design', 'SEO'],
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="experience" className="py-20 animate-gradient bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and achievements.</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {experiences.map((experience, index) => (
              <div key={index} className="snap-center">
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;