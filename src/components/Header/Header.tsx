/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Marquee from "../Marquee";

interface IHeaderRef {
  handleClick: (category: string) => void;
}

export const HeaderWithRef = forwardRef(function FormField(
  { handleClick }: IHeaderRef,
  ref: any
) {
  return (
    <div id="header" ref={ref} className="absolute z-10 w-full h-28 ">
      <div className="relative w-full h-full ">
        <motion.div className="absolute flex gap-2 font-semibold text-white top-1/2 "></motion.div>
        <Categories handleClick={handleClick} />
        <div className="relative w-4/12 h-full bg-gradient-to-r from-10% from-black to-transparent ">
          <div className="absolute bottom-0 left-0 w-2/3 h-full pl-9 flex items-center shadow-2xl shadow-black  bg-gradient-to-r from-30% from-black to-transparent">
            <h1 className="text-6xl font-light text-white">A</h1>
          </div>
        </div>
        <Marquee />
      </div>
    </div>
  );
});
