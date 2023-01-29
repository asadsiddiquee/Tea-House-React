import React from 'react';

function WhyUs() {
  return (
    <div className="mx-2 lg:mx-[230px] mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* first part */}
      <div className="grid grid-cols-2 grid-rows-3 gap-7">
        <div className="bg-gradient-to-r from-[#FF0000]/10 to-[#FF8938]/10 row-span-1 rounded-lg"></div>
        <div className="bg-[#E6A6231A] rounded-lg row-span-2 flex justify-center p-5">
          <img
            src="/images/fresh-1.png"
            alt=""
            className="object-contain h-full"
          />
        </div>
        <div className="bg-[#5776391A] rounded-lg row-span-2 flex justify-center p-5">
          <img
            src="/images/fresh-2.png"
            alt=""
            className="object-contain  h-full"
          />
        </div>
        <div className="bg-gradient-to-r from-[#D9D9D9] to-[rgba(255, 255, 255, 0)] rounded-lg row-span-1"></div>
      </div>
      {/* second part */}
      <div className="flex flex-col lg:justify-between space-y-3 lg:space-y-0">
        <h1 className="text-5xl font-bold">Great Tea, Freshly Presented</h1>
        <p className="text-[#777777]">
          The meaning of gong cha is chanese is to provide the best tea to
          emperor from all possessions . It represents the highest quality and
          self expectation. Establishing in 2006, Gong cha had been deeply
          appreciated by its custoers because of good words of mouth and unique
          customized service orginated from Taiwan.
        </p>
        <h3 className="text-xl font-bold">Unique Taste</h3>
        <p className="text-[#777777]">
          A Unique and different style from other teapots gives a luxurious and
          minimalist impression
        </p>
        <h3 className="text-xl font-bold">Premium Quality</h3>
        <p className="text-[#777777]">
          Premium Quality that makes tea more elegant and more durable when you
          use it.
        </p>
      </div>
    </div>
  );
}

export default WhyUs;
