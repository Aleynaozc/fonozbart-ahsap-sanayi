
import ServicesSection from "@/components/servicesSection/services-section"
import { AboutSection } from "@/components/aboutSection/about-section"
import { HeroSlider } from "@/components/hero/hero-slider"
import { SelectedProjectsSection } from "@/components/selected-project/selected-project"
import { CTASection } from "@/components/cta/cta"
import ProductionProcessSection from "@/components/ourProcess/production-process"

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
   
      {/* Hero Section */}
      <HeroSlider />
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />
      {/* Selected Section */}
      <SelectedProjectsSection />
      {/* Production Process Section */}
      <ProductionProcessSection />
      {/* Cta Section */}
      <CTASection />
    </div>
  )
}
