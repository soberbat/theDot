import { motion } from "framer-motion";
import React from "react";

const Gradient = () => {
  return (
    <motion.div className="top-0 left-0 z-0 fixed bg-gradient-to-r from-40% from-black via-80% to-transparent opacity-70 pl-9 w-3/6 h-full " />
  );
};

export default Gradient;
