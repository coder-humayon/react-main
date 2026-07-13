import React from 'react'
import iphone14 from '../src/assets/images/iphone14.png'

const Iphone14 = () => {
    return (
        <div>
            <section
                className='bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[700px] w-full flex justify-center text-white pt-14 sm:pt-16 lg:pt-20 bg-[#F5F5F7]'
                style={{ backgroundImage: `url(${iphone14})` }}
            >
                <div className="text-center px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D1D1F]">
                        iPhone 14 Pro
                    </h1>

                    <p className="text-lg sm:text-xl text-[#1D1D1F] mt-2 leading-tight">
                        Two great sizes. Now <br className="hidden sm:block" /> with a splash of yellow.
                    </p>

                    <div className="flex pt-4 sm:pt-5 gap-6 sm:gap-10 lg:gap-15 justify-center text-[#2997FF] text-[17px] sm:text-[19px] font-sans">
                        <a href="#" className="hover:underline">Learn more &gt;</a>
                        <a href="#" className="hover:underline">Buy &gt;</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Iphone14