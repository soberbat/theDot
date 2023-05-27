import { motion } from "framer-motion";
import React from "react";

const Gradient = () => {
  return (
    <motion.div className="fixed w-3/6 h-full top-0 left-0 opacity-90  bg-gradient-to-r pl-9 from-40% via-80% from-black to-transparent z-0 " />
  );
};

export default Gradient;
