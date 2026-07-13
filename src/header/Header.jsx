import React, { useState } from 'react';
import { FaApple } from "react-icons/fa";
import { IoSearchOutline, IoBagOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    "Store", "Mac", "iPad", "iPhone", "Watch", 
    "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
  ];

  return (
    <section className='py-3 md:py-4 bg-[#161617c5] backdrop-blur-md sticky top-0 z-50'>
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex justify-between items-center">
          <div className=" md:hidden text-white text-[24px] cursor-pointer hover:opacity-70 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>

          <div className="logo text-white text-[22px] md:text-[26px] flex items-center transition-opacity duration-200 hover:opacity-70">
            <a href="/"><FaApple /></a>
          </div>

          <div className="hidden md:block">
            <ul className='flex gap-4 lg:gap-8 text-[#f5f5f7] opacity-80 font-normal text-[14px] font-sans tracking-wide'>
              {menuItems.map((item, index) => (
                <li key={index} className="transition-all duration-200 hover:opacity-100 hover:underline underline-offset-4 hover:text-cyan-300">
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="icon flex gap-5 md:gap-7 text-white text-[18px] md:text-[20px] opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity"><IoSearchOutline /></a>
            <a href="#" className="hover:opacity-100 transition-opacity"><IoBagOutline /></a>
          </div>

        </div>
      </div>
      <div className={`md:hidden fixed left-0 w-full bg-[#161617] transition-all duration-300 ease-in-out z-40 overflow-hidden ${isOpen ? 'top-[50px] h-screen opacity-100' : 'top-[-100%] h-0 opacity-0'}`}>
        <ul className='flex flex-col px-10 py-6 gap-6 text-[#f5f5f7] text-[24px] font-semibold font-sans'>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setIsOpen(false)} className="border-b border-[#333] pb-2 transition-all duration-200 hover:text-white hover:pl-2">
              <a href={`#${item.toLowerCase()}`} className="block w-full">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Header;