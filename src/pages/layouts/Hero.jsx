import { motion } from "framer-motion";
import "../../assets/styles/pages/layouts/Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <motion.div
      className="hero-container"
      style={{
        backgroundImage: "url('./hero/HeroImage.png')",
      }}
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
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          MicroMaze
        </h1>
      </motion.div>
      <img
        src="./hero/HeroBgRemoved.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 5 }}
      />
    </motion.div>
  );
};

export default Hero;
