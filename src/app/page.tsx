import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Shield, Users, BarChart3, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { HeroSlider } from "@/components/hero/hero-slider"
import { AboutSection } from "@/components/aboutSection/about-section"
import ServicesSection from "@/components/servicesSection/services-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <AboutSection />

      <ServicesSection />

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Everything you need to automate
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed to streamline your workflow and boost team productivity
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Smart Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI-powered workflows that learn from your patterns and automate complex tasks without coding.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Bank-level encryption, SSO integration, and compliance with SOC 2, GDPR, and HIPAA standards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time collaboration tools, shared workspaces, and seamless handoffs between team members.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Detailed insights into workflow performance, bottlenecks, and optimization opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Loved by teams worldwide</h2>
            <p className="text-lg text-gray-600">See what our customers have to say about StreamLine</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "StreamLine reduced our manual work by 80%. What used to take our team 2 days now happens
                  automatically in minutes."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Chen"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Sarah Chen</div>
                    <div className="text-sm text-gray-600">Operations Manager, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "The ROI was immediate. We're saving $50K annually just on the processes we've automated so far."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Michael Rodriguez</div>
                    <div className="text-sm text-gray-600">CEO, GrowthLabs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg mb-4">
                  "Finally, a tool that actually delivers on its promises. Setup was easy and the results were instant."
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Johnson"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Emily Johnson</div>
                    <div className="text-sm text-gray-600">Product Manager, InnovateCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that's right for your team. Upgrade or downgrade at any time.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Starter Plan */}
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small teams getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    100 automated workflows
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Basic integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            {/* Professional Plan */}
            <Card className="border-2 border-blue-600 relative hover:border-blue-700 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>Best for growing teams and businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Up to 25 team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Unlimited workflows
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Advanced integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            {/* Enterprise Plan */}
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For large organizations with custom needs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    SLA guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to streamline your workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of teams who have already transformed their productivity with StreamLine. Start your free
              trial today and see the difference automation can make.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Responsive Footer */}
      <footer className="bg-[#292e34] text-white py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6">
              <Link href="/" aria-label="FNZ Home" className="block">
                <img
                  src="/assets/images/footer-logo.png"
                  alt="FNZ Logo"
                  className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20 w-auto object-contain transition-all duration-300"
                />
              </Link>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
                50 yılı aşan tecrübesiyle modern ahşap mobilya tasarımı ve üretimi alanında
                kaliteli hizmet sunan güvenilir marka.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/fnzwood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#292e34] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/fnzwood/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#292e34] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#292e34] hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">İletişim</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      Fonozbart Ahşap Sanayi<br />
                      Fethiye, Muğla, Türkiye
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-orange-500 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:info@fnzmobilya.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base break-all"
                  >
                    info@fnzmobilya.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-orange-500 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+905323335067"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base"
                  >
                    +90 532 333 50 67
                  </a>
                </div>
              </div>
            </div>

            {/* Latest Projects */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">Son Projeler</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Otel Odası Mobilyaları
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Modern Mutfak Tasarımı
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Ahşap Deck Uygulaması
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Pergola & Bahçe Mobilyası
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Özel Kapı Tasarımları
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-bold text-lg md:text-xl text-white">Hızlı Linkler</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/hakkimizda"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hizmetlerimiz"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Hizmetlerimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projelerimiz"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Projelerimiz
                  </Link>
                </li>
                <li>
                  <Link
                    href="/referanslar"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    Referanslar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/iletisim"
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm md:text-base block py-1 leading-relaxed"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3989397538653!2d28.1428904!3d36.8329206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfb9542100a983%3A0x897c830fcb7a8d3!2sFonozbart%20Ah%C5%9Fap%20Sanayi!5e0!3m2!1str!2str!4v1754570764352!5m2!1str!2str"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-48 md:h-52"
                  title="FNZ Mobilya Konum Haritası"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
              <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
                © {new Date().getFullYear()} FNZ Mobilya. Tüm hakları saklıdır.
              </p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 items-center justify-center md:justify-end">
                <Link
                  href="/gizlilik-politikasi"
                  className="text-gray-400 hover:text-white text-sm md:text-base transition-colors"
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="/kullanim-kosullari"
                  className="text-gray-400 hover:text-white text-sm md:text-base transition-colors"
                >
                  Kullanım Koşulları
                </Link>
                <Link
                  href="/cerez-politikasi"
                  className="text-gray-400 hover:text-white text-sm md:text-base transition-colors"
                >
                  Çerez Politikası
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
