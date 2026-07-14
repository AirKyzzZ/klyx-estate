"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { site } from "@/lib/site";

const links = [
  { label: "La démonstration", href: "#demonstration" },
  { label: "Le rendez-vous", href: "#rendez-vous" },
  { label: "Les offres", href: "#offres" },
  { label: "Le studio", href: "#studio" },
];

const shell = {
  bar: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: 1152,
    borderRadius: 0,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "rgba(250,247,241,0)",
    borderColor: "rgba(216,203,180,0)",
    boxShadow: "0 0 0 rgba(25,23,19,0)",
  },
  pill: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
    maxWidth: 850,
    borderRadius: 999,
    paddingLeft: 22,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "rgba(250,247,241,0.72)",
    borderColor: "rgba(216,203,180,0.65)",
    boxShadow: "0 14px 44px rgba(25,23,19,0.12)",
  },
};

export function Nav() {
  const { scrollY } = useScroll();
  const [pill, setPill] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const threshold =
      typeof window !== "undefined" ? window.innerHeight * 4.4 : 3800;
    setPill(y > threshold);
    if (!open) setHidden(y > lastY && y > 700);
    setLastY(y);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const textClass = pill
    ? "text-ink-900"
    : "text-sand-50 mix-blend-difference";

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
      >
        <motion.div
          variants={shell}
          initial="bar"
          animate={pill ? "pill" : "bar"}
          transition={{ type: "spring", stiffness: 240, damping: 30 }}
          className={`flex w-full items-center justify-between border ${
            pill ? "backdrop-blur-xl" : ""
          }`}
        >
          <a
            href="#film"
            onClick={() => setOpen(false)}
            className={`font-display text-xl ${textClass}`}
          >
            Klyx <span className="italic">Estate</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-sm font-medium ${textClass}`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.bookCallUrl}
              className={`hidden rounded-full px-5 py-2 text-sm font-medium transition-colors lg:block ${
                pill
                  ? "bg-ink-900 text-sand-50 hover:bg-pine-700"
                  : "border border-current text-sand-50 mix-blend-difference hover:opacity-70"
              }`}
            >
              Réserver un appel
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${textClass}`}
            >
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-sand-100 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-pine-700/20 py-4 font-display text-4xl text-ink-900 italic"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <motion.a
              href={site.bookCallUrl}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 inline-block w-fit rounded-full bg-pine-700 px-8 py-4 font-medium text-sand-50"
            >
              Réserver un appel
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
