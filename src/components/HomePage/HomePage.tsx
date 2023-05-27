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

interface IHomePage {
  data: Content[];
}

export default function HomePage({ data }: IHomePage) {
  const headerRef = useRef<any>(null);
  const bgImages = useRef<any>(null);

  const [activeProduct, setActiveProduct] = useState<number | null>(1);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isProductSlideVisible, setIsProductSlideVisible] = useState(false);

  const imageSrc = useImageSource(
    data,
    activeProduct,
    activeCategory,
    bgImages.current
  );

  bgImages.current = useMemo(() => {
    return data.map(({ attributes: { imageUrl } }, i: number) => ({
      imageUrl,
    }));
  }, [data]);

  const handleProductChange = useCallback((i: number) => {
    setActiveProduct(i);
  }, []);

  const handleGoBack = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleSlideVisibility = useCallback((isVisible: boolean) => {
    setIsProductSlideVisible(isVisible);
  }, []);

  const handleProductSelection = useCallback((content: Content) => {
    setSelectedProduct(content);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveProduct(null);
    setActiveCategory(category);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const { targets, Iobserver } = DetectIntersect(headerRef, setActiveProduct);
    return () => {
      targets.forEach((target) => Iobserver.unobserve(target));
    };
  }, [headerRef.current]);

  return (
    <motion.div className="relative w-screen h-screen ">
      <Header handleClick={handleCategoryChange} ref={headerRef} />

      <Gradient />
      <Background
        isProductSelected={selectedProduct ?? false}
        activeImg={imageSrc}
      />

      <AnimatePresence mode="wait">
        {!selectedProduct ? (
          <Products
            key={"92819"}
            data={data}
            activeProduct={activeProduct}
            activeCategory={activeCategory}
            handleProductChange={handleProductChange}
            handleProductSelection={handleProductSelection}
          />
        ) : (
          <Product
            key={"22828"}
            content={selectedProduct}
            handleGoBack={handleGoBack}
            changeSlideVisibility={handleSlideVisibility}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isProductSlideVisible && (
          <Slider
            key={"1414"}
            content={selectedProduct}
            changeSlideVisibility={handleSlideVisibility}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
