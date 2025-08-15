
import ServicesSection from "@/components/servicesSection/services-section"

import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/ctaSections/cta-section"
import { Header } from "@/components/navbar/navbar"
import { OurProjects } from "@/components/ourProject/our-projects-section"
import { ProductionProcess } from "@/components/ourProcess/production-process"
import { HeroSlider } from "@/components/hero/hero-slider"
import { AboutSection } from "@/components/aboutSection/about-section2"
export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}

      <AboutSection />


      <ServicesSection />
      <OurProjects />
      <ProductionProcess />
      <CtaSection />
      {/* Responsive Footer */}
      <Footer />
    </div>
  )
}
