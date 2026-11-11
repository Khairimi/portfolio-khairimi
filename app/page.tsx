import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Leadership } from "@/components/sections/leadership";
import { Projects } from "@/components/sections/projects";
import { Gallery } from "@/components/sections/gallery";
import { Roadmap } from "@/components/sections/roadmap";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Leadership />
        <Projects />
        <Gallery />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
