import { Reveal } from "@/components/reveal";
import { Rubrique } from "@/components/rubrique";
import { BeforeAfter } from "@/components/before-after";
import { FilmStrip } from "@/components/film-strip";

export function Demo() {
  return (
    <section className="bg-sand-50 py-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <Rubrique chapeau="une villa, douze photos, un film" title="La démonstration" />
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl font-display text-3xl text-ink-900 sm:text-4xl">
            Douze photos entrent.{" "}
            <span className="italic text-pine-700">Un lancement signé sort.</span>
          </p>
        </Reveal>
      </div>

      <FilmStrip />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl text-ink-900">
              Photos enrichies, <span className="italic">jamais trompeuses</span>
            </h3>
            <p className="mt-3 max-w-md text-ink-700">
              Lumière, ciel, netteté. Nous sublimons sans jamais maquiller, et
              chaque visuel retouché est signalé.
            </p>
            <div className="mt-8">
              <BeforeAfter
                beforeSrc="/media/ba-before.jpg"
                afterSrc="/media/ba-after.jpg"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h3 className="font-display text-2xl text-ink-900">
              Trois formats, <span className="italic">et la page du bien</span>
            </h3>
            <p className="mt-3 max-w-md text-ink-700">
              Le 16:9 pour votre vitrine, les déclinaisons verticales et carrées
              pour vos réseaux, et une page web au nom du bien, avec demande de
              visite et QR code.
            </p>
            <div className="mt-8 flex items-end gap-4">
              <figure className="relative aspect-video flex-1 overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/stills/still-01.jpg" alt="Format 16:9, la façade au couchant" className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute bottom-2 left-2 rounded bg-ink-900/50 px-1.5 py-0.5 font-label text-[10px] text-sand-50">16:9</span>
              </figure>
              <figure className="relative aspect-[9/16] w-20 overflow-hidden rounded-lg sm:w-24">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/stills/still-12.jpg" alt="Format 9:16, la villa au crépuscule" className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute bottom-2 left-2 rounded bg-ink-900/50 px-1.5 py-0.5 font-label text-[10px] text-sand-50">9:16</span>
              </figure>
              <figure className="relative aspect-square w-24 overflow-hidden rounded-lg sm:w-28">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/stills/still-05.jpg" alt="Format 1:1, la cuisine" className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute bottom-2 left-2 rounded bg-ink-900/50 px-1.5 py-0.5 font-label text-[10px] text-sand-50">1:1</span>
              </figure>
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-lg border border-sand-300 bg-sand-100 p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/stills/still-02.jpg" alt="" className="h-16 w-24 rounded object-cover" loading="lazy" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-lg text-ink-900 italic">Villa des Pins</p>
                <p className="text-xs text-ink-500">Cap Ferret · la page du bien</p>
              </div>
              <span className="rounded-full bg-pine-700 px-4 py-2 text-xs font-medium text-sand-50">
                Demander une visite
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <div className="rounded-lg bg-pine-900 p-8 text-sand-50 sm:p-12">
            <h3 className="font-display text-2xl sm:text-3xl">
              Conforme <span className="italic">par conception</span>
            </h3>
            <p className="mt-4 max-w-3xl text-sand-200">
              Chaque bien part en deux versions, la version fidèle pour les
              portails et les visites, la version sublimée et signalée pour vos
              réseaux. Le règlement européen impose le marquage des contenus
              générés par IA depuis août 2026. Nos livrables l&apos;intègrent
              déjà, vos concurrents découvriront la règle, vous l&apos;aurez
              anticipée.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
