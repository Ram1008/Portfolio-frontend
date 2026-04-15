"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

interface Project {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  tags: string[];
  client: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  completionDate: string;
}

const projects: Project[] = [
  {
    title: "Neural Knowledge Engine",
    slug: "neural-knowledge-engine",
    description: "Enterprise-grade RAG system for private vector processing using state-of-the-art embedding models.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJkg8OimqOlzWkI3zptI-FzpVGSURlsf9LWpuArGooJcLY_gW4PLGq82D3uG7AswsTy71scXU_DbnPtBpW7Wgx5TL0sfK45FnfuepwLXzKPXs8fBVgvsBGbC5j3cUMm7Un-7yYbzQ0EqTAZCcKmz2y5CvYkNNJ1zWGWCOCP7DFIB2KXXk8gVxwB_6D9_9XtyxV2qar7a7YfVUfgeNL5diaTsVMdTWQ2YXcoGs6IAOGjZFNKUeNAT0uD2p7Y7OQJdiFLUDuPLmsEjI",
    category: "AI & Intelligence",
    technologies: ["Node.js", "Python", "LangChain", "Pinecone"],
    tags: ["LLM", "RAG", "Automation"],
    client: "Global Tech Corp",
    githubUrl: "#",
    liveUrl: "#",
    isFeatured: true,
    completionDate: "Mar 2024",
  },
  {
    title: "SkyNet Mesh Architecture",
    slug: "skynet-mesh",
    description: "High-availability microservices architecture across multi-cloud regions with automated failover.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJWm7yW9Uirp0hIhdiCDI69gsxf1BCrRpsHTQbaLhpLArijnHQthikHkdCGv6p3ANPN1SphY90BBNiBEuJq_oAjE1grrDDR3nGYY8nX7Zvoi4sWalY9w9PUAHypKNDihJAkHklwVCxge99AAObwF-8gVVNHj4_hieXbYRUGb98mEpAVjS-VrFUQfquSXpZefgmonER568szO9G9FDGsNJw48W1FW9nfE6Xpb9myjCZSQTO8YHrqwvw17_JdSjDYVQJGpciLebc_Ns",
    category: "Distributed Systems",
    technologies: ["Go", "Kubernetes", "AWS", "Docker"],
    tags: ["DevOps", "Infrastructure", "Cloud"],
    client: "Skyline Inc.",
    githubUrl: "#",
    liveUrl: "#",
    isFeatured: false,
    completionDate: "Jan 2024",
  },
  {
    title: "Luminal IoT Dashboard",
    slug: "luminal-dashboard",
    description: "Real-time data visualization and anomaly detection for large-scale industrial IoT sensors.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdLfonH1Htj_y2nXpOHHb5vBZ13d8yI3G-THAA_cHIR4yRzF0G3YS8b8z4ZZfkq-4kWxnwubk8wsrx_CkLpVDAMV8DJaQV3kf6Ib0J3KttC7BFYSsqKpYMSatiVMarOdJtnVi5999oSI8-WX1C70MvHrVNPgXbEe6bQ_EkEpapPdduy10oD4ExR7YWcHkO8QG0LonVOD1EFz08jwD3zlv5yGH1b8ODov28cgmqrYqcqycgCDv2lIlP0KRkmAVZCMZQ6fhsMUFy_Hg",
    category: "Web Systems",
    technologies: ["React", "TypeScript", "D3.js", "Redis"],
    tags: ["Real-time", "Analytics", "IoT"],
    client: "Industrial Solutions",
    githubUrl: "#",
    liveUrl: "#",
    isFeatured: true,
    completionDate: "Dec 2023",
  },
];

const BestWorks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    }
  };

  return (
    <section className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto w-full pt-4 pb-2 px-6 md:px-12 flex flex-col">
        <div className="flex items-center gap-2 mt-4">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Hands On</span>
        </div>
        <div className="flex justify-between ">

          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
            Best <span className="italic text-primary">Works</span>
          </h2>
          <Link
            href="/archive"
            className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-bold hover:text-slate-900 transition-colors duration-300 group whitespace-nowrap mb-1 md:mb-2"
          >
            view all
            <span className="material-symbols-outlined text-sm md:text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
          </Link>
        </div>

      </div>

      {/* Gallery Container - flex-1 fills remaining height after header */}
      <div className="relative flex-1 flex flex-col min-h-0 pb-[80px]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-[calc((100vw-min(1280px,92vw))/2)] no-scrollbar scroll-smooth h-full"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-[88vw] md:w-[540px] h-full snap-center group/card py-2"
            >
              <div className="relative h-full flex flex-col bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                {/* Image Section - Top 40% of card height */}
                <div className="relative h-[45%] overflow-hidden shrink-0">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                  />
                  {/* Image Gradient - Higher base opacity on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 md:opacity-60 md:group-hover/card:opacity-80 transition-opacity duration-500"></div>

                  {/* Overlays */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    <span className="px-3.5 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 shadow-xl">
                      {project.category}
                    </span>
                    {project.isFeatured && (
                      <span className="px-3.5 py-1.5 bg-primary rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-white shadow-2xl shadow-primary/40">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Quick Actions - Visible by default on Mobile, Hover on Desktop */}
                  <div className="absolute bottom-5 right-5 flex gap-2.5 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 transition-all duration-500">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-slate-900 hover:bg-primary hover:text-white transition-all shadow-xl"
                      >
                        <span className="material-symbols-outlined text-lg">code</span>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-primary text-white hover:bg-slate-900 transition-all shadow-xl"
                      >
                        <span className="material-symbols-outlined text-lg">open_in_new</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content Section - Bottom 60% of card height */}
                <div className="p-5 md:p-7 flex-1 flex flex-col justify-between space-y-3 overflow-y-auto">
                  <div className="space-y-2.5">
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-slate-900 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-50 text-[9px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 italic"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metadata - Thinner Divider */}
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Client</span>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-700">{project.client}</span>
                    </div>
                    <div className="text-right space-y-0.5">
                      <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold">Launch</span>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-700">{project.completionDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Masks - Smaller width */}
        <div className="absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 hidden md:block" />

        {/* Swipe Intuition Arrow - Slimmer for Mobile */}
        {showArrow && (
          <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 pointer-events-none animate-pulse flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30">
              <span className="material-symbols-outlined text-sm md:text-base animate-[bounce-x_1.5s_infinite]">arrow_right_alt</span>
            </div>
          </div>
        )}
      </div>


      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
      `}</style>
    </section>
  );
};

export default BestWorks;