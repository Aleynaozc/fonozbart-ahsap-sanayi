import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Users, BarChart3, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero/hero-slider"
import { AboutSection } from "@/components/aboutSection/about-section"
import ServicesSection from "@/components/servicesSection/services-section"
import OurProjectsSection from "@/components/ourProject/our-projects-section"
import OurProcess2 from "@/components/ourProcess/our-process2"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/ctaSections/cta-section"
import { Header } from "@/components/navbar/navbar"

export default function Home() {
  return (
   <div className="min-h-screen bg-white overflow-x-hidden">
        <Header/>
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      <ServicesSection />
      <OurProjectsSection />
      {/* <OurProcess/> */}
      <OurProcess2/>
    <CtaSection />
      {/* Responsive Footer */}
   <Footer/>
    </div>
  )
}
