// Definition of the fade variants for the Framer Motion library

/**
 * fade variants for framer motion
 * Could potentially just move it into the framer.ts file
 * @constant
 * @type {Object}
 * @default
 * @module src/components/types/FadeVariant
 * @see https://www.framer.com/api/motion/animate-presence/
 * @see https://www.framer.com/api/motion/motionvalue/
 */
export const fadeVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
