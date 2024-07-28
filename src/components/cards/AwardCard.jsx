import React from "react";
import { motion } from "framer-motion";
import "../../assets/styles/components/cards/AwardCard.css";

const AwardCard = ({ title, image, shadowImage, prize, custom }) => {
  return (
    <motion.div
      className="award-card relative text-center p-6 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      custom={custom}
      style={{
        backgroundImage: `url(${shadowImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        <img src={image} alt={title} className="award-image mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-lg">{prize}</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
    </motion.div>
  );
};

export default AwardCard;
