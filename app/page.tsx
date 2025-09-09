"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TreatmentFocusSection } from "@/components/treatment-focus-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { AppointmentSection } from "@/components/appointment-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TreatmentFocusSection />
        <WhyChooseUsSection />
        <AppointmentSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
