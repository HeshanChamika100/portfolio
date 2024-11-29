import React from "react";
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-8 sm:h-screen">
          {/* Image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          {/* About Content */}
          <motion.div
            // variants={fadeIn("left", 0.5)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-4">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Web Developer with over 3 years of experience.
            </h3>
            <p className="mb-6">
              I'm a software engineering undergraduate passionate about creating
              innovative solutions that enhance organizational success. A
              motivated, adaptable, and team-oriented leader, I excel at
              managing and inspiring teams and thrive in collaborative
              environments.
            </p>

            {/* Stats Section */}
            <div className="flex gap-x-12 lg:gap-x-18 mb-12">
              <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2 leading-none">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2 leading-none">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>

              <div className="text-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2 leading-none">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Clients <br />
                  Worldwide
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
