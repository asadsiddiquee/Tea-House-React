import React from 'react';

function Events() {
  return (
    <div
      id="events"
      className="mx-2 pt-20 lg:mx-[230px] space-y-8 scroll-pt-20"
    >
      <div className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-5xl font-bold">News & Events</h1>
        <p className="text-[#777777]">
          Carefully selected from the finest tea gardens around the world to
          ensure the highest quality and taste
        </p>
      </div>
      {/* Event section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* event cards */}
        <div className="p-5 rounded-lg border border-[#D2D2D2] space-y-3">
          <img src="/images/news-1.png" alt="" />
          <p className="text-[#777777]">Feb 05, 2023</p>
          <p className="font-bold text-lg">Collecting 8 points for discount</p>
          <p className="text-[#777777]">
            Hurry and Collect points to get amazing offer
          </p>
          <a href="/" className="text-black font-bold">
            Learn More
          </a>
        </div>
        {/* event cards */}
        {/* event cards */}
        <div className="p-5 rounded-lg border border-[#D2D2D2] space-y-3">
          <img src="/images/news-2.png" alt="" />
          <p className="text-[#777777]">Feb 05, 2022</p>
          <p className="font-bold text-lg">Collecting 8 points for discount</p>
          <p className="text-[#777777]">
            Hurry and Collect points to get amazing offer
          </p>
          <a href="/" className="text-black font-bold">
            Learn More
          </a>
        </div>
        {/* event cards */}
        {/* event cards */}
        <div className="p-5 rounded-lg border border-[#D2D2D2] space-y-3">
          <img src="/images/news-3.png" alt="" />
          <p className="text-[#777777]">Feb 05, 2021</p>
          <p className="font-bold text-lg">Collecting 8 points for discount</p>
          <p className="text-[#777777]">
            Hurry and Collect points to get amazing offer
          </p>
          <a href="/" className="text-black font-bold">
            Learn More
          </a>
        </div>
        {/* event cards */}
      </div>
    </div>
  );
}

export default Events;
