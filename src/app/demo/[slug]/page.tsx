import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";

export const dynamicParams = false;

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const demo = getDemo((await params).slug);
  return {
    title: demo ? `${demo.propertyLine}, ${demo.commune} · Klyx Estate` : "Démo",
    robots: { index: false, follow: false },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const demo = getDemo((await params).slug);
  if (!demo) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="font-display text-xl text-ink-900">
        Klyx <span className="italic">Estate</span>
      </p>

      <h1 className="mt-14 font-display text-4xl leading-tight text-ink-900 sm:text-6xl">
        {demo.propertyLine},{" "}
        <span className="italic text-pine-700">{demo.commune}</span>
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-700">
        Ce film a été créé à partir des photos de votre annonce. Rien
        d&apos;autre. Il vous appartient, que l&apos;on travaille ensemble ou
        non.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg bg-ink-900">
        <video
          src={demo.videoSrc}
          poster={demo.posterSrc}
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full"
        />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {demo.stills.map((s) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s}
            src={s}
            alt=""
            loading="lazy"
            className="aspect-[4/3] w-full rounded object-cover"
          />
        ))}
      </div>

      <div className="mt-14 rounded-lg bg-sand-50 p-8 sm:p-10">
        <p className="max-w-2xl font-display text-2xl leading-snug text-ink-900">
          Chaque mandat peut se lancer comme ça, film en trois formats, photos
          enrichies, page dédiée, déclinaisons pour vos réseaux.{" "}
          <span className="italic text-pine-700">En quarante-huit heures.</span>
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="https://estate.klyx.fr"
            className="rounded-full bg-pine-700 px-8 py-4 text-center font-medium text-sand-50 transition-colors hover:bg-ink-900"
          >
            Découvrir l&apos;atelier
          </a>
          <p className="text-sm text-ink-500">
            Ou répondez simplement à mon email, quinze minutes suffisent.
          </p>
        </div>
      </div>

      <p className="mt-12 text-xs text-ink-500">
        Page privée, préparée pour {demo.agentFirstName}. Elle n&apos;est ni
        publique ni indexée. Film créé par IA à partir de photos existantes,
        signalé conformément au règlement européen.
      </p>
    </main>
  );
}
