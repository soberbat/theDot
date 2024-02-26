import { scrollConfig } from "@/utils/config";
import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { FC, RefObject } from "react";

interface ISmoothScroller {
  children: React.ReactNode;
  container: RefObject<HTMLDivElement>;
}

const SmoothScroller: FC<ISmoothScroller> = ({ children, container }) => {
  const { scrollY } = useScroll({ container });
  const y = useTransform(scrollY, (y) => -y);
  const translateY = useSpring(y, scrollConfig);

  return (
    <motion.div
      style={{ translateY }}
      className="absolute w-screen min-h-full overflow-x-hidden lg:pl-10 lg:w-4/12"
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroller;
