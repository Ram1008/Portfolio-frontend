import BestWorks from "@/components/BestWorks";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="h-screen h-[100dvh] overflow-y-auto snap-y snap-mandatory no-scrollbar">
      <section className="snap-start h-screen h-[100dvh] bg-white">
        <Hero />
      </section>

      <section className="snap-start h-screen h-[100dvh] bg-slate-50/50">
        <BestWorks />
      </section>

      <section className="snap-start h-screen h-[100dvh] bg-white">
        <Skills />
      </section>

      <section className="snap-start min-h-screen bg-slate-50/50">
        <CTA />
      </section>
    </main>
  );
}

