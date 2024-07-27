import { motion } from "framer-motion";
import "../styles/components/About.css";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-left bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./what/Robot Ai.png')" }}
    >
      {/* Title Section */}
      <motion.div
        className="absolute top-10 w-full text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          What is MicroMaze?
        </motion.p>
      </motion.div>

      {/* Grid Layout Section */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="grid grid-cols-2 grid-rows-2 gap-64 w-full max-w-7xl">
          {/* Left Text in Top-Left Corner */}
          <motion.div
            className="row-span-1 col-span-1 flex items-start justify-start bg-transparent rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-gray-400 font-apple">
              MicroMaze is an inter-university competition designed to challenge
              participants in developing a micro mouse capable of solving a maze
              within a specified timeframe.
            </p>
          </motion.div>

          {/* Right Text in Bottom-Right Corner */}
          <motion.div
            className="row-span-2 col-span-1 flex items-end justify-end bg-transparent rounded-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-gray-400 font-apple">
              This competition tests students' skills in robotics, programming,
              and problem-solving as they create robots that navigate from the
              start to the end of the maze efficiently and accurately. This
              provides a platform for undergraduates to apply their knowledge in
              a practical setting, fostering collaboration and learning.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
