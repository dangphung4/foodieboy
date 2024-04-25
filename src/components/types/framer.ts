// Framer Motion Variants and Transition for changing pages

/**
 * page variants for framer motion
 * @constant
 * @type {Object}
 * @default
 * @module src/components/types/framer
 * @see https://www.framer.com/api/motion/animate-presence/
 * @see https://www.framer.com/api/motion/motionvalue/
 * 
 */
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

/**
 * page transition for framer motion
 * @constant
 * @type {Object}
 * @default
 * @module src/components/types/framer
 */
export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};
