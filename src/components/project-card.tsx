"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react";
import { ImageModal } from "./ImageModal";
import { EnhancedAutoBreadcrumb } from "./bradcrumps/enhanced-auto-breadcrumb";

type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  client: string;
  description: string;
  images: string[];
  stats?: Record<string, string | undefined>;
  features?: string[];
};

export function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (imageIndex: number) => void;
}) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  const nextImage = () =>
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div
      ref={cardRef}
      className={`group bg-[#2a2a2b]/30 rounded-2xl overflow-hidden border border-[#FF6B35]/10 flex flex-col transform transition-all duration-700 ease-out ${isCardVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Görsel slider */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={project.images[currentImage]}
          alt={project.title}
          fill
          className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => onImageClick(currentImage)}
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Badge alanları */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
          <span className="px-3 py-1 bg-[#FF6B35]/90 text-white rounded-full text-xs font-medium truncate max-w-[70%]">
            {project.category}
          </span>
          <div className="bg-black/70 px-2 py-1 rounded-lg text-xs text-white font-medium">
            {project.year}
          </div>
        </div>
      </div>

      {/* İçerik */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Başlık */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-[#FF6B35]">
          {project.title}
        </h3>

        {/* Konum + Client */}
        <div className="flex items-center space-x-4 text-gray-300 text-sm mb-4 transition-colors duration-300 group-hover:text-white">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-[#FF6B35]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-3 h-3 text-[#FF6B35]" />
            <span className="truncate">{project.client}</span>
          </div>
        </div>

        {/* Açıklama */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Alt kısım: Stats ve Features */}
        <div className="mt-auto">
          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(project.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-2 bg-[#1e1e1f]/50 rounded-lg border border-[#FF6B35]/10"
                >
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
                            : "Bilgi"}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div className="flex flex-wrap gap-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
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
          )}
        </div>
      </div>
    </div>

  );
}

export function ProjectCardSection({
  projectsdata,
  title,
  subtitle,
  subtitle2,
  subtitle3,
  description,
}: {
  projectsdata: Project[];
  title: string;
  subtitle: string;
  subtitle2: string;
  subtitle3: string;
  description: string;
}) {
  const [visibleCount, setVisibleCount] = useState(6);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleImageClick = (project: Project, index: number) => {
    setSelectedProject(project);
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      <EnhancedAutoBreadcrumb variant="default" enableSEO={true} showRichSnippets={true} className="sm:pt-20" />
      {/* Başlık alanı */}
      <header className="mb-12 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text-[#FF6B35]">{subtitle}</span> {subtitle2}
          <br />
          <span className="text-white">{subtitle3}</span>
        </h2>
        <p className="text-gray-400 mt-4">{description}</p>
      </header>

      {/* Kartlar */}
      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-6">
        {projectsdata.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onImageClick={(imageIndex) =>
              handleImageClick(project, imageIndex)
            }
          />
        ))}
      </div>

      {/* Daha Fazla Göster */}
      {visibleCount < projectsdata.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="px-6 py-3 bg-[#FF6B35] text-white rounded-lg shadow-md hover:bg-[#e55c2d] transition cursor-pointer"
          >
            Daha Fazla Göster
          </button>
        </div>
      )}
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
  );
}
