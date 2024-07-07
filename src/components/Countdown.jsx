import React from 'react'

const Countdown = () => {
    return (
        <>
          <div className="bg-violet-400 h-screen w-full">
            <div className="pt-3  ml-[21%]">
              <div className="flex flex-col items-center w-[80%] my-10">
                <p className="text-6xl">GRAND FINALE STARTS IN</p>
              </div>
            </div>
            <div className="flex flex-col items-center pt-[10%] pl-[2%]">
              <p className="text-9xl">00:00:00</p>
            </div>
          </div>
        </>
      )
}

export default Countdown