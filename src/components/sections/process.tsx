import { Reveal } from "@/components/reveal";
import { Rubrique } from "@/components/rubrique";

const steps = [
  {
    n: "1",
    title: "Vous envoyez les photos du mandat",
    body: "Celles que vous avez déjà. Aucun tournage, aucun déplacement, aucun matériel.",
  },
  {
    n: "2",
    title: "L'atelier produit",
    body: "Le film en trois formats, les photos enrichies, la page du bien, les déclinaisons pour vos réseaux.",
  },
  {
    n: "3",
    title: "Quarante-huit heures plus tard, vous lancez",
    body: "Le mandat arrive sur le marché avec le média qu'il fallait.",
  },
];

export function Process() {
  return (
    <section className="bg-sand-50 py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Rubrique chapeau="de vos photos au lancement" title="Comment ça marche" />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="border-t border-pine-700/25 pt-6">
                <span className="font-display text-4xl text-pine-700 italic">{s.n}</span>
                <h3 className="mt-4 font-display text-xl text-ink-900">{s.title}</h3>
                <p className="mt-3 text-ink-700">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
