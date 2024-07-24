import { motion } from "framer-motion";
import "../styles/components/About.css";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-left bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./what/what.png')" }}
    >
      <motion.div
        className="relative z-10 h-full flex items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center w-full max-w-4xl p-6 sm:p-8 md:p-10 lg:p-12">
          <motion.p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 sm:mb-8 lg:mb-10 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <b>
              What is <br />
              MicroMaze?
            </b>
          </motion.p>
          <motion.div
            className="flex flex-col items-center bg-gray-100 w-full max-w-3xl rounded-lg p-6 sm:p-8 md:p-10 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-700 text-center">
              MicroMaze is an inter-university competition designed to challenge
              participants in developing a micro mouse capable of solving a maze
              within a specified timeframe. The main challenge is to design a
              micro mouse capable of solving a maze within a specified time
              frame.
              <br />
              <br /> This competition tests students skills in robotics,
              programming, and problem-solving as they create robots that
              navigate from the start to the end of the maze efficiently and
              accurately.
              <br />
              <br />
              This provides a platform for undergraduates to apply their
              knowledge in a practical setting, fostering collaboration and
              learning.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <img
        src="./what/whatGaze.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-multiply"
        style={{ objectPosition: "left" }}
      />
    </div>
  );
};

export default About;
