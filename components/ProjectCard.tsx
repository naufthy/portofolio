
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLink = project.link && project.link !== '#';
  const Component = hasLink ? 'a' : 'div';

  return (
    <Component
      href={hasLink ? project.link : undefined}
      target={hasLink ? '_blank' : undefined}
      rel={hasLink ? 'noopener noreferrer' : undefined}
      className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-purple-500/30 border border-purple-500/20"
      aria-label={hasLink ? `View project: ${project.title}` : undefined}
    >
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-purple-400 uppercase tracking-wider">{project.category}</p>
        <h3 className="text-xl font-bold text-white mt-2 mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Component>
  );
};

export default ProjectCard;