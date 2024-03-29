import { Content } from "@/utils/types/Types";
import { motion } from "framer-motion";
import React from "react";
import PlayButton from "./PlayButton";
import Slider from "./Slider";
import Arrow from "./Arrow";

interface Props {
  content: Content;
  handleGoBack: any;
  changeSlideVisibility: (isVisible: boolean) => void;
}

export default function Product({
  content,
  handleGoBack,
  changeSlideVisibility,
}: Props) {
  const { headline, paragraph, paragraph2, date } = content.attributes;

  return (
    <motion.div
      key={"Product"}
      animate={{ opacity: 1, transition: { easing: "circIn", duration: 1 } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full"
    >
      <div className="flex flex-col justify-between h-full pb-5 pl-10 pt-28 lg:pt-48">
        <div className="w-full gap-3 pr-2 text-left text-white lg:pr-24 lg:w-4/12 ">
          <div>
            <h1 className="mb-2 text-3xl text-left "> {headline} </h1>
            <span className="font-serif font-thin "> {date} </span>
          </div>

          <div className="mb-2 text-sm">
            <p className="mb-6 ">{paragraph}</p>
            <p>{paragraph2}</p>
          </div>
        </div>

        <div
          onClick={() => handleGoBack()}
          className="mt-12 text-white cursor-pointer w-min "
        >
          <Arrow />
        </div>
      </div>
      <motion.div
        animate={{ opacity: 1, transition: { delay: 1 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        onClick={() => changeSlideVisibility(true)}
        className="fixed bottom-0 z-50 h-auto transform -translate-x-1/2 cursor-pointer lg:top-1/2 lg:bottom-auto left-1/2 lg:-translate-y-1/2 "
      >
        <PlayButton />
      </motion.div>
    </motion.div>
  );
}
