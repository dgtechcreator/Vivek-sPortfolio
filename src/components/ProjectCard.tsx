import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    animation: boolean;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-hover">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;