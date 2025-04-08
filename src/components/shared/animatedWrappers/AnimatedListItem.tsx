"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Variants } from "framer-motion";

interface AnimatedListItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  viewport?: { once?: boolean; amount?: number };

  onClick?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function AnimatedListItem({
  children,
  className = "",
  variants = itemVariants,
  viewport = { once: true, amount: 0.2 },

  onClick,
}: AnimatedListItemProps) {
  return (
    <motion.li
      variants={variants}
      viewport={viewport}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.li>
  );
}
