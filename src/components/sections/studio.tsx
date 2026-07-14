import { Reveal } from "@/components/reveal";
import { Rubrique } from "@/components/rubrique";

export function Studio() {
  return (
    <section id="studio" className="bg-sand-50 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <Rubrique chapeau="qui est derrière les films" title="Le studio" />
        <Reveal delay={0.1}>
          <p className="mt-12 max-w-3xl font-display text-3xl leading-snug text-ink-900 sm:text-4xl">
            Klyx Estate est l&apos;atelier média du groupe Klyx. Nous venons du
            logiciel immobilier, <span className="italic text-pine-700">pas de
            la publicité</span>.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg text-ink-700">
            Fondé par Maxime Mansiet, ingénieur, qui a construit l&apos;agent
            conversationnel d&apos;un portail couvrant plus de 58 000 annonces.
            La donnée, l&apos;image, le mandat&nbsp;: notre terrain depuis des
            années. Nous mettons la meilleure technologie au service de biens
            qui la méritent, et nous restons petits par choix, dix clients, pas
            cent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
