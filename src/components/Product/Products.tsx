/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { boxVariant, listVariant } from "./animations";
import { Content } from "@/utils/types/Types";
import { scrollConfig } from "@/utils/config";
import DetectIntersect from "@/utils/types/IntersectionDetector";
import SmoothScroller from "../SmoothScroller";

interface IProduct {
  hoveredItem: number | null;
  activeCategory: string | null;
  onHover: (i: number) => void;
  data: Content[];
  onItemClick: (product: Content, i: number) => void;
  setHoveredItem: React.Dispatch<React.SetStateAction<number | null>>;
  selectedItem: any;
}

export default function Products({
  hoveredItem,
  activeCategory,
  onHover,
  selectedItem,
  setHoveredItem,
  onItemClick,
  data,
}: IProduct) {
  const scrollingContainerRef = useRef<HTMLDivElement>(null);
  const [parentNode, setparentNode] = useState<HTMLDivElement | null>();
  const parentRef = useRef<HTMLDivElement>();

  const refcallback = (node: HTMLDivElement | null) => {
    if (node) {
      setparentNode(node);
      parentRef.current = node;
    }
  };

  useEffect(() => {
    const itemsOnList = parentRef!.current!.children;
    const { targets, observer } = DetectIntersect(setHoveredItem, itemsOnList);
    return () => targets.forEach((target) => observer.unobserve(target));
  }, [activeCategory, selectedItem, parentNode]);

  return (
    <div
      key={"Products"}
      ref={scrollingContainerRef}
      className="absolute top-0 left-0 w-full h-full overflow-y-scroll"
    >
      <SmoothScroller container={scrollingContainerRef}>
        <motion.div
          ref={refcallback}
          variants={boxVariant}
          animate="visible"
          initial="hidden"
          className="mt-48"
        >
          <AnimatePresence mode="wait">
            {data.map((content, i: number) => {
              const { headline, contentType } = content.attributes;

              let isHoveredItem = i === hoveredItem;
              let contentCategory =
                !activeCategory || contentType === activeCategory;

              return (
                contentCategory && (
                  <motion.div
                    className="box-border relative flex items-center h-20 ml-12 text-white opacity-100 cursor-pointer w-72 intersectionBlock lg:ml:0 "
                    onClick={() => onItemClick(content, i)}
                    onHoverStart={() => onHover(i)}
                    variants={listVariant}
                    exit={{ opacity: 0 }}
                    id={`${i}`}
                    key={i}
                    layout
                  >
                    <motion.div className="relative">
                      {isHoveredItem && (
                        <motion.span
                          className="absolute w-2 h-2 transform translate-y-1/2 bg-white rounded-full -left-4 top-1/2"
                          transition={{ duration: 0.2, easings: "circIn" }}
                          layoutId="dot"
                        />
                      )}

                      <div className="relative flex-1">
                        <div className="absolute w-3 opacity-75 -right-5 -top-1">
                          <img src={`/${contentType}.svg`} alt="" />
                        </div>
                        <h1 className="text-2xl font-light lg:text-3xl">
                          {headline}
                        </h1>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </motion.div>
      </SmoothScroller>
    </div>
  );
}
