import React from "react";
import AwardCard from "./AwardCard";

const Awards = () => {
  return (
    <>
      <div className="bg-purple-900 w-full p-10 ">
        <div className="pt-3  ml-[18%]">
          <div className="flex flex-col items-center w-[80%] my-10">
            <p className="text-6xl">Awards</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row ">
          <AwardCard />
          <AwardCard />
          <AwardCard />
        </div>
      </div>
    </>
  );
};

export default Awards;
