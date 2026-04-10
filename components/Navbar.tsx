import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-slate-100 px-6 py-3 flex items-center justify-between z-50">
        <Link className="flex flex-col items-center gap-1 group" href="/">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">home</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary">Home</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 group" href="#projects">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">code</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary">Projects</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 relative" href="#about">
          <div className="absolute -top-10 bg-primary p-3 rounded-full shadow-xl shadow-primary/40 border-4 border-white">
            <span className="material-symbols-outlined text-slate-900 leading-none">person</span>
          </div>
          <span className="mt-5 text-[10px] font-bold uppercase tracking-widest text-primary">About</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 group" href="#blog">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">book</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary">Blog</span>
        </Link>
        <Link className="flex flex-col items-center gap-1 group" href="#connect">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">chat_bubble</span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary">Connect</span>
        </Link>
      </nav>
  )
}

export default Navbar