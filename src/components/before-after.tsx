"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "photo d'origine",
  afterLabel = "photo enrichie",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeSrc} alt={beforeLabel} />}
        itemTwo={<ReactCompareSliderImage src={afterSrc} alt={afterLabel} />}
        style={{ aspectRatio: "16/10", width: "100%" }}
      />
      <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-ink-900/50 px-2 py-1 font-label text-[11px] text-sand-50">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 bottom-3 rounded bg-ink-900/50 px-2 py-1 font-label text-[11px] text-sand-50">
        {afterLabel}
      </span>
    </div>
  );
}
