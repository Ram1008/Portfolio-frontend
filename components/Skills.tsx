"use client";
import React from 'react'

const skillCategories = [
    {
        name: "Backend Engineering",
        description: "Building robust, scalable server-side systems and APIs.",
        skills: [
            { name: "Node.js", icon: "terminal", color: "bg-blue-500" },
            { name: "Go Lang", icon: "settings_ethernet", color: "bg-cyan-500" },
            { name: "Python", icon: "analytics", color: "bg-indigo-500" },
            { name: "Microservices", icon: "hub", color: "bg-blue-600" }
        ],
        theme: "from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-950/50"
    },
    {
        name: "Cloud & Infrastructure",
        description: "Architecting resilient cloud-native deployment pipelines.",
        skills: [
            { name: "AWS Suite", icon: "cloud", color: "bg-orange-500" },
            { name: "Kubernetes", icon: "container", color: "bg-blue-500" },
            { name: "Docker", icon: "directions_boat", color: "bg-cyan-600" },
            { name: "Terraform", icon: "architecture", color: "bg-indigo-600" }
        ],
        theme: "from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-950/50"
    },
    {
        name: "AI & Intelligence",
        description: "Implementing state-of-the-art RAG and LLM systems.",
        skills: [
            { name: "LLMs / RAG", icon: "psychology", color: "bg-primary" },
            { name: "Vector DBs", icon: "database", color: "bg-emerald-600" },
            { name: "Graph RAG", icon: "mediation", color: "bg-primary" },
            { name: "Pipelines", icon: "dynamic_feed", color: "bg-teal-600" }
        ],
        theme: "from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-950/50"
    },
    {
        name: "Modern Frontend",
        description: "Crafting beautiful, high-performance user interfaces.",
        skills: [
            { name: "React / Next.js", icon: "web", color: "bg-blue-400" },
            { name: "TypeScript", icon: "javascript", color: "bg-blue-600" },
            { name: "Tailwind CSS", icon: "palette", color: "bg-cyan-400" },
            { name: "Three.js", icon: "3d_rotation", color: "bg-slate-800" }
        ],
        theme: "from-slate-100 to-white dark:from-slate-800/50 dark:to-slate-950/50"
    }
];

const Skills = () => {
    return (
        <section className="relative flex flex-col min-h-screen py-8 px-6 bg-slate-50 overflow-hidden">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-400/20 rounded-full blur-[120px] animate-aurora mix-blend-multiply"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[100px] animate-aurora delay-700 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-sky-400/20 rounded-full blur-[110px] animate-aurora delay-1000 mix-blend-multiply"></div>
            </div>
            
            <header className="relative z-10 flex flex-col gap-2 mb-12">
                <div className="flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-primary"></span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Technical Stack</span>
                </div>
                <h2 className="font-serif text-4xl text-slate-900 leading-tight">
                    The Architect's <br/>
                    <span className="italic text-primary">Toolbox</span>
                </h2>
            </header>

            <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24 overflow-y-auto no-scrollbar">
                {skillCategories.map((category, idx) => (
                    <div 
                        key={idx} 
                        className={`group p-8 rounded-[40px] bg-gradient-to-br ${category.theme} border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                    >
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="font-serif text-2xl text-slate-800 dark:text-slate-100">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-[280px]">
                                    {category.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 ring-1 ring-slate-200/50 dark:ring-slate-800 backdrop-blur-sm group-hover:ring-primary/20 transition-all shadow-sm">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${skill.color} text-white shadow-lg shadow-${skill.color}/20 flex-shrink-0`}>
                                            <span className="material-symbols-outlined text-lg">{skill.icon}</span>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-20">
                <span className="text-[10px] uppercase tracking-widest">Connect</span>
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </section>
    )
}

export default Skills
