"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const CTA = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <section className="relative flex flex-col min-h-screen bg-white overflow-hidden selection:bg-primary/20">

            {/* Subtle ambient gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] bg-blue-100/30 rounded-full blur-[140px] animate-aurora" />
                <div className="absolute -top-[20%] -left-[15%] w-[50%] h-[50%] bg-indigo-100/20 rounded-full blur-[120px] animate-aurora delay-700" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl mx-auto w-full pt-12 md:pt-16 px-6 pb-0 md:px-12 lg:px-20">

                {/* Headline */}
                <div className="text-center mb-4 space-y-3">
                    {/* Section label — matches BestWorks & Skills pattern */}
                    <div className="flex items-center justify-center gap-2">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                            Let&apos;s Connect
                        </span>
                        <span className="w-8 h-[1px] bg-primary"></span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-[1.15]">
                        Got a vision?
                        <br />
                        <span className="italic text-gradient">Let&apos;s build it.</span>
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed">
                        Currently open to senior roles &amp; high-impact
                        <br className="hidden md:block" /> architectural consultations.
                    </p>
                </div>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full ">

                    {/* Contact Form — 3 cols */}
                    <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                        {/* Name */}
                        <div className='flex md: flex-col'>

                        <div className="relative group">
                            <input
                                type="text"
                                id="cta-name"
                                placeholder="Your name"
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full px-0 py-3.5 bg-transparent border-b border-slate-200 focus:border-primary outline-none text-slate-800 text-sm placeholder:text-slate-300 transition-colors duration-300"
                            />
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out ${focusedField === 'name' ? 'w-full' : 'w-0'}`} />
                        </div>

                        {/* Email */}
                        <div className="relative group">
                            <input
                                type="email"
                                id="cta-email"
                                placeholder="Your email"
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full px-0 py-3.5 bg-transparent border-b border-slate-200 focus:border-primary outline-none text-slate-800 text-sm placeholder:text-slate-300 transition-colors duration-300"
                            />
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out ${focusedField === 'email' ? 'w-full' : 'w-0'}`} />
                        </div>
                        </div>

                        {/* Message */}
                        <div className="relative group">
                            <textarea
                                id="cta-message"
                                rows={3}
                                placeholder="Tell me about your project..."
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                className="peer w-full px-0 py-3.5 bg-transparent border-b border-slate-200 focus:border-primary outline-none text-slate-800 text-sm placeholder:text-slate-300 transition-colors duration-300 resize-none"
                            />
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-out ${focusedField === 'message' ? 'w-full' : 'w-0'}`} />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="group/btn mt-2 inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-primary active:scale-[0.97] transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-primary/25"
                        >
                            Send Message
                            <span className="inline-flex items-center justify-center w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </form>


                    {/* Info Sidebar — 2 cols */}
                    <div className="flex md:flex-col justify-between space-y-10 md:pl-8 md:border-l md:border-slate-100">

                        {/* Direct Contact */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Email</p>
                                <a href="mailto:hello@ramchandel.com" className="text-slate-800 font-medium text-sm hover:text-primary transition-colors duration-300">
                                    hello@ramchandel.com
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Based in</p>
                                <p className="text-slate-800 font-medium text-sm">
                                    Remote &mdash; Global
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Elsewhere</p>
                            <div className="flex flex-col gap-3">
                                <Link
                                    href="https://linkedin.com/in/ramchandel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-3 text-slate-500 hover:text-primary transition-colors duration-300"
                                >
                                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 group-hover/link:border-primary/30 group-hover/link:bg-primary/5 transition-all duration-300">
                                        <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4 object-contain opacity-50 group-hover/link:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <span className="text-sm font-medium">LinkedIn</span>
                                    <svg className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-50 group-hover/link:translate-x-0 transition-all duration-300" viewBox="0 0 16 16" fill="none">
                                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                                <Link
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-3 text-slate-500 hover:text-green-600 transition-colors duration-300"
                                >
                                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 group-hover/link:border-green-200 group-hover/link:bg-green-50 transition-all duration-300">
                                        <img src="/whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain opacity-50 group-hover/link:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <span className="text-sm font-medium">WhatsApp</span>
                                    <svg className="w-3 h-3 ml-auto opacity-0 -translate-x-2 group-hover/link:opacity-50 group-hover/link:translate-x-0 transition-all duration-300" viewBox="0 0 16 16" fill="none">
                                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minimal Footer */}
            <footer className="relative z-10 py-6 pb-20">
                <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                        &copy; {new Date().getFullYear()} Ram Chandel
                    </p>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-slate-400">
                        Design · Code · Architect
                    </p>
                </div>
            </footer>
        </section>
    )
}

export default CTA
