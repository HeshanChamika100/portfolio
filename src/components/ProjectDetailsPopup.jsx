import React from "react";
import { FaTimes } from "react-icons/fa";

const ProjectDetailsPopup = ({ project, onClose }) => {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()} // Close when overlay clicked
      className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg transition-transform duration-300">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Project Details */}
        <h3 className="text-2xl font-bold mb-4 text-accent">{project.name}</h3>
        <h4 className="text-lg font-medium mb-2 text-gray-800">{project.title}</h4>
        <p className="text-gray-600 mb-6">{project.description}</p>

        {/* Display Technologies */}
        <div className="mb-6">
          <h5 className="font-medium text-gray-800 mb-2">Used Technologies:</h5>
          <div className="flex gap-4">
            {project.usedTechnologies.map((tech, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2 text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-white px-4 py-2 rounded-md transition duration-300 hover:bg-accent-dark shadow-sm"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailsPopup;
