
import ServicesSection from "@/components/servicesSection/services-section"

import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/ctaSections/cta-section"
import { Header } from "@/components/navbar/navbar"
import { OurProjects } from "@/components/ourProject/our-projects-section"
import { ProductionProcess } from "@/components/ourProcess/production-process"
import { AboutSection } from "@/components/aboutSection/about-section"
import { HeroSlider } from "@/components/hero/hero-slider"
import { CompletedProjectsSection } from "@/components/completed-projects/completed-projects-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <HeroSlider />
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Completed Project Section */}
      <CompletedProjectsSection/>
      <OurProjects />
      <ProductionProcess />
      <CtaSection />
      {/* Responsive Footer */}
      <Footer />
    </div>
  )
}
