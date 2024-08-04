import React from "react";
import { motion } from "framer-motion";
import "../../assets/styles/components/cards/AwardCard.css";

const AwardCard = ({ title, image, prize, custom }) => {
  return (
    <motion.div
      className="award-card relative text-center p-6 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      custom={custom}
    >
      <div className="relative z-10">
        <img src={image} alt={title} className="award-image mx-auto mb-0" />
        <h3 className="text-3xl font-bold mb-2 font-reross">{title}</h3>
        <p className="text-2xl font-sf-pro-display font-bold">{prize}</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
    </motion.div>
  );
};

export default AwardCard;
