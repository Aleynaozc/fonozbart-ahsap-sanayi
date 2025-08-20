"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { ArrowRight, Home, Lamp } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const services = [
  {
    id: 1,
    title: "Architecture",
    icon: "/assets/images/services/hotel-room-logo.png",
    description: "Özel mimari çözümler ve tasarımlar",
    image: "/assets/images/services-section/oda9.jpg",
  },
  {
    id: 2,
    title: "Interior Work",
    icon: Lamp,
    description: "Modern ve işlevsel iç mekan çalışmaları",
    image: "/assets/images/services-section/mutfak.jpg",
  },
  {
    id: 3,
    title: "Renovation",
    icon: Lamp,
    description: "Mevcut alanların yenilenmesi ve dönüştürülmesi",
    image: "/assets/images/services-section/banyo2.jpg",
  },
  {
    id: 4,
    title: "Decor & Art",
    icon: Lamp,
    description: "Estetik dekorasyon ve sanat dokunuşları",
    image: "/assets/images/services-section/ofis4.png",
  },
]

const blogs = [
  {
    id: 1,
    date: "Apr 15, 2025",
    title: "Renovation of Architecture and Design",
    image: "/assets/images/services-section/ahsappergola.jpg",
  },
  {
    id: 2,
    date: "June 30, 2025",
    title: "Reclaimed World for the Modern",
    image: "/assets/images/services-section/deck2.jpg",
  },
  {
    id: 3,
    date: "Mar 10, 2025",
    title: "Capturing the Essence of Home to Modern",
    image: "/assets/images/services-section/kapı3.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className={`bg-[#1e1e1f] text-white ${poppins.className}`}>

      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center  pt-40">
        <Image
          src="/assets/images/about-page-fnz-wood.jpg"
          alt="Services Hero"
          fill
          className="object-cover opacity-60"
        />
        <div className="relative text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Hizmetlerimiz
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Ruis aute irure dolor in reprehenderit in voluptate esse fugiat nulla pariatur.
          </p>
          <div className="mt-4 text-sm text-[#FF6B35]">
            Home <span className="text-gray-400"> / </span> Services
          </div>
        </div>
      </section>
      {/* Services Grid */}
     <section
      
      id="services"
      className="relative bg-[#1e1e1f] py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 `}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-400 mt-3">
            Modern, fonksiyonel ve estetik çözümler sunuyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative flex bg-[#2a2a2b]/60 backdrop-blur-sm border border-[#FF6B35]/10 rounded-2xl overflow-hidden transition-all duration-700 `}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Image */}
              <div className="relative w-1/2 h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r `}
                  >
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-[#FF6B35] hover:underline flex items-center gap-1"
                >
                  Read More →
                </a>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF6B35]/30 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Experience Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-6xl font-bold text-[#FF6B35]">10+</h2>
          <p className="text-2xl font-semibold mt-4">Years of Successful Work in Market</p>
          <button className="mt-6 inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF6B35]/30 transition">
            Discover More <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/images/services-section/deck2.jpg"
            alt="Experience"
            width={600}
            height={400}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center bg-[#2a2a2b]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Customer Journey With Us.
        </h2>
        <button className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-[#FF6B35]/30 transition">
          Get Started <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl font-bold mb-10">Our Recent Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#2a2a2b] rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#FF6B35]/20 transition"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
              <div className="p-6">
                <p className="text-sm text-[#FF6B35] mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold leading-snug">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main >
  )
}
