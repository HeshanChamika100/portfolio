import React from "react";
import Image from "../assets/me.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* Left Section */}
          <div className="flex-2 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              HESHAN <span>CHAMIKA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Programmer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a software engineering undergraduate passionate about creating
              innovative solutions to enhance organizational efficiency. A
              motivated, adaptable, and team-oriented leader with strong
              interpersonal and communication skills, I thrive in collaborative
              environments and excel at managing and inspiring teams.
            </motion.p>
            {/* Buttons Section */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center gap-x-6 mb-12 lg:justify-start"
            >
              <button
                className="btn btn-lg"
                onClick={() => {
                  window.open(
                    "https://www.canva.com/design/DAGXv-CvZmw/eJ0tUzA3rqCDbr-eRoYlpA/view?utm_content=DAGXv-CvZmw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h137f5363c9",
                    "_blank"
                  );
                }}
              >
                Check Resume
              </button>
              <Link
                to="work"
                smooth={true}
                spy={true}
                offset={-50}
                className="text-gradient btn-link"
              >
                My Portfolio
              </Link>
            </motion.div>
            {/* Social Icons */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 mt-4 justify-center lg:justify-start"
            >
              <a href="https://github.com/IT22194930">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/heshan-chamika-628266277/">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
  variants={fadeIn("down", 0.5)}
  initial="hidden"
  whileInView={"show"}
  className="flex justify-center lg:flex-1 max-w-[280px] sm:max-w-[360px] lg:max-w-[600px] mx-auto"
>
  <img
    src={Image}
    alt="Avatar"
    className="w-full h-auto object-cover rounded-full"
  />
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
