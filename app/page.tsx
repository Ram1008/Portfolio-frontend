import BestWorks from "@/components/BestWorks";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <section className="snap-start h-screen">
        <Hero />
      </section>

      <section className="snap-start h-screen">
        <BestWorks />
      </section>

      <section className="snap-start h-screen">
        <Skills />
      </section>

      <section className="snap-start h-screen">
        <CTA />
      </section>
    </main>
  );
}

