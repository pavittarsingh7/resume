"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  fullWidth?: boolean;
  duration?: number;
}

export function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
  fullWidth = false,
  duration = 0.5,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  const getInitialDirection = () => {
    switch (direction) {
      case "up":
        return { y: 50 };
      case "down":
        return { y: -50 };
      case "left":
        return { x: 50 };
      case "right":
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };
  
  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialDirection(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay * 0.001,
        ease: [0.215, 0.610, 0.355, 1.000],
      },
    },
  };
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(
        "will-change-transform",
        fullWidth ? "w-full" : "",
        className
      )}
    >
      {children}
    </motion.div>
  );
}