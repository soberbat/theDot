/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { HeaderWithRef as Header } from "../Header/Header";
import Products from "../Product/Products";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Background from "../Background";
import Product from "../Product";
import Gradient from "../Gradient";
import { Content } from "@/utils/types/Types";
import DetectIntersect from "@/utils/types/IntersectionDetector";
import useImageSource from "@/utils/hooks/useImageSource";
import Slider from "../Slider";
import { ActiveCategory } from "@/utils/types/appTypes";

interface IHomePage {
  data: any;
}

export default function HomePage({ data }: IHomePage) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bgImages = useRef<any>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(0);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>(null);
  const [isSliderVisible, seIsSliderVisible] = useState(false);

  const imageSrc = useImageSource(
    data,
    hoveredItem,
    activeCategory,
    selectedItem,
    bgImages.current
  );

  const onHover = useCallback((i: number) => {
    setHoveredItem(i);
  }, []);

  const handleGoBack = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const onSlideVisibilityChange = useCallback((isVisible: boolean) => {
    seIsSliderVisible(isVisible);
  }, []);

  const onItemClick = useCallback((content: Content, i: number) => {
    setSelectedItem(content);
    setHoveredItem(i);
  }, []);

  const handleCategoryChange = useCallback((category: ActiveCategory) => {
    setHoveredItem(category === undefined ? 0 : null);
    setActiveCategory(category);
  }, []);

  bgImages.current = useMemo(() => {
    return data.map(
      (dataItem: any) => dataItem.attributes.slider.data[0].attributes.url
    );
  }, [data]);

  return (
    <motion.div
      ref={headerRef}
      className="lg:relative lg:w-screen lg:h-screen "
    >
      <Header
        handleClick={handleCategoryChange}
        isProductSelected={selectedItem}
      />
      <Gradient />
      <Background
        isProductSelected={selectedItem ?? false}
        activeImg={imageSrc}
      />

      <AnimatePresence mode="wait">
        {!selectedItem ? (
          <Products
            key={"products"}
            data={data}
            hoveredItem={hoveredItem}
            activeCategory={activeCategory}
            onHover={onHover}
            onItemClick={onItemClick}
            setHoveredItem={setHoveredItem}
            selectedItem={selectedItem}
          />
        ) : (
          <Product
            key={"product"}
            content={selectedItem}
            handleGoBack={handleGoBack}
            changeSlideVisibility={onSlideVisibilityChange}
          />
        )}
      </AnimatePresence>

      <Slider
        key={"slider"}
        content={selectedItem}
        isSliderVisible={isSliderVisible}
        changeSlideVisibility={onSlideVisibilityChange}
      />
    </motion.div>
  );
}
