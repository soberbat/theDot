export const boxVariant = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.1,
      delay: 0,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const listVariant = {
  hidden: {
    // x: -10,
    opacity: 0,
    duration: 0.2,
  },
  visible: {
    // x: 0,
    opacity: 1,
  },
};
