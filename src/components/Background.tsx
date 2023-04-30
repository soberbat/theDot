/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation } from "framer-motion";
import React, { useCallback, useEffect } from "react";

interface IBackground {
  activeImg: string;
}

const Background = ({ activeImg }: IBackground) => {
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
        scale: 1,
        transition: { duration: 2, ease: "circIn" },
      }}
      initial={{ scale: 1.2 }}
      className={`fixed -z-10 w-screen h-screen origin-top-right bg-center bg-cover  ]`}
    >
      <img
        src={
          activeImg ||
          "http://localhost:1337/uploads/janos_venczak_Em_De2_Qylec_I_unsplash_cfcfda2cd5.jpg"
        }
      />
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
