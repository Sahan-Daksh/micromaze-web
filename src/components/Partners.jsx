import React from 'react'
import PartnerCard from './PartnerCard'

const Partners = () => {
    return (
        <>
          <div className="bg-purple-800 w-full">
            <div className="pt-3  ml-[18%]">
              <div className="flex flex-col items-center w-[80%] my-10">
                <p className="text-6xl">Official Partners</p>
              </div>
            </div>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
            <PartnerCard/>
          </div>
        </>
      )
}

export default Partners