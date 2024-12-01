import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetailsPopup = ({ project, onClose }) => {
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={(e) => e.target === e.currentTarget && onClose()} // Close on overlay click
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center transition-opacity duration-300"
      >
        <motion.div
          variants={popupVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-lg max-w-2xl w-full p-8 relative shadow-2xl transition-transform duration-500"
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
            onClick={onClose}
          >
            <FaTimes size={20} />
          </button>

          {/* Project Details */}
          <h3 className="text-3xl font-bold mb-4 text-accent border-b-2 pb-2 border-gray-200">
            {project.name}
          </h3>
          <h4 className="text-xl font-semibold mb-4 text-gray-700">
            {project.title}
          </h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Display Technologies */}
          <div className="mb-6">
            <h5 className="text-lg font-semibold mb-4 text-gray-800">
              Used Technologies
            </h5>
            <div className="flex flex-wrap gap-4">
              {project.usedTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-gray-700 text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-6 py-3 rounded-lg font-medium text-center transition duration-300 hover:bg-accent-dark shadow-md block"
          >
            View Code
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailsPopup;
