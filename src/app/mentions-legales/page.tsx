import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales · Klyx Estate",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <a href="/" className="font-display text-xl text-ink-900">
        Klyx <span className="italic">Estate</span>
      </a>
      <h1 className="mt-12 font-display text-4xl text-ink-900">
        Mentions légales
      </h1>

      <section className="mt-10 space-y-6 text-ink-700">
        <div>
          <h2 className="font-display text-xl text-ink-900">Éditeur du site</h2>
          <p className="mt-2">
            Klyx Estate, une activité de Klyx, éditée par Maxime Mansiet,
            entrepreneur individuel, Bordeaux, France.
            <br />
            SIRET&nbsp;: 941&nbsp;572&nbsp;364&nbsp;00029
            <br />
            Contact&nbsp;: via le formulaire de rendez-vous du site.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink-900">Hébergement</h2>
          <p className="mt-2">
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis. vercel.com
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink-900">
            Contenus générés par IA
          </h2>
          <p className="mt-2">
            Les visuels et films de démonstration présentés sur ce site sont
            créés par intelligence artificielle et représentent une propriété
            fictive, conformément à notre démarche de transparence. Les
            contenus générés par IA livrés à nos clients sont signalés comme
            tels, conformément au règlement européen sur l&apos;intelligence
            artificielle.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink-900">
            Données personnelles
          </h2>
          <p className="mt-2">
            Ce site utilise une mesure d&apos;audience anonymisée. Aucune
            donnée personnelle n&apos;est vendue. Pour toute demande relative à
            vos données, contactez l&apos;éditeur.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink-900">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            L&apos;ensemble des contenus de ce site (textes, visuels, films)
            est la propriété de Klyx Estate. Toute reproduction sans accord
            préalable est interdite.
          </p>
        </div>
      </section>

      <a href="/" className="mt-16 inline-block text-sm text-pine-700 underline">
        Retour au site
      </a>
    </main>
  );
}
