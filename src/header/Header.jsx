import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className='py-4 bg-[#161617c5] '>
        <div>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="logo text-white text-[40px]">
              <a href=""><FaApple /></a>
            </div>
            <div className="menue">
              <ul className=' flex gap-8 text-white font-medium text-[14px] font-sans'>
                <li><a href="">Store</a></li>
                <li><a href="">Mac</a></li>
                <li><a href="">iPad</a></li>
                <li><a href="">iPhone</a></li>
                <li><a href="">Watch</a></li>
                <li><a href="">AirPods</a></li>
                <li><a href="">TV & Home</a></li>
                <li><a href="">Entertinment</a></li>
                <li><a href="">Accessories</a></li>
                <li><a href="">Support</a></li>
              </ul>
            </div>
            <div className="icon flex gap-7 text-white text-[18px]">
              <a href=""><IoSearchOutline /></a>
              <a href=""><IoBagOutline /></a>
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Header
