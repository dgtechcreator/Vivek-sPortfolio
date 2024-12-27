import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
    skills: string[];
  };
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div 
      className="relative flex-shrink-0 w-[400px] bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
      style={{
        animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
        opacity: 0
      }}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
          <span className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {experience.period}
          </span>
        </div>
        
        <div className="flex items-center text-blue-600 mb-4">
          <Briefcase className="w-4 h-4 mr-2" />
          <span className="font-medium">{experience.company}</span>
        </div>

        <p className="text-gray-600 mb-4">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;