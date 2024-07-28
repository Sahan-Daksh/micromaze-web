import React from "react";
import AwardCard from "../component/AwardCard";
import { awardsImgs } from "../data/imgs/awardsImgs";
import { motion } from "framer-motion";
import "../styles/components/Awards.css"; // Ensure you import your custom CSS

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Awards = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-slate-500 to-slate-800 w-full py-20"
      style={{
        background: `url('./generic-bg.jpg') no-repeat center center/cover`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Overlay for better text visibility */}
      <div className="relative container mx-auto text-center text-white px-4">
        <div className="mb-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={0}
          >
            Awards
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            custom={1}
          >
            Recognizing outstanding achievements and milestones
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={2}
        >
          <AwardCard
            title="1st Runner Up"
            image={awardsImgs.firstRunnerUp}
            prize="30,000 LKR"
          />
          <AwardCard
            title="Champions"
            image={awardsImgs.winner}
            prize="40,000 LKR"
            className="winner"
          />
          <AwardCard
            title="2nd Runner Up"
            image={awardsImgs.secondRunnerUp}
            prize="20,000 LKR"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
