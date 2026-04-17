import React from 'react'

const philosophies = [
  {
    title: "Scalability First",
    description: "Architecting systems that don't just work for today, but thrive under tomorrow's load. Future-proofing through clean abstractions.",
    icon: "trending_up"
  },
  {
    title: "Product Mindset",
    description: "Technology is a means to an end. I focus on creating value for the end user and solving real business problems through code.",
    icon: "lightbulb"
  },
  {
    title: "Mentorship & Culture",
    description: "Engineering excellence is a team sport. I am committed to elevating those around me and fostering a culture of knowledge sharing.",
    icon: "groups"
  },
  {
    title: "Pragmatic Innovation",
    description: "Staying on the cutting edge while maintaining stability. Using the right tool for the job, not just the newest one.",
    icon: "precision_manufacturing"
  }
];

const ProfessionalPhilosophy = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-primary"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Philosophy</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight">
              My core <span className="italic text-primary">Principles</span>.
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-lg">
              Software engineering is more than just syntax; it's the art of managing complexity and building lasting value through disciplined architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophies.map((item, i) => (
              <div 
                key={i} 
                className="group p-6 rounded-[32px] bg-white border-2 border-primary/20 transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/5 text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalPhilosophy
