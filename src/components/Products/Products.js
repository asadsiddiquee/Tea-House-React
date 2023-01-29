import React from 'react';

function Products() {
  return (
    <div
      id="products"
      className="mx-2 lg:mx-[230px] pt-16 scroll-pt-16 flex flex-col justify-center items-center space-y-5"
    >
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center my-5">
          Our Featured Products
        </h1>
        <p className="lg:w-[900px] text-center text-[#777777] mb-5 text-sm lg:text-base">
          Our tea is carefully selected from the finest tea gardens around the
          world to ensure the highest quality and taste. We offer a wide variety
          of teas, including black, green, white, oolong, and herbal varieties,
          so there is something for every taste preference.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-[#F4F4F4] to-[rgba(244, 244, 244, 0)] space-y-2">
          <img src="/images/tea-1.png" alt="" />
          <h1 className="text-2xl font-bold">Milk Tea</h1>
          <p className="w-52 text-center text-[#777777] ">
            Creamer could be replaced by fresh milk
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-[#F4F4F4] to-[rgba(244, 244, 244, 0)] space-y-2">
          <img src="/images/tea-2.png" alt="" />
          <h1 className="text-2xl font-bold">Black Tea</h1>
          <p className="w-52 text-center text-[#777777] ">
            Creamer could be replaced by fresh milk
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-[#F4F4F4] to-[rgba(244, 244, 244, 0)] space-y-2">
          <img src="/images/tea-3.png" alt="" />
          <h1 className="text-2xl font-bold">Lemon Tea</h1>
          <p className="w-52 text-center text-[#777777] ">
            Creamer could be replaced by fresh milk
          </p>
        </div>
        <div className="flex flex-col justify-center items-center rounded-md bg-gradient-to-b from-[#F4F4F4] to-[rgba(244, 244, 244, 0)] space-y-2 p-3">
          <img src="/images/tea-4.png" alt="" />
          <h1 className="text-2xl font-bold">Green Tea</h1>
          <p className="w-52 text-center text-[#777777] ">
            Creamer could be replaced by fresh milk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
