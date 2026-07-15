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
    slug: "cvmi-m271a",
    agentFirstName: "vous",
    propertyLine: "Propriété de charme, première ligne océan",
    commune: "Saint-Jean-de-Luz",
    videoSrc: "/media/demos/cvmi-m271a.mp4",
    posterSrc: "/media/demos/cvmi/poster.jpg",
    stills: [
      "/media/demos/cvmi/still-1.jpg",
      "/media/demos/cvmi/still-2.jpg",
      "/media/demos/cvmi/still-3.jpg",
      "/media/demos/cvmi/still-4.jpg",
    ],
  },
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
