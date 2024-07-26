import React, { useState, useEffect } from "react";
import "../styles/components/AnimatedBackground.css";

const AnimatedBackground = ({ children, isActive }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isActive) {
      setAnimationClass("fade-in");
    } else {
      setAnimationClass("fade-out");
    }
  }, [isActive]);

  return (
    <div className={`animated-background-container ${animationClass}`}>
      <div className="animated-background-overlay"></div>
      <div className="animated-background-content">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
