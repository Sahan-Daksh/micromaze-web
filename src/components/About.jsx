import { motion } from "framer-motion";
import "../styles/components/About.css";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-left bg-no-repeat overflow-hidden bg-blur"
      style={{ backgroundImage: "url('./what/what.png')" }}
    >
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 pt-[30%] pb-[60%] items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ willChange: "opacity, transform" }}
      >
        <div className="flex flex-col items-center w-full max-w-4xl sm:p-8 md:p-10 lg:p-12 bg-transparent rounded-lg shadow-lg">
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-0 text-center font-bold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ willChange: "opacity, transform" }}
          >
            What is <br />
            MicroMaze?
          </motion.p>
          <motion.div
            className="flex flex-col items-center bg-transparent w-full max-w-3xl rounded-lg sm:p-8 md:p-10 lg:p-12 pb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ willChange: "opacity, transform" }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 text-center">
              MicroMaze is an inter-university competition designed to challenge
              participants in developing a micro mouse capable of solving a maze
              within a specified timeframe. The main challenge is to design a
              micro mouse capable of solving a maze within a specified time
              frame.
              <br />
              <br /> This competition tests students' skills in robotics,
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
      <motion.img
        src="./what/whatGaze.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
        style={{ objectPosition: "left", willChange: "opacity" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </div>
  );
};

export default About;
