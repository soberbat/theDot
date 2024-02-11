/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ICategories {
  handleClick: (category: string) => void;
}

const Categories = ({ handleClick }: ICategories) => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isActiveCategory, setisActiveCategory] = useState<number | null>(null);
  const [activeCategory, setactiveCategory] = useState(undefined);

  const handleCategoryChange = (category: string, i: number) => {
    if (category === activeCategory) {
      handleClick(undefined);
      setisActiveCategory(null);
      setactiveCategory(undefined);
      return;
    }
    handleClick(category);
    setisActiveCategory(i);
    setactiveCategory(category);
  };

  return (
    <div className="fixed flex items-center justify-between w-1/2 p-4 transform -translate-x-1/2 bg-gray-200 bg-opacity-25 border border-gray-200 rounded-full lg:p-0 lg:backdrop-blur-none backdrop-blur-xl lg:border-none lg:bg-transparent lg:opacity-100 bottom-8 bg-blur left-1/2 lg:left-auto lg:w-2/12 lg:h-full lg:absolute lg:bottom-auto lg:transform-none lg:right-0 ">
      <div className="flex items-center justify-around flex-1 w-2/6 lg:justify-center ">
        {["Theatre", "Movie", "Interactive", "Tv"].map((category, i) => {
          const isHoveredCategory = i === hoveredCategory;

          return (
            <motion.div
              onHoverStart={() => setHoveredCategory(i)}
              onHoverEnd={() => setHoveredCategory(null)}
              onClick={() => handleCategoryChange(category, i)}
              key={i}
              className="relative flex justify-center w-1/6 cursor-pointer "
            >
              <img
                className={`w-4 h-4 
                transition-all ease-in relative z-[5] duration-200
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
                  className="absolute px-2 text-xs text-center text-black transform rounded-md top-8 bg-slate-50"
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
