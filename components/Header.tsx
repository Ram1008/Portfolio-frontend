import React from 'react'
import Link from 'next/link'

const socialLinks = [
    { name: "LinkedIn", icon: "/linkedin.png", href: "https://linkedin.com/in/ramchandel", color: "hover:bg-blue-50" },
    { name: "WhatsApp", icon: "/whatsapp.png", href: "https://wa.me/91XXXXXXXXXX", color: "hover:bg-green-50" },
    { name: "Email", icon: "/gmail.png", href: "mailto:ramchandel@example.com", color: "hover:bg-red-50" },
    { name: "Resume", icon: "/download.png", href: "#", color: "hover:bg-slate-50" },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-4 w-full max-w-7xl mx-auto pointer-events-none">
            <Link 
                href="/" 
                className="text-xl md:text-2xl font-serif tracking-tight text-slate-800 pointer-events-auto"
            >
                Ram Chandel
            </Link>
            
            <div className="flex items-center gap-1 md:gap-4 pointer-events-auto">
                {socialLinks.map((link, i) => (
                    <Link 
                        key={i}
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`w-6 h-6 md:w-8 md:h-8 p-0.5 flex items-center justify-center transition-all duration-300 group`}
                        title={link.name}
                    >
                        <img 
                            src={link.icon} 
                            alt={link.name} 
                            className="w-full h-full object-contain filter transition-all duration-300" 
                        />
                    </Link>
                ))}
            </div>
        </header>
    )
}

export default Header
