import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/styles/utils/AnimatedBackground.css";

const AnimatedBackground = ({ children, isActive, style }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setAnimationClass("fade-in");
    } else {
      setAnimationClass("fade-out");
    }
  }, [isActive]);

  return (
    <motion.div
      className={`animated-background-container ${animationClass}`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="animated-background-overlay"></div>
      <div className="animated-background-content">{children}</div>
    </motion.div>
  );
};

export default AnimatedBackground;
