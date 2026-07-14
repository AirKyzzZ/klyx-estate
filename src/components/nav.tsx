"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/site";

export function Nav() {
  const { scrollY } = useScroll();
  const heroEnd = typeof window !== "undefined" ? window.innerHeight * 3.8 : 3400;
  const bg = useTransform(scrollY, [heroEnd, heroEnd + 400], ["rgba(250,247,241,0)", "rgba(250,247,241,0.85)"]);
  const border = useTransform(scrollY, [heroEnd, heroEnd + 400], ["rgba(233,225,211,0)", "rgba(233,225,211,0.8)"]);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#film" className="font-display text-xl text-sand-50 mix-blend-difference">
          Klyx <span className="italic">Estate</span>
        </a>
        <a
          href={site.bookCallUrl}
          className="rounded-full border border-current px-5 py-2 text-sm font-medium text-sand-50 mix-blend-difference transition-opacity hover:opacity-70"
        >
          Réserver un appel
        </a>
      </div>
    </motion.header>
  );
}
