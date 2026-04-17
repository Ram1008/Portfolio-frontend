"use client";
import React, { useState } from 'react'

const domains = [
    {
        title: "Web/Mobile Frontend",
        icon: "smartphone",
        description: "Responsive, high-performance UIs",
        skills: [
            { name: "React", icon: "/react.png" },
            { name: "React Native", icon: "/react-native.png" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "JavaScript", icon: "/javascript.png" },
            { name: "Next.js", icon: "/vercel.png" },
        ],
    },
    
    {
        title: "Backend",
        icon: "dns",
        description: "Scalable APIs & microservices",
        skills: [
            { name: "Node.js", icon: "/nodejs.png" },
            { name: "Python", icon: "/python.png" },
            { name: "TypeScript", icon: "/typescript.png" },
            { name: "Docker", icon: "/docker.png" },

        ],
    },
    {
        title: "RAG, MCP & Agents",
        icon: "psychology",
        description: "AI agents & protocol servers",
        skills: [
            { name: "LangChain", icon: "/langchain.svg" },
            { name: "Python", icon: "/python.png" },
            { name: "Node.js", icon: "/nodejs.png" },
            { name: "n8n", icon: "/n8n.svg" },
        ],
    },
    {
        title: "Dev Ops",
        icon: "cloud",
        description: "Infrastructure & DevOps",
        skills: [
            { name: "AWS", icon: "/aws.png" },
            { name: "GCP", icon: "/gcp.png" },
            { name: "Docker", icon: "/docker.png" },
            { name: "Vercel", icon: "/vercel.png" },
        ],
    },
    
];

const Skills = () => {
    const [selected, setSelected] = useState(0);
    const activeDomain = domains[selected];

    return (
        <section className="relative flex flex-col h-screen pt-10 md:pt-12 pb-8 bg-[#f8fafb] overflow-hidden">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-400/10 rounded-full blur-[120px] animate-aurora mix-blend-multiply"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-400/10 rounded-full blur-[100px] animate-aurora delay-700 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-sky-400/10 rounded-full blur-[110px] animate-aurora delay-1000 mix-blend-multiply"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 flex flex-col gap-1.5 mb-5 md:mb-8 shrink-0 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
                <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The knowledge base</span>
                </div>
                <h2 className="flex gap-2 font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                    Technical<br/>
                    <span className="italic text-primary">Skills</span>
                </h2>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col min-h-0 pb-16 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">

                {/* Domain Selector Row */}
                <div className="shrink-0 mb-6 md:mb-8">
                    <div className="flex md:justify-center flex-wrap gap-2 md:gap-3 pb-1">
                        {domains.map((domain, idx) => {
                            const isActive = selected === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setSelected(idx)}
                                    className={`
                                        group relative flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 rounded-2xl
                                        border transition-all duration-400 cursor-pointer whitespace-nowrap shrink-0
                                        ${isActive
                                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                                            : 'bg-white/70 backdrop-blur-sm text-slate-600 border-slate-200/60 hover:border-primary/30 hover:bg-white hover:shadow-md'
                                        }
                                    `}
                                >
                                    <span className={`material-symbols-outlined text-lg md:text-xl transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary/70 group-hover:text-primary'}`}>
                                        {domain.icon}
                                    </span>
                                    <span className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-700'}`}>
                                        {domain.title}
                                    </span>
                                    {/* Active indicator dot */}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Selected Domain Skills */}
                <div className="flex-1 min-h-0">
                    {/* Domain description */}
                    <div className="flex items-center gap-3 mb-5 md:mb-6">
                        <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-xl">{activeDomain.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-sm md:text-base font-bold text-slate-800">{activeDomain.title}</h3>
                            <p className="text-[11px] md:text-xs text-slate-400 font-light">{activeDomain.description}</p>
                        </div>
                        <span className="ml-auto text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{activeDomain.skills.length} tools</span>
                    </div>

                    {/* Skills Grid */}
                    <div
                        key={selected}
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
                    >
                        {activeDomain.skills.map((tech, idx) => (
                            <div
                                key={`${selected}-${idx}`}
                                className="group flex flex-col items-center gap-2.5 py-5 px-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100/80 hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 cursor-default"
                                style={{ animationDelay: `${idx * 60}ms`, animationFillMode: 'backwards' }}
                            >
                                {/* Icon */}
                                <div className="w-11 h-11 flex items-center justify-center rounded-xl p-2 bg-slate-50 group-hover:bg-slate-100/80 transition-colors duration-300">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                {/* Name */}
                                <span className="text-[10px] md:text-[11px] font-medium text-slate-400 group-hover:text-slate-600 tracking-wide text-center leading-tight transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-20 z-10">
                <span className="text-[9px] uppercase tracking-widest text-slate-400">Connect</span>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </section>
    )
}

export default Skills
