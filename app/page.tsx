import BestWorks from "@/components/BestWorks";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="h-screen h-[100dvh] overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <section className="snap-start h-screen h-[100dvh]">
        <Hero />
      </section>

      <section className="snap-start h-screen h-[100dvh]">
        <BestWorks />
      </section>

      <section className="snap-start h-screen h-[100dvh]">
        <Skills />
      </section>

      <section className="snap-start min-h-screen">
        <CTA />
      </section>
    </main>
  );
}

