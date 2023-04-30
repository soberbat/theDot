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
import { motion } from "framer-motion";
import Image from "next/image";
import Background from "../Background";
import Product from "../Product";

interface IHomePage {
  data: any;
}

export default function HomePage({ data }: IHomePage) {
  const [activeProduct, setActiveProduct] = useState<number | null>(1);
  const [selectedProduct, setSelectedProduct] = useState<any>(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeImage, setactiveImage] = useState(null);

  const headerRef = useRef<any>(null);
  const bgImages = useRef<any>(null);

  const handleProductChange = (i: number) => {
    setActiveProduct(i);
  };

  const handleProductSelection = (product: any) => {
    setSelectedProduct(product);
  };

  const handleCategoryChange = (category: string) => {
    setActiveProduct(null);
    setActiveCategory(category);
  };

  const assignBgImages = useCallback(() => {
    data.map(({ attributes: { imageUrl } }: any, i: number) => {
      bgImages.current = {
        ...bgImages.current,
        [i]: { imageUrl },
      };
    });
  }, [data]);

  const imageSrc = useMemo(() => {
    const firstOnTheLine = data.find(
      ({ attributes: { contentType } }) => contentType === activeCategory
    );

    const firstProductUrl = firstOnTheLine.attributes.imageUrl;
    const activeItemUrl =
      bgImages.current && bgImages?.current[activeProduct as number]?.imageUrl;

    return activeProduct ? activeItemUrl : firstProductUrl;
  }, [activeCategory, activeProduct, data]);

  useEffect(() => {
    if (!headerRef.current) return;

    assignBgImages();

    let headerRect = headerRef.current.getBoundingClientRect();
    let targets = [...(document.getElementsByClassName("block") as any)];

    let cb = (entries: any) => {
      entries.forEach((entry: any) => {
        let isoverlap = entry.boundingClientRect.y <= headerRect.bottom - 5;
        if (isoverlap) {
          const num = parseInt(entry.target.id);
          setActiveProduct((index) => (index !== num ? num + 1 : num + 1));
        }
      });
    };

    let Iobserver = new IntersectionObserver(cb, {});
    targets.forEach((target) => Iobserver.observe(target));

    return () => {
      targets.forEach((target) => Iobserver.unobserve(target));
    };
  }, [headerRef.current]);

  return (
    <motion.div className="relative w-screen h-screen ">
      <Header handleClick={handleCategoryChange} ref={headerRef} />
      <motion.div className="fixed w-3/6 h-full top-0 left-0 opacity-90  bg-gradient-to-r pl-9 from-40% via-80% from-black to-transparent z-0 " />

      <Products
        data={data}
        activeCategory={activeCategory}
        activeProduct={activeProduct}
        handleProductChange={handleProductChange}
        handleProductSelection={handleProductSelection}
      />
      {/* <Product /> */}
      <Background activeImg={imageSrc} />
    </motion.div>
  );
}
