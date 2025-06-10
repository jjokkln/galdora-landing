"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationProps) => {
  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  return (
    <motion.div
      initial={directionVariants[direction]}
      whileInView={{ 
        y: 0, 
        x: 0, 
        opacity: 1 
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ 
        once: true, 
        amount: 0.1 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Spezielle Varianten für häufig verwendete Animationen
export const FadeInUp = ({ children, delay = 0, className = "" }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) => (
  <ScrollAnimation direction="up" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
);

export const FadeInDown = ({ children, delay = 0, className = "" }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) => (
  <ScrollAnimation direction="down" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
);

export const FadeInLeft = ({ children, delay = 0, className = "" }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) => (
  <ScrollAnimation direction="left" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
);

export const FadeInRight = ({ children, delay = 0, className = "" }: { 
  children: ReactNode; 
  delay?: number; 
  className?: string; 
}) => (
  <ScrollAnimation direction="right" delay={delay} className={className}>
    {children}
  </ScrollAnimation>
); 