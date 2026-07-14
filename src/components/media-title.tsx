"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function MediaTitle({
  before,
  after,
  poster,
}: {
  before: string;
  after: string;
  poster: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <h2
      ref={ref}
      className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-5xl leading-[1.02] text-ink-900 sm:text-7xl"
    >
      <span>{before}</span>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: "auto", opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="inline-block overflow-hidden rounded align-middle"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt=""
          className="h-[0.9em] w-auto min-w-[1.6em] rounded object-cover"
        />
      </motion.span>
      <span className="italic">{after}</span>
    </h2>
  );
}
