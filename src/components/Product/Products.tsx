import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface IProduct {
  activeProduct: number;
  handleProductChange: (i: number) => void;
}

export default function Products({
  activeProduct,
  handleProductChange,
}: IProduct) {
  const scrollingContainerRef = useRef<null | HTMLDivElement>(null);

  const { scrollY } = useScroll({ container: scrollingContainerRef });

  const y = useSpring(scrollY, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001,
  });
  const translateY = useTransform(y, (y) => -y);

  return (
    <div
      ref={scrollingContainerRef}
      className="absolute left-0 top-0 w-full h-full overflow-y-scroll bg-gradient-to-r pl-8 from-40% from-black to-transparent"
    >
      <div>
        <motion.div
          style={{ translateY }}
          className="absolute w-4/12 mt-40 border-2 border-black"
        >
          {Array.from(Array(100).keys()).map((i) => {
            let isActiveProduct = i === activeProduct;
            return (
              <motion.div
                onHoverStart={() => handleProductChange(i)}
                id={`${i + 1}`}
                className="relative block w-full h-32 mb-3 text-white border-2 border-blue-400 "
                key={i}
              >
                {isActiveProduct && (
                  <motion.div
                    className="absolute w-5 h-5 bg-white rounded-full top-2/4 -left-7"
                    layoutId="underline"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
