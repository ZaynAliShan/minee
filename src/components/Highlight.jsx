"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Highlight = ({
  children,
  className,
  // controls:
  triggerOnView = true,     // animate when visible
  once = true,              // only once per element
  amount = 0.6,             // how much of it must be visible (0..1)
  duration = 1.2,
  delay = 0,
}) => {
  const baseProps = {
    style: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center",
    },
    className: twMerge(
      `relative inline-block w-fit rounded-md bg-gradient-to-r
       from-indigo-300 to-purple-300 px-1 pb-0.5
       dark:from-indigo-500 dark:to-purple-500`,
      className
    ),
    transition: { duration, ease: "easeOut", delay },
  };

  if (triggerOnView) {
    return (
      <motion.span
        initial={{ backgroundSize: "0% 100%" }}
        whileInView={{ backgroundSize: "100% 100%" }}
        viewport={{ once, amount }}
        {...baseProps}
      >
        {children}
      </motion.span>
    );
  }

  // fallback: animate immediately on mount (previous behavior)
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={baseProps.transition}
      {...baseProps}
    >
      {children}
    </motion.span>
  );
};
