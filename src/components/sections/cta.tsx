import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { site } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-40 sm:py-56" id="reserver">
      <video
        src="/media/loop-golden.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sand-100 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sand-100 to-transparent" />
      <div className="absolute inset-0 bg-ink-900/25" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-5xl leading-tight text-sand-50 italic sm:text-7xl [text-shadow:0_2px_40px_rgba(25,23,19,0.6)]">
            Le mandat est prêt. Le film aussi.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Magnetic>
            <a
              href={site.bookCallUrl}
              className="mt-12 inline-block rounded-full border border-sand-50/40 bg-sand-50/20 px-10 py-5 text-lg font-medium text-sand-50 backdrop-blur-md transition-colors hover:bg-sand-50 hover:text-ink-900"
            >
              Réserver un appel
            </a>
          </Magnetic>
          <p className="mt-6 text-sm text-sand-100 [text-shadow:0_1px_12px_rgba(25,23,19,0.6)]">
            Vingt minutes, sans engagement. Ou par écrit&nbsp;:{" "}
            <a href="mailto:contact@klyx.fr" className="underline hover:text-sand-50">
              contact@klyx.fr
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
