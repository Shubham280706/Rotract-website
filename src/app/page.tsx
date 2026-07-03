import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Impact } from "@/components/sections/Impact";
import { Projects } from "@/components/sections/Projects";
import { Team } from "@/components/sections/Team";
import { Events } from "@/components/sections/Events";
import { Sponsors } from "@/components/sections/Sponsors";
import { Join } from "@/components/sections/Join";
import { Footer } from "@/components/sections/Footer";
import { HashCleaner } from "@/components/HashCleaner";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/components/sections/Intro";
import { ImageTextShowcase } from "@/components/sections/ImageTextShowcase";

export default function Home() {
  return (
    <>
      <HashCleaner />
      <Nav />
      <main className="min-h-screen">
        <Hero />
        <Marquee />
        <Intro />
        <Projects />
        <About />
        <Impact />
        <Team />
        <Events />
        <Sponsors />
        <ImageTextShowcase />
        <Join />
      </main>
      <Footer />
    </>
  );
}

