import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaCode } from "react-icons/fa";
import ProjectDetailsPopup from "./ProjectDetailsPopup"; // Import the popup component
import { projects } from "../data/projectData"; // Import the projects data

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div id="work" className="section">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="h2 leading-tight text-center text-accent">
            My Latest Work.
          </h2>
          <p className="text-center mb-16">
            Here’s the selection of my recent projects showcasing my skills in
            UI/UX design and development. These projects reflect a blend of
            creativity, technical expertise, and user-centered design
            principles.
          </p>

          {/* Category Buttons */}
          <div className="flex gap-4 mb-10 justify-center">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-32 px-4 py-2 rounded-md border-2 ${
                  selectedCategory === category
                    ? "bg-accent text-white"
                    : "bg-transparent text-accent border-accent"
                } transition duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex flex-col lg:flex-row gap-x-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              className="flex-1 flex flex-col gap-y-12 mb-8 lg:mb-0"
            >
              <div
                onClick={() => setSelectedProject(project)} // Open the modal with selected project
                className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
              >
                {/* Code Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-50 bg-accent text-white rounded-full p-2 hover:bg-accent-dark transition duration-300"
                  title="View Code"
                  onClick={(e) => e.stopPropagation()} // Prevent opening modal
                >
                  <FaCode size={20} />
                </a>

                {/* Image and Overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={project.img}
                  alt={project.title}
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50">
                  <span className="text-gradient">{project.name}</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                  <span className="text-3xl text-white">{project.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Popup */}
        {selectedProject && (
          <ProjectDetailsPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
