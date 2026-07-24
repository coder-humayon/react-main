import React from "react";
import slider1 from '../src/assets/images/slider1.png'

export default function AppleBanner() {
  return (
    <section className="w-full bg-[#f5f5f7] py-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4">

        <div className="flex items-center justify-center gap-4 md:gap-6">

          <div className="hidden sm:block w-[15%] md:w-[20%] h-[280px] sm:h-[380px] md:h-[480px] rounded-r-3xl overflow-hidden relative opacity-40 grayscale-25 shadow-md flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop"
              alt="Side Card Left"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 left-4 text-white font-bold text-lg flex items-center space-x-1">
              <span></span><span>tv+</span>
            </div>
          </div>

          <div className="w-full sm:w-[85%] md:w-[65%] h-[320px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden relative shadow-2xl bg-slate-900 flex-shrink-0">

            <img
              src={slider1}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 sm:p-8">
              <div className="w-[85%] sm:w-[75%] h-[80%] border-[3px] sm:border-[4px] border-red-600/90 rounded-2xl relative flex items-center justify-end pr-4 sm:pr-8 md:pr-12">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-2xl uppercase">
                  TED LASSO
                </h1>
              </div>
            </div>

            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 flex items-end justify-between text-white z-10">

              <div className="flex-1 flex justify-start">
                <button className="bg-white text-black font-semibold text-xs sm:text-sm md:text-base px-5 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-gray-200 transition-transform active:scale-95 shadow-xl">
                  Stream now
                </button>
              </div>

              <div className="hidden sm:flex flex-1 justify-center text-center">
                <p className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-white/90 drop-shadow-md">
                  Comedy • Believe in believe.
                </p>
              </div>

              <div className="flex-1 flex justify-end items-center space-x-1 drop-shadow-md">
                <span className="text-2xl sm:text-3xl font-bold leading-none"></span>
                <span className="text-lg sm:text-2xl font-bold tracking-wider">tv+</span>
              </div>

            </div>

          </div>

          <div className="hidden sm:block w-[15%] md:w-[20%] h-[280px] sm:h-[380px] md:h-[480px] rounded-l-3xl overflow-hidden relative opacity-40 grayscale-25 shadow-md flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop"
              alt="Side Card Right"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

        </div>

      </div>
    </section>
  );
}