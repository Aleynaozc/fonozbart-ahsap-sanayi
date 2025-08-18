
import ServicesSection from "@/components/servicesSection/services-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/navbar/navbar"
import { AboutSection } from "@/components/aboutSection/about-section"
import { HeroSlider } from "@/components/hero/hero-slider"
import { SelectedProjectsSection } from "@/components/selected-project/selected-project"

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
      <SelectedProjectsSection/>
     
      <Footer />
    </div>
  )
}
