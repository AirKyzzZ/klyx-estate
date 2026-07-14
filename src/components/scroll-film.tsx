"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { site } from "@/lib/site";

function Beat({
  progress,
  range,
  children,
  className = "",
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number, number, number];
  children: React.ReactNode;
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0, 1, 1, 0]);
  const y = useTransform(progress, range, [40, 0, 0, -40]);
  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ScrollFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);
  const rafId = useRef<number | null>(null);
  const [videoOk, setVideoOk] = useState(true);
  const [preload, setPreload] = useState<"metadata" | "auto">("metadata");

  useEffect(() => {
    if (window.innerWidth >= 640) setPreload("auto");
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    targetTime.current = v * (video.duration - 0.05);
    if (rafId.current === null) {
      const tick = () => {
        const el = videoRef.current;
        if (!el) return;
        const diff = targetTime.current - el.currentTime;
        if (Math.abs(diff) > 0.01) {
          el.currentTime += diff * 0.35;
          rafId.current = requestAnimationFrame(tick);
        } else {
          rafId.current = null;
        }
      };
      rafId.current = requestAnimationFrame(tick);
    }
  });

  const brandOpacity = useTransform(scrollYProgress, [0.7, 0.82], [0, 1]);
  const brandY = useTransform(scrollYProgress, [0.7, 0.82], [60, 0]);

  return (
    <section ref={sectionRef} className="relative h-[480vh]" id="film">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink-900">
        {videoOk ? (
          <video
            ref={videoRef}
            src={site.heroVideo}
            poster={site.heroPoster}
            muted
            playsInline
            preload={preload}
            onError={() => setVideoOk(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,#d8cbb4_0%,#b89a6f_45%,#1f3d2b_100%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/30 via-transparent to-ink-900/40" />

        <Beat progress={scrollYProgress} range={[0.02, 0.08, 0.16, 0.22]}>
          <p className="font-display text-[clamp(3rem,9vw,8rem)] text-sand-50 italic [text-shadow:0_2px_40px_rgba(25,23,19,0.75),0_1px_8px_rgba(25,23,19,0.5)]">
            Vos photos.
          </p>
        </Beat>
        <Beat progress={scrollYProgress} range={[0.26, 0.32, 0.4, 0.46]}>
          <p className="font-display text-[clamp(3rem,9vw,8rem)] text-sand-50 italic [text-shadow:0_2px_40px_rgba(25,23,19,0.75),0_1px_8px_rgba(25,23,19,0.5)]">
            Notre film.
          </p>
        </Beat>
        <Beat progress={scrollYProgress} range={[0.5, 0.56, 0.62, 0.68]}>
          <p className="font-display text-[clamp(3rem,9vw,8rem)] text-sand-50 italic [text-shadow:0_2px_40px_rgba(25,23,19,0.75),0_1px_8px_rgba(25,23,19,0.5)]">
            Quarante-huit heures.
          </p>
        </Beat>

        <motion.div
          style={{ opacity: brandOpacity, y: brandY }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
        >
          <h1 className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-none text-sand-50 [text-shadow:0_2px_40px_rgba(25,23,19,0.75),0_1px_8px_rgba(25,23,19,0.5)]">
            Klyx <span className="italic">Estate</span>
          </h1>
          <p className="font-display text-xl text-sand-100 italic sm:text-2xl [text-shadow:0_1px_20px_rgba(25,23,19,0.6)]">
            Le studio média des mandats de prestige.
          </p>
          <p className="max-w-xl text-base text-sand-200 sm:text-lg">
            Films de présentation, photos enrichies, page dédiée et
            déclinaisons pour vos réseaux. De quoi rentrer le mandat, puis le
            lancer, en quarante-huit heures.
          </p>
          <a
            href={site.bookCallUrl}
            className="mt-2 rounded-full bg-sand-50 px-8 py-4 font-medium text-ink-900 transition-colors hover:bg-pine-500 hover:text-sand-50"
          >
            Réserver un appel
          </a>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <motion.p
            style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
            className="font-display text-sm text-sand-200 italic"
          >
            Faites défiler pour visiter
          </motion.p>
        </div>
      </div>
    </section>
  );
}
