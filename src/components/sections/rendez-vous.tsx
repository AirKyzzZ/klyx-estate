import { Reveal } from "@/components/reveal";
import { MediaTitle } from "@/components/media-title";

export function RendezVous() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 sm:py-40">
      <Reveal>
        <div className="border-t border-pine-700/25 pt-6">
          <span className="block text-sm text-ink-500">avant même de signer</span>
          <div className="mt-3">
            <MediaTitle
              before="Le film de"
              after="rendez-vous"
              poster="/media/stills/still-12.jpg"
            />
          </div>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-[3fr_2fr]">
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-700">
            Les photos professionnelles arrivent toujours après la signature.
            Le vendeur, lui, choisit avant. Pour vos rendez-vous vendeurs,
            l&apos;atelier prépare un film de démonstration sur un bien
            comparable au sien, même gamme, même esprit. Vous posez une
            tablette sur la table du salon, vous lancez le film, et votre plan
            de commercialisation devient réel.
          </p>
          <p className="mt-6 max-w-2xl font-display text-2xl text-ink-900 italic">
            C&apos;est le book vendeur que personne d&apos;autre n&apos;apporte.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="border-t border-pine-700/25 pt-6 text-ink-700">
            <p>
              Préparé à la demande pour les clients de l&apos;atelier, à partir
              de la gamme et du caractère du bien visé.
            </p>
            <p className="mt-4">
              Prêt en vingt-quatre heures, avant votre rendez-vous.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
