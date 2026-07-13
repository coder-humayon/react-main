import React from 'react'
import Banner from '../assets/images/banner.png'
const Bannar = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="headline flex gap-4 justify-center py-5">
          <p className='text-[14px] text-[#1D1D1F] font-normal font-sans'>
            Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1
          </p>
          <a href="#" className='text-[14px] text-[#0066CC] font-normal font-sans hover:underline'>Shop iPhone</a>
        </div>
      </div>
      <section 
        className='bg-cover bg-center h-[700px] w-full flex pt-20 justify-center text-white'
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">iPhone 14 Pro</h1>
          <p className="text-xl mt-2">Pro. Beyond.</p>
          <div className="flex">
            <a href="">Learn more</a>
            <a href="">Learn more</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bannar