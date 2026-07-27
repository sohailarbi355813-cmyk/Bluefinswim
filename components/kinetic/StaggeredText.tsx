"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  wordByWord?: boolean;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function StaggeredText({
  text,
  className = "",
  style,
  wordByWord = true,
  delay = 0,
  stagger = 0.04,
  as: Tag = "div",
}: StaggeredTextProps) {
  const units = wordByWord ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotate: 4,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 16,
        mass: 0.6,
      },
    },
  };

  return (
    <Tag className={className} style={style}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-flex flex-wrap gap-x-[0.22em]"
      >
        {units.map((unit, idx) => (
          <span key={idx} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span
              variants={childVariants}
              className="inline-block transform-gpu"
            >
              {unit}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
