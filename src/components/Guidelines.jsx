import React from 'react'
import GuidelinesCard from './GuidelinesCard';

const Guidelines = () => {
    return (
        <>
          <div className="bg-purple-600 p-10 w-full">
            <div className="pt-3  ml-[18%]">
              <div className="flex flex-col items-center w-[80%] my-10">
                <p className="text-6xl">GUIDELINES</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row ">
              <GuidelinesCard/>
              <GuidelinesCard/>
            </div>
          </div>
        </>
      )
}

export default Guidelines;