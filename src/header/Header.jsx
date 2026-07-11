import React from 'react'
import { FaApple } from "react-icons/fa";

const Header = () => {
  return (
    <section className='py-5 bg-[#16161780] '>
        <div>
      <div className="container">
        <div className="flex justify-between items-center">
            <div className="logo text-white text-3xl"><FaApple /></div>
            <div className="menue"></div>
            <div className="icon"></div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Header
