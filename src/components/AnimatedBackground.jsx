import React from "react";
import "../styles/components/AnimatedBackground.css";

const AnimatedBackground = ({ children }) => {
  return (
    <div className="animated-background-container">
      <div className="animated-background-overlay"></div>
      <div className="animated-background-content">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
