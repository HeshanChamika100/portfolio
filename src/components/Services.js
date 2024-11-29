import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// Services data
const services = [
  {
    name: "UI/UX Design",
    description:
      "Crafting intuitive and visually appealing user interfaces with a focus on enhancing user experience and accessibility.",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Building responsive and dynamic websites and applications using modern technologies to meet diverse business needs.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Creating impactful digital marketing strategies to boost online presence and drive engagement through targeted campaigns.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Intro Section */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten"
          >
            <h2 className="h2 text-accent mb-4">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-6">
              I'm a Web Developer with over 3 years of experience.
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>

          {/* Services Section */}
          <motion.div 
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1">
            <div className="space-y-10">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 pb-6 flex items-start gap-6"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[22px] tracking-wider font-primary font-semibold mb-4">
                        {name}
                      </h4>
                      <p className="font-secondary leading-relaxed text-gray-300">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <a
                        href="#"
                        className="btn w-10 h-10 mb-4 flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
