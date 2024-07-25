import AwardCard from "../component/AwardCard";
import { awardsImgs } from "../data/imgs/awardsImgs";

const Awards = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-500 to-slate-800 w-full p-10">
        <div className="ml-[18%]">
          <div className="flex flex-col items-center w-[80%] my-10">
            <p className="text-6xl text-white font-bold">Awards</p>
            <p className="text-xl text-gray-300 mt-4 text-center">
              Recognizing outstanding achievements and milestones
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-10 mt-10">
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
    </>
  );
};

export default Awards;
