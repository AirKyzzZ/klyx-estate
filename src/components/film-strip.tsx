"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const stills = [
  "la façade au couchant",
  "la façade et la piscine",
  "le salon cathédrale",
  "le salon vers la terrasse",
  "la cuisine",
  "l'îlot sous la fenêtre",
  "la chambre principale",
  "la chambre vers l'océan",
  "la salle de bains",
  "la table sous la pergola",
  "la villa au crépuscule",
  "le soir venu",
].map((room, i) => ({
  n: String(i + 1).padStart(2, "0"),
  room,
  src: `/media/stills/still-${String(i + 1).padStart(2, "0")}.jpg`,
}));

export function FilmStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [caption, setCaption] = useState<{ text: string; x: number; y: number } | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["2%", "-64%"]), {
    stiffness: 90,
    damping: 26,
  });

  return (
    <div ref={sectionRef} className="relative h-[280vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-max items-center gap-3 sm:gap-4">
          {stills.map((s) => (
            <figure
              key={s.n}
              className="group relative w-[72vw] shrink-0 overflow-hidden rounded sm:w-[30vw] lg:w-[24vw]"
              onPointerMove={(e) =>
                setCaption({ text: s.room, x: e.clientX, y: e.clientY })
              }
              onPointerLeave={() => setCaption(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={`Villa de démonstration, ${s.room}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-2 left-3 font-label text-[11px] text-sand-50/90 drop-shadow">
                {s.n}
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <p className="mt-6 pl-6 text-sm text-ink-500 sm:pl-12">
          Villa de démonstration, créée à l&apos;atelier. Ce film entier est
          parti de douze visuels, comme il partirait des photos de votre mandat.
        </p>
      </div>
      {caption && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-none fixed z-50 hidden -translate-x-1/2 -translate-y-[140%] font-display text-xl text-sand-50 italic drop-shadow-md sm:block"
          style={{ left: caption.x, top: caption.y }}
        >
          {caption.text}
        </motion.span>
      )}
    </div>
  );
}
