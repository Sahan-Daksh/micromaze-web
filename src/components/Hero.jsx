import { motion } from "framer-motion";
import "../styles/components/Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      style={{ backgroundImage: "url('./hero/heroImage.png')" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Navbar />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1
          className="hero-heading"
          style={{ fontFamily: "'Space Grotesk', 'Sora', 'Source Code Pro'" }}
        >
          MicroMaze
        </h1>
      </motion.div>
      <img
        src="./hero/heroImageWithoutBg.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 5 }}
      />
    </motion.div>
  );
};

export default Hero;
