import React from "react";
import AwardCard from "../component/AwardCard";
import { awardsImgs } from "../data/imgs/awardsImgs";

const Awards = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-slate-500 to-slate-800 w-full py-20"
      style={{
        background: `url('./generic-bg.png') no-repeat center center/cover`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for better text visibility */}
      <div className="relative container mx-auto text-center text-white">
        <div className="mb-10">
          <h2 className="text-6xl font-bold animate-fade-in-up">Awards</h2>
          <p className="text-xl text-gray-300 mt-4 animate-fade-in-up delay-2s">
            Recognizing outstanding achievements and milestones
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10 animate-fade-in-up delay-4s">
          <AwardCard
            title="1st Runner Up"
            image={awardsImgs.firstRunnerUp}
            prize="30,000 LKR"
          />
          <AwardCard
            title="Champions"
            image={awardsImgs.winner}
            prize="40,000 LKR"
            className="winner" // Add this class to highlight the winner card
          />
          <AwardCard
            title="2nd Runner Up"
            image={awardsImgs.secondRunnerUp}
            prize="20,000 LKR"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
