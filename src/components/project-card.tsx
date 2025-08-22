"use client"

import { useState, useEffect, useRef } from "react"
import { MapPin, Users, Award, } from "lucide-react"
import ProjectImageSlider from "./ProjectImageSlider"
import { ImageModal } from "./ImageModal"



// ✅ Artık data componentin içinde değil, props ile gelecek
export function ProjectCardSection({
  projectsdata,
  title = "",
  subtitle = "",
  subtitle2="",
  subtitle3="",
  description = "",
}: {
  projectsdata: {
    id: number
    title: string
    category: string
    location: string
    year: string
    client: string
    description: string
    images: string[]
    stats: Partial<Record<string, string>>
    features: string[]
  }[]
  title?: string
  subtitle?: string
  subtitle2?: string
  subtitle3?: string
  description?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<typeof projectsdata[0] | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const handleImageClick = (project: typeof projectsdata[0], imageIndex: number) => {
     console.log("Clicked!", project.title, imageIndex) // 🔎 test
    setSelectedProject(project)
    setSelectedImageIndex(imageIndex)
    setModalOpen(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#1e1e1f] relative overflow-hidden py-12 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
       {/* Floating Decorative Elements */}
      <div
        className={`absolute top-20 right-20 w-12 h-12 border-2 border-[#FF6B35]/30 rotate-45 transition-all duration-2000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
      />

      <div
        className={`hidden lg:flex absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ✅ Props'tan gelen başlıklar */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className={`mb-4 lg:mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#FF6B35] animate-pulse" />
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">{title}</span>
            </div>
          </div>
       

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <span className="text-[#FF6B35]">{subtitle}</span> {subtitle2}
            <br />
            <span className="text-white">{subtitle3}</span>
          </h2>

          <p className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}>{description}</p>
        </div>

        {/* ✅ Grid'i props.projects ile oluşturuyoruz */}
        <div className={`grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 transition duration-2000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}>
          {projectsdata.map((project, index) => (
            <div key={project.id} className="bg-[#2a2a2b]/30 rounded-2xl overflow-hidden border border-[#FF6B35]/10 flex flex-col">
              <div className="relative">
                <ProjectImageSlider
                  images={project.images}
                  
                  title={project.title}
                  category={project.category}
                  onImageClick={(imageIndex) => handleImageClick(project, imageIndex)}
                />

                {/* Badges Container - Flex layout for better responsive behavior */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                  {/* Category Badge */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block max-w-[90%] truncate px-2 xs:px-3 py-1 bg-[#FF6B35]/90 text-white rounded-full text-xs sm:text-xs font-medium backdrop-blur-sm leading-tight"
                      title={project.category} // Hover'da tam metin gösterir
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="flex-shrink-0 ml-2">
                    <div className="bg-black/70 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-lg">
                      <span className="text-white text-xs font-medium whitespace-nowrap">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="min-h-[3.5rem] mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#FF6B35] transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="min-h-[2rem] mb-4">
                  <div className="flex items-center space-x-4 text-gray-300 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#FF6B35]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#FF6B35]" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="mt-auto">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-[#1e1e1f]/50 rounded-lg border border-[#FF6B35]/10">
                        <div className="text-sm font-bold text-white">{value}</div>
                        <div className="text-xs text-[#FF6B35]">
                          {key === "rooms"
                            ? "Oda"
                            : key === "area"
                              ? "Alan"
                              : key === "floors"
                                ? "Kat"
                                : key === "duration"
                                  ? "Süre"
                                  : "Ekip"}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-xs border border-[#FF6B35]/20"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      {selectedProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedProject.images}
          initialIndex={selectedImageIndex}
          title={selectedProject.title}
        />
      )}
    </section>
  )
}
