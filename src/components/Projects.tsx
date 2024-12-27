import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'Modern e-commerce platform with real-time analytics and inventory management.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
      tech: ['React', 'Node.js', 'MongoDB'],
      animation: true,
    },
    {
      title: 'Portfolio Animations',
      description: 'Custom animation library for portfolio websites with smooth transitions.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600',
      tech: ['JavaScript', 'GSAP', 'CSS'],
      animation: true,
    },
    {
      title: 'Design System',
      description: 'Comprehensive design system with reusable components and animations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
      tech: ['React', 'TypeScript', 'Storybook'],
      animation: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing my best work in web development and design.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;