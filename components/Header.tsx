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
        <header className="bg-transparent relative flex items-center justify-between py-5 md:py-6 px-4 md:px-6 w-full max-w-7xl mx-auto">
            <Link 
                href="/" 
                className="text-lg md:text-2xl font-serif tracking-tight text-slate-800"
            >
                Ram Chandel
            </Link>
            
            <div className="flex items-center gap-1.5 md:gap-4">
                {socialLinks.map((link, i) => (
                    <Link 
                        key={i}
                        href={link.href}
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`w-6 h-6 md:w-8 md:h-8 p-0.5 flex items-center justify-center transition-all duration-300 group hover:scale-110`}
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
