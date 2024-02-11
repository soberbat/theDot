/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Marquee from "../Marquee";

interface IHeaderRef {
  handleClick: (category: string) => void;
  isProductSelected: boolean;
}

export const HeaderWithRef = forwardRef(function Header(
  { handleClick, isProductSelected }: IHeaderRef,
  ref: any
) {
  return (
    <div id="header" ref={ref} className="absolute z-[5] w-full lg:h-28 h-24 ">
      <div className="relative w-full h-full ">
        <motion.div className="absolute top-0 flex gap-2 font-semibold text-white lg:top-1/2 " />
        <div className="absolute bottom-0 left-0 hidden w-screen h-full bg-gradient-to-t from-transparent to-black opacity-60 " />
        <div className="absolute top-0 left-0 w-screen h-full bg-gradient-to-t  to-40% from-transparent to-black  block lg:hidden " />

        {!isProductSelected && <Categories handleClick={handleClick} />}

        <div className="relative w-3/5  h-full bg-gradient-to-r from-10% from-black to-40% to-transparent ">
          <div className="absolute bottom-0 left-0 w-2/3 h-full lg:pl-12 pl-4 flex items-center   bg-gradient-to-r from-30% from-black to-transparent">
            <h1 className="text-4xl font-bold text-white lg:text-6xl lg:font-light">
              A
            </h1>
          </div>
        </div>
        <Marquee />
      </div>
    </div>
  );
});
