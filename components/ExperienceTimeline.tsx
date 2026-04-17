import React from 'react'

const experiences = [
    {
        year: "2023 - Present",
        role: "Senior Systems Architect",
        company: "Global Tech Solutions",
        description: "Leading the architectural design of high-throughput RAG systems and multi-cloud microservices. Mentoring a team of 15+ engineers.",
        icon: "architecture"
    },
    {
        year: "2021 - 2023",
        role: "Lead Software Engineer",
        company: "Innovation Hub",
        description: "Developed and scaled real-time data processing engines for industrial IoT, reducing latency by 40%.",
        icon: "terminal"
    },
    {
        year: "2018 - 2021",
        role: "Full Stack Engineer",
        company: "Venture Systems",
        description: "Built end-to-end fintech solutions focusing on security, performance, and seamless user experiences.",
        icon: "layers"
    },
    {
        year: "2015 - 2018",
        role: "Software Developer",
        company: "Tech Startups",
        description: "Honed skills in JavaScript, Python, and cloud deployments while contributing to various early-stage products.",
        icon: "code"
    }
];

const ExperienceTimeline = () => {
  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Timeline</span>
            <span className="w-8 h-[1px] bg-primary"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
            A Journey of <span className="italic text-primary">Evolution</span>.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 pl-12 md:pl-0' : 'md:pl-16 pl-12 md:pl-0'}`}>
                  <div className={`p-6 md:p-8 rounded-[32px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-1 group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="material-symbols-outlined text-primary text-xl">{exp.icon}</span>
                        <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">{exp.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-slate-900 mb-1">{exp.role}</h3>
                    <p className="text-sm font-medium text-slate-400 mb-4">{exp.company}</p>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty Half for md and up */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
