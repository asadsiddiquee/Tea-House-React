import React from 'react';

function Footer() {
  return (
    <div className="bg-gradient-to-l from-[#FF00001A] to-[#FF89381A]">
      <div className="mx-2 lg:mx-[230px] mt-16 ">
        <div>
          <div className="flex justify-between pt-32 space-x-2">
            <img src="images/cup.png" alt="" />
            <div className="flex justify-center items-center space-x-5">
              <p>Ready to get Products?</p>
              <button className="inline-block px-3 py-2 rounded-lg bg-gradient-to-l from-[#FF0000] to-[#FF8938] text-white">
                Buy Products
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="mt-16 flex justify-around">
          {/* 1 */}
          <div className="space-y-3">
            <h2 className="font-bold">Quick Links</h2>
            <ul className="space-y-3">
              <li className="hover:underline">
                <a href="#home">Home</a>
              </li>
              <li className="hover:underline">
                <a href="#home">About Us</a>
              </li>
              <li className="hover:underline">
                <a href="#home">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* 1 end */}
          {/* 2 */}
          <div className="space-y-3">
            <h2 className="font-bold">Our services</h2>
            <ul className="space-y-3">
              <li className="hover:underline">
                <a href="#home">Wholesale</a>
              </li>
              <li className="hover:underline">
                <a href="#home">Any Events</a>
              </li>
              <li className="hover:underline">
                <a href="#home">International</a>
              </li>
            </ul>
          </div>
          {/* 2 end */}
          {/* 3 */}
          <div className="space-y-3">
            <h2 className="font-bold">Help</h2>
            <ul className="space-y-3">
              <li className="hover:underline">
                <a href="#home">FAQ</a>
              </li>
              <li className="hover:underline">
                <a href="#home">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* 3 end */}
        </div>
        {/* copyright */}
        <div className="text-center py-16">
          © 2023 Tea House - All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
