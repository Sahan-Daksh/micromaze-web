const Timeline = () => {
  return (
    <>
      <div className="bg-violet-700 h-screen w-full">
        <div className="pt-3  ml-[18%]">
          <div className="flex flex-col items-center w-[80%] my-10">
            <p className="text-6xl">Timeline</p>
            <ul>
              <li className="relative flex gap-6 mt-10">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>Registration Open</p>
                  <p>1st July, 2024</p>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>Awareness Session</p>
                  <p>14th July, 2024</p>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>Registration Closed</p>
                  <p>17th July, 2024</p>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>Online Workshop</p>
                  <p>20th July, 2024</p>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>Qualifier Round</p>
                  <p>10th August, 2024</p>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg width="100" height="100">
  <circle cx="50" cy="50" r="10" fill="white" />
</svg>
              </div>
              <div className="text-lg text-gray">
                  <p>The Finale</p>
                  <p>11th August, 2024</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default Timeline;
