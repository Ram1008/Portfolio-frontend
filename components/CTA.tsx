"use client";
import React from 'react'
import Link from 'next/link'

const CTA = () => {
    return (
        <section className="relative flex flex-col min-h-screen py-10 px-6 bg-white overflow-hidden">

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full space-y-12">
                <div className="flex flex-col items-center gap-6">
                    <img 
                        src="/contact_3d.png" 
                        alt="3D Contact Icon"
                        className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
                    />
                    <div className="text-center space-y-4">
                        <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white leading-tight">
                            Let's build something <br/>
                            <span className="italic text-primary">exceptional</span> together.
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg font-light max-w-md mx-auto">
                            Currently open to senior roles and high-impact architectural consultations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                    {/* Contact Form */}
                    <div className="p-8 rounded-[40px] bg-white dark:bg-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none ring-1 ring-slate-200/50 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all text-sm outline-none"/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none ring-1 ring-slate-200/50 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all text-sm outline-none"/>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">Message</label>
                                <textarea rows={4} placeholder="How can I help you?" className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none ring-1 ring-slate-200/50 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all text-sm outline-none resize-none"/>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Send Inquiry
                            <span className="material-symbols-outlined text-sm">send</span>
                        </button>
                    </div>

                    {/* Socials & Info */}
                    <div className="flex flex-col justify-between py-4 space-y-8">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Direct Contact</h3>
                                <p className="text-2xl font-serif text-slate-800 dark:text-slate-100">hello@ramchandel.com</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Location</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-400 font-light italic">Available Globally / Remote & On-site</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Link href="https://linkedin.com/in/ramchandel" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-3xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 p-3 flex items-center justify-center rounded-2xl bg-white shadow-lg transition-transform group-hover:rotate-12">
                                    <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">LinkedIn</span>
                                    <span className="text-sm font-medium">@ramchandel</span>
                                </div>
                            </Link>
                            <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-3xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 p-3 flex items-center justify-center rounded-2xl bg-white shadow-lg transition-transform group-hover:-rotate-12">
                                    <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">WhatsApp</span>
                                    <span className="text-sm font-medium">Let's chat</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Copy */}
            <footer className="relative z-10 text-center py-6 border-t border-slate-200 dark:border-slate-800 pb-24">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400">
                    &copy; 2024 Design. Code. Architect.
                </p>
            </footer>
        </section>
    )
}

export default CTA
