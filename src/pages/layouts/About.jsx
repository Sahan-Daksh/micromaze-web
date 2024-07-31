import { motion } from "framer-motion";
import "../../assets/styles/pages/layouts/About.css";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./what/IntroBg.png')" }}
    >
      {/* Title Section */}
      <motion.div
        className="absolute top-10 w-full text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="title-text text-white font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          What is MicroMaze?
        </motion.p>
      </motion.div>

      {/* Text Sections */}
      <motion.div
        className="absolute lg:left-10 top-24 lg:top-40 w-full md:w-1/3 p-4 rounded-lg mobile-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="content-text">
          MicroMaze is an inter-university competition designed to challenge
          participants in developing a micro mouse capable of solving a maze
          within a specified timeframe. This competition tests students' skills
          in robotics, programming, and problem-solving.
        </p>
      </motion.div>

      <motion.div
        className="absolute lg:right-10 bottom-24 lg:bottom-40 w-full md:w-1/3 p-4 rounded-lg mobile-text"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="content-text text-right">
          The event also includes workshops, mentoring sessions, and networking
          opportunities with industry experts, further enhancing the learning
          experience and preparing students for future careers in technology and
          engineering.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
