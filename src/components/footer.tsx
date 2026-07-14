import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

const navSite = [
  { label: "La démonstration", href: "#film" },
  { label: "Les offres", href: "#offres" },
  { label: "Réserver un appel", href: "#reserver" },
];

const navMaison = [
  { label: "Klyx", href: "https://klyx.fr" },
  { label: "Studio Klyx", href: "https://studio.klyx.fr" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export function Footer() {
  return (
    <footer className="overflow-hidden px-4 pt-16 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-stretch gap-4 lg:grid-cols-[400px_1fr]">
          <Reveal className="relative min-h-[340px] overflow-hidden rounded-[28px] bg-pine-900">
            <video
              src="/media/loop-dusk.mp4"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/55" />
            <div className="relative flex h-full flex-col justify-between p-8">
              <p className="font-display text-2xl text-sand-50">
                Klyx <span className="italic">Estate</span>
              </p>
              <div>
                <p className="max-w-[20ch] font-display text-2xl leading-snug text-sand-50">
                  Le studio média des mandats
                  <span className="italic text-sand-200"> de prestige.</span>
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://x.com/maximecodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex size-9 items-center justify-center rounded-[10px] bg-sand-50/15 text-sand-50 backdrop-blur-sm transition-colors hover:bg-sand-50/30"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maxime-mansiet/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex size-9 items-center justify-center rounded-[10px] bg-sand-50/15 text-sand-50 backdrop-blur-sm transition-colors hover:bg-sand-50/30"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.91 1.65-1.86 3.39-1.86 3.62 0 4.29 2.39 4.29 5.5v6.25ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex min-h-[340px] flex-col justify-between rounded-[28px] border border-sand-300 bg-sand-50 p-8 sm:p-10"
          >
            <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
              <nav className="flex flex-col gap-3">
                <p className="mb-2 font-display text-lg text-ink-500 italic">Le site</p>
                {navSite.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-ink-900 transition-colors hover:text-pine-700"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <nav className="flex flex-col gap-3">
                <p className="mb-2 font-display text-lg text-ink-500 italic">La maison</p>
                {navMaison.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm font-medium text-ink-900 transition-colors hover:text-pine-700"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-xs text-ink-500">
                © 2026 Klyx Estate · Bordeaux
              </p>
              <div className="sm:text-right">
                <p className="max-w-[30ch] text-sm text-ink-700">
                  Un mandat à lancer, une question&nbsp;?
                  <span className="mt-1 block font-display text-lg text-ink-900 italic">
                    Parlons-en de vive voix.
                  </span>
                </p>
                <a
                  href={site.bookCallUrl}
                  className="mt-3 inline-block rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-sand-50 transition-colors hover:bg-pine-700"
                >
                  Réserver un appel
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div aria-hidden className="mt-6 overflow-hidden select-none">
          <p
            className="bg-[url('/media/stills/still-01.jpg')] bg-cover bg-center bg-clip-text text-center font-display leading-[0.95] tracking-tight whitespace-nowrap text-transparent italic"
            style={{ fontSize: "clamp(44px, 14.5vw, 220px)" }}
          >
            Klyx Estate
          </p>
        </div>
      </div>
    </footer>
  );
}
