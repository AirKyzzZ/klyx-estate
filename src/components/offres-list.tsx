"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useVelocity,
  useTransform,
} from "motion/react";

const formules = [
  {
    name: "Lancement",
    scope: "le mandat",
    body: "Film en trois formats, photos enrichies en double version, la page du bien, les déclinaisons pour vos réseaux. Livré en quarante-huit heures.",
    detail:
      "Un film de soixante à quatre-vingt-dix secondes monté à partir de vos photos, en 16:9, 9:16 et 1:1. Chaque photo livrée en version fidèle et en version sublimée, signalée. La page du bien reçoit les demandes de visite.",
    image: "/media/stills/still-02.jpg",
  },
  {
    name: "Studio",
    scope: "deux mandats par mois",
    body: "Tout Lancement, la priorité de production, et le film de rendez-vous à la demande pour vos rendez-vous vendeurs.",
    detail:
      "Le film de rendez-vous est préparé en vingt-quatre heures sur un bien comparable à celui que vous visez, pour être montré avant la signature. La priorité de production garantit vos délais même en pleine saison.",
    image: "/media/stills/still-11.jpg",
  },
  {
    name: "Signature",
    scope: "quatre mandats par mois",
    body: "Tout Studio, la visite immersive du bien, et la publication gérée sur vos réseaux.",
    detail:
      "La visite immersive se capture au téléphone en suivant notre protocole, sans matériel. La publication gérée couvre vos réseaux, aux bons formats, au bon rythme, sous votre nom.",
    image: "/media/stills/still-08.jpg",
  },
];

export function OffresList() {
  const [open, setOpen] = useState<string | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 24, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 200, damping: 24, mass: 0.5 });
  const vx = useVelocity(sx);
  const skew = useTransform(vx, [-1200, 1200], [6, -6]);

  function onMove(e: React.PointerEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  function onRowEnter(i: number, e: React.PointerEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect && hovered === null) {
      mx.jump(e.clientX - rect.left);
      my.jump(e.clientY - rect.top);
    }
    setHovered(i);
  }

  return (
    <div ref={containerRef} onPointerMove={onMove} className="relative">
      {formules.map((f, i) => {
        const isOpen = open === f.name;
        return (
          <div key={f.name} className="border-t border-pine-700/25">
            <button
              onClick={() => setOpen(isOpen ? null : f.name)}
              onPointerEnter={(e) => onRowEnter(i, e)}
              onPointerLeave={() => setHovered(null)}
              aria-expanded={isOpen}
              className="group grid w-full cursor-pointer items-baseline gap-2 py-12 text-left sm:grid-cols-[1.2fr_2fr_auto] sm:gap-10"
            >
              <div>
                <h3 className="font-display text-4xl text-ink-900 italic transition-colors duration-300 group-hover:text-pine-700 sm:text-5xl">
                  {f.name}
                </h3>
                <p className="mt-2 text-sm text-ink-500">{f.scope}</p>
              </div>
              <p className="max-w-xl text-ink-700">{f.body}</p>
              <span
                className={`hidden font-display text-3xl text-ink-500 transition-transform duration-300 sm:block ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-6 pb-12 sm:flex-row sm:items-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.image}
                      alt=""
                      loading="lazy"
                      className="h-32 w-48 rounded object-cover sm:hidden"
                    />
                    <p className="max-w-3xl text-ink-500 sm:ml-[28%] sm:pl-10">
                      {f.detail}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <AnimatePresence>
        {hovered !== null && open === null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: sx, y: sy, skewX: skew }}
            className="pointer-events-none absolute top-0 left-0 z-20 hidden lg:block"
          >
            <div className="-translate-x-1/2 -translate-y-[110%] overflow-hidden rounded-lg shadow-xl shadow-ink-900/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={formules[hovered].image}
                alt=""
                className="h-44 w-64 object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
