export type Demo = {
  slug: string;
  agentFirstName: string;
  propertyLine: string;
  commune: string;
  videoSrc: string;
  posterSrc: string;
  stills: string[];
};

export const demos: Demo[] = [
  {
    slug: "villa-demonstration",
    agentFirstName: "vous",
    propertyLine: "Villa des Pins",
    commune: "Cap Ferret",
    videoSrc: "/media/hero-master.mp4",
    posterSrc: "/media/hero-poster.jpg",
    stills: [
      "/media/stills/still-01.jpg",
      "/media/stills/still-03.jpg",
      "/media/stills/still-05.jpg",
      "/media/stills/still-12.jpg",
    ],
  },
];

export function getDemo(slug: string) {
  return demos.find((d) => d.slug === slug);
}
