import React, { useEffect, useRef, useState } from "react";
import { HeaderWithRef as Header } from "../Header/Header";
import Products from "../Product/Products";
import { motion } from "framer-motion";
import Image from "next/image";

interface IHomePage {
  data: any;
}

export default function HomePage({ data }: IHomePage) {
  const headerRef = useRef<any>(null);
  const [activeProduct, setActiveProduct] = useState<number>(1);
  const bgImages = useRef<any>(null);
  const [isFinishedLoading, setisFinishedLoading] = useState(false);

  const handleProductChange = (i: number) => {
    setActiveProduct(i);
  };

  useEffect(() => {
    data.data.map((dataItem: any, i: number) => {
      const { imageUrl } = dataItem.attributes;

      bgImages.current = {
        ...bgImages.current,
        [i]: { imageUrl },
      };
    });

    setTimeout(() => {
      setisFinishedLoading(true);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(bgImages.current[activeProduct].imageUrl);
  }, [activeProduct]);

  useEffect(() => {
    setTimeout(() => {
      let headerRect = headerRef.current.getBoundingClientRect();
      let targets = [...(document.getElementsByClassName("block") as any)];

      let cb = (entries: any) => {
        entries.forEach((entry: any) => {
          let isoverlap = entry.boundingClientRect.y <= headerRect.bottom - 5;
          if (isoverlap) {
            console.log(entry.boundingClientRect.y);
            console.log(headerRect.bottom);
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
    }, 2000);
  }, []);

  return (
    <motion.div className="relative w-screen h-screen ">
      <Header ref={headerRef} />
      <Products
        data={data}
        activeProduct={activeProduct}
        handleProductChange={handleProductChange}
      />

      <motion.div
        animate={{
          scale: 1,
          transition: { duration: 2, ease: "circIn" },
        }}
        initial={{ scale: 1.2 }}
        className={`fixed -z-10 w-screen h-screen origin-top-right bg-center bg-cover  ]`}
      >
        <img
          src={
            isFinishedLoading
              ? bgImages.current[activeProduct].imageUrl
              : "http://localhost:1337/uploads/janos_venczak_Em_De2_Qylec_I_unsplash_cfcfda2cd5.jpg"
          }
        />
      </motion.div>
    </motion.div>
  );
}
