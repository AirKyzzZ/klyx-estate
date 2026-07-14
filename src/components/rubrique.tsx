import { Reveal } from "@/components/reveal";

export function Rubrique({
  chapeau,
  title,
  dark = false,
}: {
  chapeau: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className={`border-t pt-6 ${dark ? "border-sand-200/20" : "border-pine-700/25"}`}>
        <span className={`block text-sm ${dark ? "text-sand-200/80" : "text-ink-500"}`}>
          {chapeau}
        </span>
        <h2
          className={`mt-3 font-display text-5xl leading-[1.02] sm:text-7xl ${
            dark ? "text-sand-50" : "text-ink-900"
          }`}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

export function Fragment({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <blockquote className="max-w-2xl border-l-2 border-pine-700 pl-6 font-display text-3xl text-ink-900/90 italic sm:text-4xl">
        {children}
      </blockquote>
    </Reveal>
  );
}
