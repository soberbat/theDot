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
  const { headline, subText, description } = content.attributes;

  return (
    <motion.div
      key={"Product"}
      animate={{ opacity: 1, transition: { easing: "circIn" } }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full"
    >
      <div className="flex flex-col justify-between h-full pt-48 pb-12 pl-10">
        <div className="w-4/12 gap-3 pr-24 text-left text-white ">
          <div>
            <h1 className="mb-2 text-3xl text-left "> {headline} </h1>
            <span className="font-serif font-thin "> 03 03 1998 </span>
          </div>

          <div className="mb-2 text-sm">
            <p className="mb-6 ">{description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus, architecto? Fuga labore tenetur deleniti qui
              consectetur sit numquam dolores aspernatur eius. Tempora doloribus
              porro deserunt fuga ratione accusantium optio iure?
            </p>
          </div>

          <div className="mb-6 font-serif text-xs ">
            <span className="text-xs font-light text-gray-500 ">
              DIRECTED BY
            </span>
            <div className="flex flex-col gap-1 text-xs font-thin text-gray-300">
              <span> Sean Mern</span>
              <span> Winnie Pooh</span>
              <span>Margin Pad</span>
            </div>
          </div>

          <div className="mb-6 font-serif text-xs ">
            <span className="font-thin text-gray-500">CAST</span>
            <div className="flex flex-col gap-1 text-xs font-thin text-gray-300">
              <span> Margin Herny</span>
              <span> Violet Back</span>
              <span> Voodie Bryan</span>
            </div>
          </div>
        </div>

        <div onClick={() => handleGoBack()} className="mt-5 text-white w-min ">
          <Arrow />
        </div>
      </div>
      <motion.div
        animate={{ opacity: 1, transition: { delay: 1 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        onClick={() => changeSlideVisibility(true)}
        className="fixed z-50 cursor-pointer transform -translate-y-1/2 left-[55%] top-1/2 "
      >
        <PlayButton />
      </motion.div>
    </motion.div>
  );
}
