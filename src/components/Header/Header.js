import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

function Header() {
  const [hamburger, setHamburger] = useState(true);

  return (
    <div className="sticky top-0 z-50  bg-gradient-to-l from-[#FF0000] to-[#FF8938] text-white ">
      <div className="mx-2 flex justify-between items-center lg:mx-[230px]">
        <h1 className="text-3xl md:text-5xl">Tea House</h1>
        <div className="hidden sm:flex">
          <ul className="flex space-x-7">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </div>
        {/* mobile navigation */}
        <div
          className="sm:hidden hover:cursor-pointer z-50"
          onClick={() => setHamburger(!hamburger)}
        >
          {hamburger ? (
            <GiHamburgerMenu className="text-3xl" />
          ) : (
            <IoClose className="text-3xl" />
          )}
        </div>
        <div
          onClick={() => setHamburger(!hamburger)}
          className={
            hamburger
              ? 'hidden'
              : 'absolute top-0 left-0 right-0 bottom-0 h-screen text-3xl text-center flex items-center justify-center space-x-5 bg-gradient-to-l from-[#FF0000] to-[#FF8938] text-white  z-40'
          }
        >
          <ul className="space-y-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
