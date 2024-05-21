import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";

let interval: NodeJS.Timeout;

export const FlipPhrases = ({
  phrases,
  duration = 3000,
  className,
}: {
  phrases: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    startAnimation();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i++;
      if (i === phrases.length) {
        i = 0;
      }
      const phrase = phrases[i];
      setCurrentPhrase(phrase);
    }, duration);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          key={currentPhrase} // key ensures unique animations for each phrase
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
            position: "absolute",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className={cn(
            "z-10 inline-block relative text-left text-white dark:text-neutral-100",
            className
          )}
        >
          {currentPhrase}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
