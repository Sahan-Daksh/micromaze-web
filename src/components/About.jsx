import React from 'react'

const About = () => {
    return (
        <>
          <div className="bg-purple-800 h-screen w-full">
            <div className="pt-3  ml-[18%]">
              <div className="flex flex-col items-center w-[80%] my-10">
                <p className="text-6xl">ABOUT MICROMAZE</p>
              </div>
            </div>
            <div className=" pl-[24%]">
                <div className='flex flex-col items-center bg-slate-50 w-[70%] rounded-lg'>
                <p className="text-2xl text-purple-800 text-center">
                <br/>MicroMaze is an inter-university competition designed to challenge participants in developing a micro mouse capable of solving a maze within a specified timeframe. The main challenge is to design a micro mouse capable of solving a maze within a specified time frame.<br/><br/> 
This competition tests students' skills in robotics, programming, and problem-solving as they create robots that navigate from the start to the end of the maze efficiently and accurately.<br/><br/>
This provides a platform for undergraduates to apply their knowledge in a practical setting, fostering collaboration and learning.<br/><br/>
                </p>
                </div>
              
            </div>
          </div>
        </>
      )
}

export default About