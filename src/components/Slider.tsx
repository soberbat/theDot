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

const Slider = ({ content, changeSlideVisibility }: Props) => {
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 left-0 z-50 w-full h-full font-serif bg-black"
    >
      <div className="relative flex flex-col items-center w-full h-full gap-4 px-12 py-20 text-white">
        {/* <ButtonNext ref={nextRef}>
          <NextArrow />
        </ButtonNext> */}

        <div className="flex items-baseline justify-between w-full ">
          <span className="font-sans text-5xl font-light">Name</span>
          <div className="flex gap-2 text-xs ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              key={activeSlide}
            >
              {activeSlide}
            </motion.div>

            <span>/</span>
            <span>5</span>
          </div>
        </div>

        <div className="relative w-full h-[70%] ">
          <div className="absolute top-0 left-0 z-30 w-16 h-full bg-gradient-to-r from-10% from-black to-transparent " />
          <div className="absolute top-0 right-0 z-30 w-16 h-full bg-gradient-to-l from-10% from-black to-transparent " />
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
            {Array(4)
              .fill(0)
              .map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {({ isActive }) => {
                      isActive && setactiveSlide(index);

                      return (
                        <div className="w-full h-full bg-white  bg-[url('http://localhost:1337/uploads/guillermo_perez_E_Omt_Tu2_S5_U_unsplash_57d1308687.jpg')] "></div>
                      );
                    }}
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div
          onClick={() => changeSlideVisibility(false)}
          className="absolute flex items-center justify-center w-10 h-10 font-mono text-center text-black bg-white rounded-full cursor-pointer bottom-9 left-50"
        >
          X
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
