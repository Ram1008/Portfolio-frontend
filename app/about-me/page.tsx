import React from 'react'
import AboutHero from '@/components/AboutHero'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import ProfessionalPhilosophy from '@/components/ProfessionalPhilosophy'
import CTA from '@/components/CTA'

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <AboutHero />
      <ExperienceTimeline />
      <ProfessionalPhilosophy />
      {/* Reusing CTA for direct engagement */}
      <CTA />
    </main>
  )
}
