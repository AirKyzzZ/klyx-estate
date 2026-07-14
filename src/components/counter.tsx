"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "motion/react";

export function Counter({
  value,
  suffix = "",
  decimals = 0,
  className = "",
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = `${v.toFixed(decimals).replace(".", ",")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
