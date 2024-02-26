/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { forwardRef, useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Marquee from "../Marquee";
import { ActiveCategory } from "@/utils/types/appTypes";

interface IHeaderRef {
  handleClick: (category: ActiveCategory) => void;
  isProductSelected: boolean;
}

export const HeaderWithRef = forwardRef(function Header(
  { handleClick, isProductSelected }: IHeaderRef,
  ref: any
) {
  return (
    <div id="header" ref={ref} className="z-[5] absolute w-full h-24 lg:h-28 ">
      <div className="relative w-full h-full ">
        <motion.div className="absolute top-0 flex gap-2 font-semibold text-white lg:top-1/2 " />
        <div className="absolute bottom-0 left-0 hidden w-screen h-full bg-gradient-to-t from-transparent to-black opacity-30 " />
        <div className="block top-0 left-0 absolute lg:hidden bg-gradient-to-t from-transparent to-40% to-black opacity-45 w-screen h-full " />

        {!isProductSelected && <Categories handleClick={handleClick} />}

        <div className="relative bg-gradient-to-r from-10% from-black to-80% to-transparent w-3/5 h-full ">
          <div className="bottom-0 left-0 absolute flex items-center bg-gradient-to-r from-30% from-black to-transparent pl-4 lg:pl-12 w-2/3 h-full">
            <h1 className="text-4xl font-bold text-white lg:font-light lg:text-6xl">
              A
            </h1>
          </div>
        </div>
        <Marquee />
      </div>
    </div>
  );
});
