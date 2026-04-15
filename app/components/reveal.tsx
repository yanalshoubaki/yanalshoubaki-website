"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export type RevealVariant =
  | "fade-up"
  | "fade"
  | "scale"
  | "slide-left"
  | "slide-right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
};

const ease = [0.22, 1, 0.36, 1] as const;

function buildVariants(variant: RevealVariant, delaySec: number): Variants {
  const t = { duration: 0.65, ease, delay: delaySec };

  switch (variant) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: t },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: t },
      };
    case "slide-left":
      return {
        hidden: { opacity: 0, x: -32 },
        visible: { opacity: 1, x: 0, transition: t },
      };
    case "slide-right":
      return {
        hidden: { opacity: 0, x: 32 },
        visible: { opacity: 1, x: 0, transition: t },
      };
    case "fade-up":
    default:
      return {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: t },
      };
  }
}

export function Reveal({
  children,
  className,
  delayMs = 0,
  variant = "fade-up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const delaySec = delayMs / 1000;
  const variants = buildVariants(variant, delaySec);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
    >
      {children}
    </motion.div>
  );
}
