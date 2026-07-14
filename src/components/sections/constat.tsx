import { Reveal } from "@/components/reveal";
import { Rubrique, Fragment } from "@/components/rubrique";
import { Counter } from "@/components/counter";

export function Constat() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 sm:py-40">
      <Rubrique chapeau="ce qui fait signer un vendeur" title="Le constat" />
      <div className="mt-16 grid items-center gap-16 lg:grid-cols-[3fr_2fr]">
        <div className="flex flex-col gap-14">
          <Reveal>
            <p className="font-display text-[clamp(4rem,9vw,8rem)] leading-none text-pine-700">
              <Counter value={73} suffix="&nbsp;%" />
            </p>
            <p className="mt-4 max-w-sm text-lg text-ink-700">
              des vendeurs préfèrent confier leur bien à un agent qui propose
              la vidéo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-display text-[clamp(4rem,9vw,8rem)] leading-none text-pine-700">
              <Counter value={12} suffix="&nbsp;%" />
            </p>
            <p className="mt-4 max-w-sm text-lg text-ink-700">
              à peine, en produisent régulièrement.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="max-w-md text-lg text-ink-700">
              L&apos;exclusivité se joue au rendez-vous vendeur, et elle se
              gagne avec des preuves.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="hidden lg:block">
          <div className="mx-auto w-full max-w-[340px] overflow-hidden rounded-t-full">
            <video
              src="/media/loop-arch.mp4"
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="aspect-[540/684] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
      <div className="mt-24">
        <Fragment>Un bien rare mérite un film, pas un diaporama.</Fragment>
      </div>
    </section>
  );
}
