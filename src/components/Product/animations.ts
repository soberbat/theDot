export const boxVariant = {
  hidden: {
    x: "-100vw", //move out of the site
  },
  visible: {
    x: 0, // bring it back to nrmal
    transition: {
      delay: 0.5,

      when: "beforeChildren", //use this instead of delay
      staggerChildren: 0.1, //apply stagger on the parent tag
    },
  },
};

export const listVariant = {
  hidden: {
    x: -10, //move out of the site
    opacity: 0,
    duration: 0.2,
  },
  visible: {
    x: 0, // bring it back to nrmal
    opacity: 1,
  },
};
