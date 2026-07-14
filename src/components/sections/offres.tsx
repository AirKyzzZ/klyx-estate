import { Reveal } from "@/components/reveal";
import { Rubrique } from "@/components/rubrique";
import { Magnetic } from "@/components/magnetic";
import { OffresList } from "@/components/offres-list";
import { site } from "@/lib/site";

export function Offres() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 sm:py-44" id="offres">
      <Rubrique
        chapeau="trois formules, un seul niveau d'exigence"
        title="Chaque mandat reçoit le même traitement"
      />
      <div className="mt-16">
        <Reveal>
          <OffresList />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-6 border-t border-pine-700/25 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-ink-700">
              Les conditions se discutent de vive voix, en vingt minutes. Sans
              engagement, résiliable à tout moment.
            </p>
            <Magnetic>
              <a
                href={site.bookCallUrl}
                className="inline-block rounded-full bg-ink-900 px-8 py-4 text-center font-medium text-sand-50 transition-colors hover:bg-pine-700"
              >
                Réserver un appel
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
