import React from 'react';

function Clients() {
  return (
    <div className=" mx-2 lg:mx-[230px] mt-16 ">
      <div className="rounded-lg bg-gradient-to-l from-[#FF0000] to-[#FF8938] z-0 grid md:grid-cols-2 grid-cols-1">
        {/* first section */}
        <div className="py-20 md:py-40 px-8 md:px-16 space-y-5">
          <h1 className="text-5xl text-[#F4F4F4] font-bold">
            Meet Our Super Clients
          </h1>
          <p className="text-[#F4F4F4]">
            Their tea Providers are carefully selected from the finest tea
            gardens around the world to ensure the highest quality and taste.
          </p>
          <button className="px-4 py-2 bg-[#FFFFFF] rounded-md ">
            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-l from-[#FF0000] to-[#FF8938]">
              Show All
            </p>
          </button>
        </div>
        {/* second section */}
        <div className="py-9 flex flex-col justify-center items-center ">
          <div className="">
            {/* card */}

            <div className="relative pt-6 pl-6 ml-2">
              <img
                src="/images/client.png"
                alt=""
                className="absolute top-0 left-0"
              />
              <div className="bg-[#FFFFFF] rounded-md p-8 space-y-3 w-3/4">
                <p className="text-[#777777] ">
                  They are providing the best and suitable Tea for the people
                  who are interested to refreshment
                </p>
                <h3 className="text-[#1C1C1C] font-bold">Ilham Yuda</h3>
                <p className="text-[#5D5A6F]">Businessman</p>
              </div>
            </div>

            {/* card */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
