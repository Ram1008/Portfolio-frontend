import Link from 'next/link'

const socialLinks = [
    { name: "LinkedIn", icon: "/linkedin.png", href: "https://linkedin.com/in/ramchandel", color: "hover:bg-blue-50" },
    { name: "WhatsApp", icon: "/whatsapp.png", href: "https://wa.me/91XXXXXXXXXX", color: "hover:bg-green-50" },
    { name: "Email", icon: "/gmail.png", href: "mailto:ramchandel@example.com", color: "hover:bg-red-50" },
    { name: "Resume", icon: "/download.png", href: "#", color: "hover:bg-slate-50" },
];

const techIcons = [
    { name: "JavaScript", icon: "/javascript.png", orbit: 1 },
    { name: "TypeScript", icon: "/typescript.png", orbit: 1 },
    { name: "React", icon: "/react.png", orbit: 1 },
    { name: "Node.js", icon: "/nodejs.png", orbit: 1 },
    { name: "Python", icon: "/python.png", orbit: 1 },
    { name: "RN", icon: "/react-native.png", orbit: 1 },
    { name: "Docker", icon: "/docker.png", orbit: 2 },
    { name: "AWS", icon: "/aws.png", orbit: 2 },
    { name: "GCP", icon: "/gcp.png", orbit: 2 },
    { name: "LangChain", icon: "/langchain.svg", orbit: 2 },
    { name: "n8n", icon: "/n8n.svg", orbit: 2 },
    { name: "Vercel", icon: "/vercel.png", orbit: 2 },
];

const TechOrbit = ({ radius, duration, icons, reverse = false }: { radius: number, duration: number, icons: any[], reverse?: boolean }) => (
    <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/30 border-dashed animate-orbit pointer-events-none"
        style={{
            width: radius * 2,
            height: radius * 2,
            //@ts-ignore
            '--orbit-duration': `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal'
        }}
    >
        {icons.map((tech, i) => {
            const angle = (360 / icons.length) * i;
            return (
                <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                        transform: `rotate(${angle}deg) translateX(${radius}px)`
                    }}
                >
                    <div
                        className="animate-counter-orbit pointer-events-auto"
                        style={{
                            //@ts-ignore
                            '--orbit-duration': `${duration}s`,
                            animationDirection: reverse ? 'reverse' : 'normal'
                        }}
                    >
                        <div className="relative group cursor-default p-1">
                            <img src={tech.icon} alt={tech.name} className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-110" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-md text-slate-900 border border-slate-100 px-2 py-1 rounded shadow-md whitespace-nowrap z-30">
                                {tech.name}
                            </span>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
);




const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden bg-[#f8fafb] selection:bg-primary/20">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-400/20 rounded-full blur-[120px] animate-aurora mix-blend-multiply"></div>
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[100px] animate-aurora delay-700 mix-blend-multiply"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-sky-400/20 rounded-full blur-[110px] animate-aurora delay-1000 mix-blend-multiply"></div>
            </div>
            <header className="bg-transparent relative flex items-center justify-between py-5 md:py-6 px-4 md:px-6 w-full max-w-7xl mx-auto mt-2">
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

            <section className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 md:py-16 flex flex-col items-center">
                <div className="relative mb-6 flex items-center justify-center">
                    {/* Orbiting Icons */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center scale-75 md:scale-100">
                        <TechOrbit
                            radius={180}
                            duration={20}
                            icons={techIcons.filter(t => t.orbit === 1)}
                        />
                        <TechOrbit
                            radius={240}
                            duration={35}
                            icons={techIcons.filter(t => t.orbit === 2)}
                            reverse
                        />

                    </div>

                    <div className="oval-portrait w-48 h-64 bg-slate-100 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-8 ring-white/50 relative z-10 group transition-transform duration-500 hover:scale-[1.02]">
                        <img
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                            alt="Ram Chandel - Senior Software Engineer"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQAspNhrSfes-dIGGMJRoKI-ibeFvur8qqKJFUYj98ECaM5DW6T3wjr8HiRkej4CmKGNuuUWcLbsJPncGIhi0Vei3j9OkrG-xr6GRnOnUMAE6u6fjrDktOrvtRp4I3sDAVE-0jbLGwxFnQKD2S2rJgt3nf852ZGOZznxnCku47AvGp7fcGqpKr846Vm0b7EhLysoa2yjKrwu3LC07majbMyfrGPIWtnpr9oEY6jzoJZ1HLuF--PB7MHS-Xh3dwvukuHBGf_5V21XI"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

                <div className="relative z-20 text-center space-y-3 max-w-2xl">
                    <div className="space-y-1">
                        <h1 className="font-serif text-4xl md:text-7xl leading-[1.1] text-slate-900 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
                            The <span className="italic text-gradient">Architect</span>
                        </h1>
                        <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs animate-in fade-in slide-in-from-bottom-4 duration-700">
                            Software Engineer
                        </h2>
                    </div>

                    <p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        Crafting scalable, high-performance tech solutions for world-class business problems.
                    </p>

                </div>
            </section>


        </div>
    )
}

export default Hero