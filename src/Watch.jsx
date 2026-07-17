import React from 'react'
import watch from '../src/assets/images/watch.png'

const Watch = () => {
    return (
        <div>
            <section
                className='bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[700px] w-full flex pt-12 sm:pt-16 lg:pt-20 justify-center text-white bg-black'
                style={{ backgroundImage: `url(${watch})` }}
            >
                <div className="text-center px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">Apple Watch</h1>
                    <h4 className='text-red-600 text-[16px] sm:text-[18px] font-semibold mt-1'>Series 8</h4>
                    <p className="text-lg sm:text-xl mt-2 opacity-90">A healthy leap ahead.</p>

                    <div className="flex pt-4 sm:pt-5 gap-6 sm:gap-10 lg:gap-15 justify-center text-[#2997FF] text-[17px] sm:text-[19px] font-sans">
                        <a href="#" className="hover:underline">Learn more &gt;</a>
                        <a href="#" className="hover:underline">Buy &gt;</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Watch
import React from 'react'
import watch from '../src/assets/images/watch.png'

const Watch = () => {
    return (
        <div>
            <section
                className='bg-cover bg-center h-[500px] sm:h-[600px] lg:h-[700px] w-full flex pt-12 sm:pt-16 lg:pt-20 justify-center text-white bg-black'
                style={{ backgroundImage: `url(${watch})` }}
            >
                <div className="text-center px-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">Apple Watch</h1>
                    <h4 className='text-red-600 text-[16px] sm:text-[18px] font-semibold mt-1'>Series 8</h4>
                    <p className="text-lg sm:text-xl mt-2 opacity-90">A healthy leap ahead.</p>

                    <div className="flex pt-4 sm:pt-5 gap-6 sm:gap-10 lg:gap-15 justify-center text-[#2997FF] text-[17px] sm:text-[19px] font-sans">
                        <a href="#" className="hover:underline">Learn more &gt;</a>
                        <a href="#" className="hover:underline">Buy &gt;</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Watch