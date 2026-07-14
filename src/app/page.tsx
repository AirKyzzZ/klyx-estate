import { Nav } from "@/components/nav";
import { ScrollFilm } from "@/components/scroll-film";
import { Constat } from "@/components/sections/constat";
import { Demo } from "@/components/sections/demo";
import { RendezVous } from "@/components/sections/rendez-vous";
import { Process } from "@/components/sections/process";
import { Offres } from "@/components/sections/offres";
import { Studio } from "@/components/sections/studio";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <ScrollFilm />
      <Constat />
      <Demo />
      <RendezVous />
      <Process />
      <Offres />
      <Studio />
      <Cta />
      <Footer />
    </main>
  );
}
