import React from 'react'

const Intro = () => {
    return (
        <>
          <div className="bg-purple-600 h-screen w-full">
            <div className='flex'>
                <div className="flex-auto">
                    <div className='flex flex-col bg-violet-900 w-[50%]  min-h-[100%] min-w-[100%]'>
                        <div className='w-[40%] pt-[40%] pl-5'>
                            <p>
                            IEEE RAS of IIT<br/>
                            MICROMAZE<br/>
                            MicroMaze is an inter-university competition designed to challenge participants in developing a micro mouse capable of solving a maze within a specified timeframe.  The main challenge is to design a micro mouse capable of solving a maze within a specified time frame.  

                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-auto">
                    <div className='flex flex-col bg-purple-900 w-[50%]  min-h-[705px] min-w-[100%]'>
                    <div className='w-[40%] pt-[10%] pl-[10%]'>
                            <p>
                            COMPLETE FOR GLORY<br/>
                            This competition tests students' skills in robotics, programming, and problem-solving as they create robots that navigate from the start to the end of the maze efficiently and accurately.

                            </p>
                        </div>
                </div>
            </div>
            </div>
          </div>
        </>
      )
}

export default Intro