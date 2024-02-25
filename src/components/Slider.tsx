/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Content } from "@/utils/types/Types";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "./Arrow";
import {
  fromBottomToTop,
  sliderIndexTracker,
  sliderText,
} from "@/utils/Variants/variants";

interface Props {
  content: Content;
  changeSlideVisibility: (isSlideVisible: boolean) => void;
  isSliderVisible: boolean;
}
const Slider = ({ content, changeSlideVisibility, isSliderVisible }: Props) => {
  const [activeSlide, setactiveSlide] = useState(1);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleInit = (swiper: any) => {
    (swiper.params.navigation as any).prevEl = prevRef.current;
    (swiper.params.navigation as any).nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  };

  const pointerEvents = isSliderVisible
    ? "pointer-events-all"
    : "pointer-events-none";

  return (
    <motion.div
      variants={fromBottomToTop}
      initial="initial"
      animate={isSliderVisible ? "animate" : "exit"}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className={`absolute bottom-0  ${pointerEvents} z-50 left-0 w-full  rounded-t-xl  h-[97vh]  font-serif   bg-zinc-900`}
    >
      <div className="relative flex flex-col items-center w-full h-full gap-4 px-12 py-20 text-white">
        <div className="flex items-baseline justify-between w-full ">
          <span className="font-sans text-5xl font-light">
            {content && content.attributes.headline}
          </span>
          <div className="flex gap-2 text-xs ">
            <motion.div
              initial="initial"
              animate="animate"
              variants={sliderIndexTracker}
              key={activeSlide}
            >
              {activeSlide}
            </motion.div>

            <span>/</span>
            <span>{content && content.attributes.slider.data.length} </span>
          </div>
        </div>

        <div className="relative w-full h-[75%] ">
          <div className="top-0 -left-2 lg:left-0 z-30 absolute flex justify-center items-center bg-gradient-to-r from-10% from-zinc-900 to-transparent pl-4 w-12 h-full ">
            <div ref={prevRef} className="cursor-pointer ">
              <Arrow />
            </div>
          </div>
          <div className="top-0 -right-2 lg:right-0 z-30 absolute flex justify-center items-center bg-gradient-to-l from-10% from-zinc-900 to-transparent pr-4 w-12 h-full ">
            <div
              ref={nextRef}
              className="transform cursor-pointer scale-x-[-1]"
            >
              <Arrow />
            </div>
          </div>
          {content && (
            <Swiper
              style={{
                height: "100%",
                width: "100%",
                pointerEvents: "none",
              }}
              loop
              centeredSlides
              spaceBetween={40}
              slidesPerView={1.5}
              modules={[Navigation]}
              slideToClickedSlide={true}
              onInit={(swiper) => handleInit(swiper)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {content &&
                content.attributes.slider.data.map((slideItem, index) => {
                  const imageUrl = slideItem.attributes
                    .url as unknown as string;
                  return (
                    <SwiperSlide key={index}>
                      {({ isActive }) => {
                        isActive && setactiveSlide(index + 1);

                        return (
                          <img
                            className="object-cover h-full rounded-sm shadow-sm pointer-events-none select-none shadow-black lg:h-auto"
                            alt="source image"
                            src={imageUrl}
                          />
                        );
                      }}
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          )}
          <motion.div
            key={activeSlide}
            initial="initial"
            animate="animate"
            variants={sliderText}
            className="absolute font-sans text-sm font-light transform -translate-x-1/2 -bottom-20 left-1/2 "
          >
            Quick Brown Fox
          </motion.div>
        </div>
        <h1
          onClick={() => changeSlideVisibility(false)}
          className="absolute flex items-center justify-center w-10 h-10 font-mono text-xl font-thin text-center text-black bg-white rounded-full cursor-pointer bottom-9 left-50"
        >
          X
        </h1>
      </div>
    </motion.div>
  );
};

export default Slider;
