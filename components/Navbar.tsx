import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-xl border-t border-slate-100 md:top-1/2 md:-translate-y-1/2 md:right-0 md:left-auto md:bottom-auto md:flex-col md:items-end md:gap-4 md:px-0 md:py-8 md:bg-transparent md:border-none md:backdrop-blur-none">
        
        {/* Home Strip */}
        <Link href="/" className="flex flex-col items-center gap-1 group md:flex-row-reverse md:bg-white/50 md:backdrop-blur-xl md:border-l-2 md:border-y-2 md:border-primary md:pl-6 md:pr-5 md:py-3 md:rounded-l-full md:shadow-lg md:transition-all md:duration-300 md:hover:-translate-x-3 md:hover:bg-primary/5">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors duration-300 md:text-2xl font-light md:text-primary">home</span>
          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors duration-300 md:hidden md:group-hover:block md:whitespace-nowrap md:text-primary">Home</span>
        </Link>
        
        {/* About Strip */}
        <Link href="/about-me" className="flex flex-col items-center gap-1 relative group md:flex-row-reverse md:bg-white/50 md:backdrop-blur-xl md:border-l-2 md:border-y-2 md:border-primary md:pl-6 md:pr-5 md:py-3 md:rounded-l-full md:shadow-lg md:transition-all md:duration-300 md:hover:-translate-x-3 md:hover:bg-primary/5">
          {/* Mobile Profile Bubble */}
          <div className="absolute -top-10 bg-primary p-3 rounded-full shadow-xl shadow-primary/40 border-4 border-white md:hidden">
            <span className="material-symbols-outlined text-white leading-none">person</span>
          </div>
          
          <span className="material-symbols-outlined mt-5 md:mt-0 text-slate-400 group-hover:text-primary transition-colors duration-300 md:text-2xl font-light md:text-primary">person</span>
          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-primary md:text-primary md:group-hover:text-primary md:hidden md:group-hover:block md:whitespace-nowrap">About</span>
        </Link>

        {/* Projects Strip */}
        <Link href="/projects" className="flex flex-col items-center gap-1 group md:flex-row-reverse md:bg-white/50 md:backdrop-blur-xl md:border-l-2 md:border-y-2 md:border-primary md:pl-6 md:pr-5 md:py-3 md:rounded-l-full md:shadow-lg md:transition-all md:duration-300 md:hover:-translate-x-3 md:hover:bg-primary/5">
          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors duration-300 md:text-2xl font-light md:text-primary">code</span>
          <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors duration-300 md:hidden md:group-hover:block md:whitespace-nowrap md:text-primary">Projects</span>
        </Link>
      </nav>
  )
}

export default Navbar