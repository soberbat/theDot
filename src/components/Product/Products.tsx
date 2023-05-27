import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  delay,
  AnimatePresence,
} from "framer-motion";
import React, { useRef } from "react";
import { boxVariant, listVariant } from "./animations";
import { Content } from "@/utils/types/Types";

interface IProduct {
  activeProduct: number | null;
  activeCategory: string | null;
  handleProductChange: (i: number) => void;
  data: Content[];
  handleProductSelection: (product: Content) => void;
}

export default function Products({
  activeProduct,
  activeCategory,
  handleProductChange,
  handleProductSelection,
  data,
}: IProduct) {
  const scrollingContainerRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef();

  const { scrollY } = useScroll({ container: scrollingContainerRef });

  const y = useSpring(scrollY, {
    stiffness: 60,
    damping: 40,
    restDelta: 0.001,
  });
  const translateY = useTransform(y, (y) => -y);

  return (
    <div
      key={"Products"}
      ref={scrollingContainerRef}
      className="absolute top-0 left-0 w-full h-full overflow-y-scroll "
    >
      <div>
        <motion.div
          style={{ translateY }}
          className="absolute w-4/12 min-h-full pl-10 "
        >
          <motion.div
            variants={boxVariant}
            animate="visible"
            initial="hidden"
            className="mt-48"
          >
            <AnimatePresence mode="wait">
              {data.map((content, i: number) => {
                const { headline, subText, contentType } = content.attributes;

                let isActiveProduct = i === activeProduct;
                let contentCategory =
                  !activeCategory || contentType === activeCategory;

                return (
                  contentCategory && (
                    <motion.div
                      className="box-border relative flex items-end block w-full text-white opacity-100 cursor-pointer h-28 "
                      onClick={() => handleProductSelection(content)}
                      onHoverStart={() => handleProductChange(i)}
                      variants={listVariant}
                      exit={{ opacity: 0 }}
                      id={`${i + 1}`}
                      key={i}
                      layout
                    >
                      <motion.div>
                        <h1 className="text-4xl font-light "> {headline}</h1>
                        <span className="font-thin">{subText}</span>

                        {isActiveProduct && (
                          <motion.div
                            className="absolute w-2 h-2 bg-white rounded-full bottom-9 -left-5"
                            transition={{ duration: 0.2 }}
                            layoutId="underline"
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
