/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";

import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  content: Content;
  changeSlideVisibility: (isSlideVisible: boolean) => void;
}

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Content } from "@/utils/types/Types";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "./Arrow";
import {
  fromInvisibleToVisible,
  sliderIndexTracker,
  sliderText,
  sliderTextVariant,
} from "@/utils/Variants/variants";

const Slider = ({ content, changeSlideVisibility }: Props) => {
  const { headline, slider } = content.attributes;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<any>(null);

  const [activeSlide, setactiveSlide] = useState(1);

  const handleInit = (swiper: any) => {
    (swiper.params.navigation as any).prevEl = prevRef.current;
    (swiper.params.navigation as any).nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  };
  return (
    <motion.div
      variants={fromInvisibleToVisible}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute top-0 left-0 z-50 w-full h-full font-serif bg-black"
    >
      <div className="relative flex flex-col items-center w-full h-full gap-4 px-12 py-20 text-white">
        {/* <ButtonNext ref={nextRef}>
          <NextArrow />
        </ButtonNext> */}

        <div className="flex items-baseline justify-between w-full ">
          <span className="font-sans text-5xl font-light">{headline}</span>
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
            <span>{slider.data.length} </span>
          </div>
        </div>

        <div className="relative w-full h-[75%] ">
          <div className="absolute top-0 left-0 z-30 w-12 pl-4 h-full bg-gradient-to-r from-10% from-black to-transparent flex items-center justify-center ">
            <div ref={prevRef} className="cursor-pointer ">
              <Arrow />
            </div>
          </div>
          <div className="absolute pr-4 top-0 right-0 z-30 w-12 h-full bg-gradient-to-l from-10% from-black flex items-center justify-center to-transparent ">
            <div
              ref={nextRef}
              className="transform cursor-pointer   scale-x-[-1]"
            >
              <Arrow />
            </div>
          </div>
          <Swiper
            style={{
              height: "100%",
              width: "100%",
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
            {slider.data.map((slideItem, index) => {
              const sourceDomainUrl = "http://localhost:1337";
              const imageUrl = sourceDomainUrl + slideItem.attributes.url;
              console.log(imageUrl);
              return (
                <SwiperSlide key={index}>
                  {({ isActive }) => {
                    isActive && setactiveSlide(index);

                    return <img src={imageUrl} />;
                  }}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <motion.div
            key={activeSlide}
            initial="initial"
            animate="animate"
            variants={sliderText}
            className="absolute font-sans text-sm font-light transform -translate-x-1/2 -bottom-20 left-1/2 "
          >
            dsggggggjagjagjgadgadj
          </motion.div>
        </div>
        <div
          onClick={() => changeSlideVisibility(false)}
          className="absolute flex items-center justify-center w-10 h-10 font-mono text-xl text-center text-black bg-white rounded-full cursor-pointer bottom-9 left-50"
        >
          X
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
