import { motion } from "framer-motion";
import React, { forwardRef } from "react";

interface IHeaderRef {
  innerRef: any;
}

export const HeaderWithRef = forwardRef(function FormField(props, ref: any) {
  return (
    <div id="header" ref={ref} className="absolute z-10 w-full h-28 ">
      <div className="relative w-full h-full ">
        <motion.div className="absolute flex gap-2 font-semibold text-white top-1/2 "></motion.div>
        <div className="absolute right-0 flex items-center justify-between w-1/6 h-full ">
          <div className="flex items-center justify-center flex-1 w-1/3 gap-5">
            <img className="w-5 h-5" src="/controller.svg" alt="" />
            <img className="w-5 h-5" src="/tv-fill.svg" alt="" />
            <img className="w-5 h-5" src="/event.svg" alt="" />
            <img className="w-5 h-5 " src="/camera.svg" alt="" />
          </div>
        </div>
        <div className="relative w-4/12 h-full bg-gradient-to-r from-10% from-black to-transparent ">
          <div className="absolute bottom-0 left-0 w-2/3 h-full pl-9 flex items-center  shadow-2xl shadow-black  bg-gradient-to-r from-30% from-black to-transparent">
            <h1 className="text-6xl font-light text-white">A</h1>
          </div>
        </div>
        <div className="absolute top-0 flex items-center justify-center w-full h-full pr-9 ">
          <div className="relative flex w-3/4 mt-0 mb-0 ml-auto mr-auto overflow-hidden text-sm font-medium text-white opacity-60 ">
            <div className="flex justify-around flex-shrink-0 min-w-full gap-1 animate-marquee">
              Annapurna is live explore launching at 15 May on Steam • Annapurna
              is live explore launching at 15 May on Steam • Annapurna is live
              explore launching at 15 May on Steam
            </div>
            <div className="flex justify-around flex-shrink-0 min-w-full gap-1 animate-marquee">
              Annapurna is live explore launching at 15 May on Steam • Annapurna
              is live explore launching at 15 May on Steam • Annapurna is live
              explore launching at 15 May on Steam
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
