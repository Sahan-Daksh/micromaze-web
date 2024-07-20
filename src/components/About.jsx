import { motion } from "framer-motion";
import "../styles/components/About.css";

const About = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-left bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./what/what.png')" }}
    >
      <motion.div
        className="relative z-10 h-full flex items-start justify-end pr-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-end w-[80%] p-10">
          <motion.p
            className="text-9xl text-white mb-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <b>
              What is <br /> MicroMaze?
            </b>
          </motion.p>
          <motion.div
            className="flex flex-col items-end bg-slate-50 w-[70%] rounded-lg p-6"
            style={{ backgroundColor: "#D9D9D9" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-2xl text-purple-500 text-center">
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
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        style={{ mixBlendMode: "multiply", objectPosition: "left" }}
      />
    </div>
  );
};

export default About;
