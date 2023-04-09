import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { boxVariant, listVariant } from "./animations";

interface IProduct {
  activeProduct: number;
  handleProductChange: (i: number) => void;
  data: any;
}

export default function Products({
  activeProduct,
  handleProductChange,
  data,
}: IProduct) {
  const scrollingContainerRef = useRef<null | HTMLDivElement>(null);
  console.log(data);

  const { scrollY } = useScroll({ container: scrollingContainerRef });

  const y = useSpring(scrollY, {
    stiffness: 60,
    damping: 40,
    restDelta: 0.001,
  });
  const translateY = useTransform(y, (y) => -y);

  return (
    <div
      ref={scrollingContainerRef}
      className="absolute top-0 left-0 w-full h-full overflow-y-scroll "
    >
      <div>
        <motion.div
          style={{ translateY }}
          className="absolute w-6/12   opacity-90  bg-gradient-to-r pl-9 from-50% via-60% from-black to-transparent"
        >
          <motion.div
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            className="mt-48"
          >
            {data.data.map((dataItem: any, i: number) => {
              const { headline, subText } = dataItem.attributes;

              let isActiveProduct = i === activeProduct;
              return (
                <motion.div
                  variants={listVariant}
                  onHoverStart={() => handleProductChange(i)}
                  id={`${i + 1}`}
                  className="box-border relative flex items-end block w-full text-white opacity-100 h-28 "
                  key={i}
                >
                  <motion.div>
                    <h1 className="text-4xl font-light "> {headline}</h1>
                    <span className="font-thin">{subText}</span>

                    {isActiveProduct && (
                      <motion.div
                        className="absolute w-2 h-2 bg-white rounded-full bottom-9 -left-5"
                        layoutId="underline"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
