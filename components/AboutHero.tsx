import React from 'react'
import Link from 'next/link'

const socialLinks = [
    { name: "LinkedIn", icon: "/linkedin.png", href: "https://linkedin.com/in/ramchandel" },
    { name: "WhatsApp", icon: "/whatsapp.png", href: "https://wa.me/91XXXXXXXXXX" },
    { name: "Email", icon: "/gmail.png", href: "mailto:ramchandel@example.com" },
    { name: "Resume", icon: "/download.png", href: "#" },
];

const AboutHero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 md:pt-16 pb-12 md:pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Interior Header */}
        <header className="flex items-center justify-between mb-16 md:mb-24">
          <Link href="/" className="text-xl md:text-2xl font-serif tracking-tight text-slate-800">
            Ram Chandel
          </Link>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
              <Link 
                key={i} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img src={link.icon} alt={link.name} className="w-full h-full object-contain p-1" />
              </Link>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="oval-portrait w-64 h-80 md:w-80 md:h-96 bg-slate-100 overflow-hidden shadow-[0_30px_60px_rgba(37,99,235,0.15)] ring-8 ring-white/50 relative group">
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAspNhrSfes-dIGGMJRoKI-ibeFvur8qqKJFUYj98ECaM5DW6T3wjr8HiRkej4CmKGNuuUWcLbsJPncGIhi0Vei3j9OkrG-xr6GRnOnUMAE6u6fjrDktOrvtRp4I3sDAVE-0jbLGwxFnQKD2S2rJgt3nf852ZGOZznxnCku47AvGp7fcGqpKr846Vm0b7EhLysoa2yjKrwu3LC07majbMyfrGPIWtnpr9oEY6jzoJZ1HLuF--PB7MHS-Xh3dwvukuHBGf_5V21XI" 
                alt="Ram Chandel" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">The Narrative</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight">
                Architecting the <span className="italic text-primary">Future</span> of Enterprise Tech.
              </h1>
            </div>

            <div className="space-y-6 text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              <p>
                I am <span className="text-slate-900 font-medium">Ram Chandel</span>, a Senior Software Engineer and Systems Architect with a focus on building high-scale, AI-integrated infrastructures that solve real-world industry challenges.
              </p>
              <p>
                My approach combines deep technical rigor with a product-centric mindset. I don't just write code; I design ecosystems that are scalable, resilient, and adaptive to the rapid shifts in the technological landscape.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-serif text-slate-900">10+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years Experience</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-100"></div>
                <div className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-serif text-slate-900">50+</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Systems Architected</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-100"></div>
                <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-serif text-slate-900">∞</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Passion for Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
