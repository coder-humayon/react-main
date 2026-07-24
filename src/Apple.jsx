import React from 'react';
import { FaApple } from "react-icons/fa";
import apple1 from '../src/assets/images/apple1.png'
import apple2 from '../src/assets/images/apple2.png'
import apple3 from '../src/assets/images/apple3.png'
import apple4 from '../src/assets/images/apple4.png'
import apple5 from '../src/assets/images/apple5.png'
import apple6 from '../src/assets/images/apple6.png'
const Apple = () => {
  return (
    <section className=" py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1262px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-[#fbfbfd] min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-between pt-12 overflow-hidden text-center rounded-[4px] relative">
          <div className="px-4">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#1d1d1f] tracking-tight">iPad</h2>
            <p className="text-[17px] sm:text-[21px] text-[#1d1d1f] mt-1">Lovable. Drawable. Magical.</p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Learn more &gt;</a>
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Buy &gt;</a>
            </div>
          </div>
          <div className="w-full max-w-[400px] mt-6 px-4">
            <img src={apple1} className="w-full h-auto object-contain object-bottom mx-auto" />
          </div>
        </div>

        <div className="bg-[#000000] min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-between pt-12 overflow-hidden text-center rounded-[4px] relative">
          <div className="px-4 z-10">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#f5f5f7] tracking-tight">MacBook Pro</h2>
            <p className="text-[17px] sm:text-[21px] text-[#f5f5f7] mt-1">Supercharged by M2 Pro and M2 Max.</p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#2997ff] hover:underline text-[15px] sm:text-[17px]">Learn more &gt;</a>
              <a href="#" className="text-[#2997ff] hover:underline text-[15px] sm:text-[17px]">Buy &gt;</a>
            </div>
          </div>
          <div className="w-full max-w-[500px] mt-4 px-4 flex-1 flex items-end">
            <img src={apple2} className="w-full h-auto object-contain object-bottom mx-auto" />
          </div>
        </div>

        <div className="bg-[#000000] min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-between pt-12 overflow-hidden text-center rounded-[4px] relative">
          <div className="px-4 z-10">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#f5f5f7] tracking-tight">HomePod</h2>
            <p className="text-[17px] sm:text-[21px] text-[#f5f5f7] mt-1">Profound sound.</p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#2997ff] hover:underline text-[15px] sm:text-[17px]">Learn more &gt;</a>
              <a href="#" className="text-[#2997ff] hover:underline text-[15px] sm:text-[17px]">Buy &gt;</a>
            </div>
          </div>
          <div className="w-full max-w-[450px] mt-4 flex-1 flex items-end">
            <img src={apple3} className="w-full h-auto object-contain object-bottom mx-auto" />
          </div>
        </div>

        <div className="min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-start pt-12 overflow-hidden text-center rounded-[4px] relative bg-cover bg-center"
          style={{ backgroundImage: `url(${apple4})` }}
        >
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          <div className="px-4 z-10">
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#ffffff] tracking-tight drop-shadow-sm">AirPods Pro</h2>
            <p className="text-[17px] sm:text-[21px] text-[#ffffff] mt-1 max-w-[280px] sm:max-w-[none] mx-auto drop-shadow-sm">
              Up to 2x more Active Noise Cancellation.
            </p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#ffffff] hover:underline text-[15px] sm:text-[17px] font-medium">Learn more &gt;</a>
              <a href="#" className="text-[#ffffff] hover:underline text-[15px] sm:text-[17px] font-medium">Buy &gt;</a>
            </div>
          </div>
        </div>

        <div className="bg-[#fbfbfd] min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-between pt-12 overflow-hidden text-center rounded-[4px] relative">
          <div className="px-4">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1d1d1f] tracking-tight flex items-center justify-center gap-1">
              <FaApple />Fitness+
            </h2>
            <p className="text-[17px] sm:text-[21px] text-[#1d1d1f] mt-1 max-w-[280px] sm:max-w-[none] mx-auto">
              Welcome to the year of you. Now all you need is iPhone.
            </p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Learn more &gt;</a>
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Try it free &gt;</a>
            </div>
          </div>
          <div className="w-full max-w-[380px] mt-6 px-4">
            <img src={apple5} className="w-full h-auto object-contain object-bottom mx-auto" />
          </div>
        </div>

        <div className="bg-[#FBFBFD] min-h-[500px] sm:min-h-[580px] flex flex-col items-center justify-between pt-12 overflow-hidden text-center rounded-[4px] relative">
          <div className="px-4">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#1d1d1f] tracking-tight flex items-center justify-center gap-1">
              <FaApple />Card
            </h2>
            <p className="text-[17px] sm:text-[21px] text-[#1d1d1f] mt-1 max-w-[280px] sm:max-w-[none] mx-auto">
              Get up to 3% Daily Cash back with every purchase.
            </p>
            <div className="mt-3 flex items-center justify-center gap-6">
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Learn more &gt;</a>
              <a href="#" className="text-[#0066cc] hover:underline text-[15px] sm:text-[17px]">Apply now &gt;</a>
            </div>
          </div>
          <div className="w-full max-w-[420px] mt-6 px-4">
            <img src={apple6} className="w-full h-auto object-contain object-bottom mx-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Apple;