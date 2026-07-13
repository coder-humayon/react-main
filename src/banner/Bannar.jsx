import React from 'react'
import Banner from '../assets/images/banner.png'

const Bannar = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="headline flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center py-5 text-center">
          <p className='text-[14px] text-[#1D1D1F] font-normal font-sans max-w-[600px] sm:max-w-none'>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1
          </p>
          <a href="#" className='text-[14px] text-[#0066CC] font-normal font-sans hover:underline whitespace-nowrap'>
            Shop iPhone
          </a>
        </div>
      </div>
      
      <section 
        className='bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[700px] w-full flex pt-12 sm:pt-16 lg:pt-20 justify-center text-white bg-black'
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">iPhone 14 Pro</h1>
          <p className="text-lg sm:text-xl mt-2 font-sans opacity-90">Pro. Beyond.</p>
          
          <div className="flex pt-4 sm:pt-5 gap-8 sm:gap-14 lg:gap-20 justify-center text-[#2997FF] text-[17px] sm:text-[19px] font-sans">
            <a href="#" className="hover:underline">Learn more &gt;</a>
            <a href="#" className="hover:underline">Buy &gt;</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bannar