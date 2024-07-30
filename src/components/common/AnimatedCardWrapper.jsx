import React from "react";
import { motion } from "framer-motion";

const AnimatedCardWrapper = ({ children, index, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardWrapper;
