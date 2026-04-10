import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ram Chandel | Senior Software Engineer & Architect",
  description: "Senior Software Engineer specializing in scalable tech solutions, AI-driven microservices, and cloud architecture. Explore my portfolio and projects.",
  keywords: ["Ram Chandel", "Software Engineer", "Architect", "AI", "Cloud Scalability", "Portfolio"],
  authors: [{ name: "Ram Chandel" }],
  openGraph: {
    title: "Ram Chandel | Senior Software Engineer & Architect",
    description: "Senior Software Engineer specializing in scalable tech solutions and cloud architecture.",
    url: "https://ramchandel.com", // Placeholder, user should update
    siteName: "Ram Chandel Portfolio",
    images: [
      {
        url: "/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Ram Chandel Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Chandel | Senior Software Engineer & Architect",
    description: "Senior Software Engineer specializing in scalable tech solutions and cloud architecture.",
    images: ["/og-image.png"], // Placeholder
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Playfair+Display:ital,wght@0,700;1,700&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
