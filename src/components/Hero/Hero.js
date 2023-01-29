import React from 'react';
import { AiFillStar } from 'react-icons/ai';
function Hero() {
  return (
    <div className="mx-2 lg:mx-[230px] mt-16   md:flex space-y-10 md:space-y-0">
      <div className="space-y-6 flex flex-col items-center md:items-start w-full md:w-1/2">
        <h1 className="text-center md:text-left font-bold text-5xl lg:text-7xl max-w-xl">
          It's good
          <span className="inline-block">tea time at The Tea House</span>
        </h1>

        <p className="text-[#777777] max-w-lg">
          Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your
          Taste Buds.
        </p>
        <div className="inline-block px-3 py-2 rounded-lg bg-gradient-to-l from-[#FF0000] to-[#FF8938] text-white">
          <button className="flex items-center justify-center">
            Explore More
            <img src="/images/arrow.png" alt="" className="inline ml-2" />
          </button>
        </div>
      </div>

      <div className="w-full  flex flex-col justify-center items-center md:w-1/2  relative">
        <img src="/images/banner.png" alt="" />
        <div className="absolute bottom-5 left-20">
          <div className="bg-white rounded-md shadow-md p-2   flex items-center justify-center space-x-2">
            <AiFillStar className="text-3xl text-[#FFC850]" filled />
            <div>
              <h1 className="font-bold">5.00</h1>
              <p className="text-[#777777] text-xs ">Trust Pilot Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
