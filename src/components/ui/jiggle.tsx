import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JiggleComponent = ({ children, intensity = 5, duration = 0.3, className = "" }) => {
  const [isJiggling, setIsJiggling] = useState(false);

  // Jiggle animation variants
  const jiggleVariants = {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
    jiggle: {
      rotate: [0, -intensity/2, intensity/3, -intensity/4, 0],
      x: [0, -intensity, intensity/2, -intensity/3, 0],
      y: [0, intensity/2, -intensity, intensity/3, 0],
      transition: {
        duration: duration,
        repeat: 0,
        ease: "easeInOut",
      }
    }
  };

  const startJiggle = () => {
    if (!isJiggling) {
      setIsJiggling(true);
      // Reset after animation completes
      setTimeout(() => setIsJiggling(false), duration * 1000);
    }
  };

  return (
    <motion.div
      className={className}
      variants={jiggleVariants}
      initial="initial"
      animate={isJiggling ? "jiggle" : "initial"}
      onClick={startJiggle}
    >
      {children}
    </motion.div>
  );
};

// Example usage with hover trigger
const JiggleOnHover = ({ children, intensity = 5, duration = 0.3, className = "" }) => {
  const [isJiggling, setIsJiggling] = useState(false);

  const jiggleVariants = {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
    },
    jiggle: {
      rotate: [0, -intensity/2, intensity/3, -intensity/4, 0],
      x: [0, -intensity, intensity/2, -intensity/3, 0],
      y: [0, intensity/2, -intensity, intensity/3, 0],
      transition: {
        duration: duration,
        repeat: isJiggling ? Infinity : 0,
        repeatType: "mirror",
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={jiggleVariants}
      initial="initial"
      animate={isJiggling ? "jiggle" : "initial"}
      onHoverStart={() => setIsJiggling(true)}
      onHoverEnd={() => setIsJiggling(false)}
    >
      {children}
    </motion.div>
  );
};

// Example of component that jiggles automatically
const AutoJiggle = ({ children, intensity = 5, duration = 0.3, delay = 0, className = "" }) => {
  const jiggleVariants = {
    jiggle: {
      rotate: [0, -intensity/2, intensity/3, -intensity/4, 0],
      x: [0, -intensity, intensity/2, -intensity/3, 0],
      y: [0, intensity/2, -intensity, intensity/3, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatDelay: delay,
        ease: "easeInOut",
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={jiggleVariants}
      animate="jiggle"
    >
      {children}
    </motion.div>
  );
};

export { JiggleComponent, JiggleOnHover, AutoJiggle };