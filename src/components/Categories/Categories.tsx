/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ICategories {
  handleClick: (category: string) => void;
}

const Categories = ({ handleClick }: ICategories) => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isActiveCategory, setisActiveCategory] = useState<number | null>(null);

  return (
    <div className="absolute right-0 flex items-center justify-between w-2/12 h-full ">
      <div className="flex items-center justify-center flex-1 w-2/6 ">
        {["Theatre", "Movie", "Interactive", "Tv"].map((category, i) => {
          const isHoveredCategory = i === hoveredCategory;
          return (
            <motion.div
              onHoverStart={() => setHoveredCategory(i)}
              onHoverEnd={() => setHoveredCategory(null)}
              onClick={() => setisActiveCategory(i)}
              key={i}
              className="relative flex justify-center w-1/6 "
            >
              <img
                onClick={() => handleClick(category)}
                className={`w-4 h-4 
                transition-all ease-in relative z-10 duration-200
                ${
                  isHoveredCategory
                    ? "opacity-100"
                    : isActiveCategory === i
                    ? "opacity-100"
                    : "opacity-60"
                }  `}
                src={`/${category.toLocaleLowerCase()}.svg`}
                alt=""
              />
              {isHoveredCategory && (
                <motion.span
                  layout
                  transition={{ easings: "ease-in" }}
                  animate={{ opacity: 1, y: 5 }}
                  initial={{ opacity: 0, y: 15 }}
                  className="absolute px-2 text-xs text-center text-black transform rounded-md z top-8 bg-slate-50"
                >
                  {category}
                </motion.span>
              )}
              {isActiveCategory === i && (
                <motion.span
                  key={"motionkey"}
                  layoutId="dotLayout"
                  layout
                  className="absolute z-0 block w-8 h-8 rounded-full bg-slate-400 -top-1/2"
                ></motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
