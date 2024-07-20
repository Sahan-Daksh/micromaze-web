import AwardCard from "../component/AwardCard";
import { awardsImgs } from "../data/imgs/awardsImgs";

const Awards = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-900 via-pink-700 to-black w-full p-10">
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
            prize="$1,000"
          />
          <AwardCard
            title="Winner"
            image={awardsImgs.winner}
            prize="$5,000"
            className="winner" // Add this class to highlight the winner card
          />
          <AwardCard
            title="2nd Runner Up"
            image={awardsImgs.secondRunnerUp}
            prize="$500"
          />
        </div>
      </div>
    </>
  );
};

export default Awards;
