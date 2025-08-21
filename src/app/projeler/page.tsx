"use client"

import { Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const projects = [
  {
    id: 1,
    title: "D-Maris Bay Hotel - AURORA Restaurant ",
    category: "Ahşap Deck & Dış Mekan",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "AURORA Restaurant için özel ahşap deck uygulamaları. Dayanıklı ve estetik dış mekan zemin kaplamaları ile lüks konseptin tamamlanması.",
    images: [
      "/assets/images/selected-project/aurora-capri.webp",
      "/assets/images/selected-project/aurora-capri2.webp",
      "/assets/images/selected-project/aurora-capri3.webp",
    ],
    features: ["Villa Mobilya", "Pergola", "Deck"],

  },
  {
    id: 2,
    title: "D-Maris Bay Hotel - NUSRET Restaurant ",
    category: "Ahşap Deck & Dış Mekan",
    year: "2025",
    location: "Marmaris, Muğla",
    client: "D-Maris Bay Hotel",
    description:
      "NUSRET Restaurant için özel ahşap deck uygulamaları. Dayanıklı ve estetik dış mekan zemin kaplamaları ile lüks konseptin tamamlanması.",
    images: [
      "/assets/images/selected-project/D-MARİS-NUSRET4.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET3.jpg",
    ],
    features: ["Ahşap Kaplama", "Özel Tasarım", "Dayanıklı Malzeme"],
  },
  
   {
    id: 3,
    title: "Ahu Hastanesi Diyaliz Binası",
    category: "Sağlık Yapıları Mobilya ve Ahşap Uygulamaları",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "Ahu Hastanesi",
    description:
      "Diyaliz binası için mobilya tefrişatı, özel kapılar ve ahşap uygulamaları. Fonksiyonellik ve hijyen öncelikli tasarımlar.",
    images: [
      "/assets/images/selected-project/AHU-DİYALİZ-2-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-3-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-4-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-5-2025.jpg",
    ],
    features: ["Ahşap Kaplama", "Özel Tasarım", "Dayanıklı Malzeme"],
  },

  {
    id: 4,
    title: "TUI BLUE Tropical & Palace ",
    category: "Otel Mobilya Renovasyonu ve Bakım İşleri",
    location: "Sarıgerme, Muğla",
    year: "2025",
    client: "TUI BLUE Hotels",
    description:
      "TUI BLUE Tropical & Palace otelinin 200 odasında mobilya renovasyonu ve bakım işleri gerçekleştirildi. Mevcut mobilyaların yenilenmesi, bakım ve onarımları ile birlikte bazı özel üretim parçalar eklenerek otelin konfor ve estetiği güçlendirildi.",
    images: [
      "/assets/images/selected-project/tui-blue-oda.jpg",
      "/assets/images/selected-project/tui-blue-oda2.jpg",
      "/assets/images/selected-project/tui-blue-oda3.jpg",
    ],
    features: ["Şezlong", "Kabana", "Outdoor"],
  },
  {
    id: 5,
    title: "FNZ YAPI – Özel Villa Projesi",
    category: "Anahtar Teslim Villa İnşaatı ve Mobilya Tefrişatı",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "FNZ YAPI",
    description:
      "Modern mimari anlayışla inşa edilen bu özel villa projesinde FNZ YAPI, inşaat sürecinden iç mekan tasarımına ve mobilya üretimine kadar tüm aşamaları üstlendi. Şık detaylar, doğal ahşap uygulamaları ve özel mobilya çözümleriyle lüks bir yaşam alanı oluşturuldu.",
    images: [
      "/assets/images/selected-project/fnz-yapi-villa-5.webp",
      "/assets/images/selected-project/fnz-yapi-villa-2.webp",
      "/assets/images/selected-project/fnz-yapi-villa-3.webp",
      "/assets/images/selected-project/fnz-yapi-villa-4.webp",
      "/assets/images/selected-project/fnz-yapi-villa.webp",
    ],
    stats: {
      area: "500m²",
    },
    features: [
      "Modern Mimari",
      "Anahtar Teslim İnşaat",
      "Özel Mobilya Tefrişatı",
      "Doğal Ahşap Uygulamaları",
      "Lüks İç Mekan Tasarımı",
    ],
  },
  {
    id: 6,
    title: "Class Unique Beach Hotel ",
    category: "Beach & Kabana Tasarımı ve Otel Mobilya Renovasyonu ",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "Class Unique Beach Hotel",
    description:
      "Class Unique Beach Hotel’de 62 odanın mobilya renovasyonu gerçekleştirilirken, aynı zamanda beach alanı için özel tasarım kabana ve şezlong uygulamaları yapıldı. Hem iç mekan hem de dış mekan konseptinde dayanıklı, estetik ve konforlu çözümler sunuldu.",
    images: [
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon2.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon3.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon4.jpg",
    ],
    stats: {
      rooms: "62 Oda",
    },
    features: [
      "Mobilya Renovasyonu",
      "Beach Kabana Tasarımı",
      "Şezlong Üretimi",
      "Dayanıklı Malzemeler",
      "Konfor & Estetik",
    ],
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const openProject = (id: number) => {
    setSelectedProject(id)
    setCurrentImage(0)
  }

  const closeProject = () => setSelectedProject(null)

  const nextImage = () => {
    if (selectedProject === null) return
    const project = projects.find((p) => p.id === selectedProject)
    if (!project) return
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    if (selectedProject === null) return
    const project = projects.find((p) => p.id === selectedProject)
    if (!project) return
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div
      className={`${poppins.className} min-h-screen bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f]`}
    >
      {/* Hero Section */}
      <section className="relative pt-40 md:pt-52 lg:pt-60 pb-16 md:pb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            FNZ Ahşap Sanayi Projelerimiz
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Projelerimiz
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl md:max-w-3xl mx-auto">
            FNZ Wood olarak Marmaris merkezli üretim tesisimizde otel, villa, beach club ve lüks
            yaşam alanlarına yönelik projelerimizi hayata geçiriyoruz. Her proje, modern tasarım,
            kaliteli işçilik ve müşteri memnuniyetini esas alır.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] text-center mb-12"
          >
            Öne Çıkan <span className="text-white">Projeler</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                onClick={() => openProject(project.id)}
                className="cursor-pointer bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] rounded-xl border border-[#FF6B35]/20 shadow-md overflow-hidden group hover:shadow-lg hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="relative">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#FF6B35] text-white px-2 py-1 rounded-md text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Extra Info */}
                  <div className="text-xs text-gray-400 space-y-1">
                    <p>
                      <strong>Yıl:</strong> {project.year}
                    </p>
                    <p>
                      <strong>Lokasyon:</strong> {project.location}
                    </p>
                    <p>
                      <strong>Müşteri:</strong> {project.client}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Gallery */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-4xl w-full mx-auto px-4"
            >
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 text-white hover:text-[#FF6B35] transition z-50"
              >
                <X size={28} />
              </button>

              {(() => {
                const project = projects.find((p) => p.id === selectedProject)
                if (!project) return null
                return (
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[60vh] md:h-[70vh] mb-6">
                      <Image
                        src={project.images[currentImage]}
                        alt={project.title}
                        fill
                        className="object-contain rounded-lg pointer-events-none"
                      />

                      {/* Prev Button */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FF6B35]/70 transition z-40"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FF6B35]/70 transition z-40"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-center max-w-2xl">{project.description}</p>

                    {/* Thumbnail Gallery */}
                    <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                      {project.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`w-20 h-16 relative cursor-pointer rounded-md overflow-hidden border ${
                            currentImage === idx
                              ? "border-[#FF6B35]"
                              : "border-transparent"
                          }`}
                        >
                          <Image src={img} alt={project.title} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
   )
}