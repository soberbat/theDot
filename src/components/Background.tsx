/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect } from "react";

interface IBackground {
  activeImg: string;
  isProductSelected: boolean | string;
}

const Background = ({ activeImg, isProductSelected }: IBackground) => {
  const controls = useAnimation();
  useEffect(() => {
    sequence();
  }, [activeImg]);

  const sequence = useCallback(async () => {
    await controls.start({ opacity: 0, transition: { duration: 0.5 } });
  }, []);

  return (
    <motion.div
      animate={{
        scale: isProductSelected ? 1.5 : 1.1,
        transition: { duration: 0.5, ease: "circOut" },
      }}
      initial={{ scale: 1.3 }}
      className={`fixed -z-10 origin-center w-screen h-screen origin-top-right bg-center bg-cover  ]`}
    >
      <img src={activeImg || ""} />
      <motion.div
        initial={{ opacity: 1 }}
        key={activeImg}
        className="fixed top-0 left-0 w-screen h-screen bg-black"
        animate={controls}
      />
    </motion.div>
  );
};

export default Background;
