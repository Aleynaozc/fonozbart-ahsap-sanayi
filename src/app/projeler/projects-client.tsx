"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { ProjectCardSection } from "@/components/project-card";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/pageHero/page-hero";
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
const PROJECTS = [
  {
    id: 1,
    title: "D-Maris Bay Hotel - NUSRET Restaurant ",
    category: "Ahşap Deck & Dış Mekan",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "NUSRET Restaurant için özel ahşap deck uygulamaları. Dayanıklı ve estetik dış mekan zemin kaplamaları ile lüks konseptin tamamlanması.",
    images: [
      "/assets/images/selected-project/D-MARİS-NUSRET4.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET3.jpg",
    ],
    stats: {
      area: "280m²",
    },
    features: ["Ahşap Deck", "Dış Mekan Dayanıklılığı", "Estetik", "Hızlı Uygulama"],
  },
  {
    id: 2,
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
    stats: {
      area: "285m²",
    },
    features: ["Ahşap Deck", "Dış Mekan Dayanıklılığı", "Estetik", "Hızlı Uygulama"],
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
    stats: {
      floors: "1 Kat",

    },
    features: ["Hijyenik Malzeme", "Özel Kapılar", "Mobilya Tefrişatı", "Ahşap Uygulama"],
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
    stats: {
      rooms: "200 Oda",
    },
    features: [
      "Mobilya Renovasyonu",
      "Bakım ve Onarım İşleri",
      "Hızlı Teslimat",
      "Dayanıklı Malzemeler",
      "Otel Standartlarına Uygun",
    ],
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
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon3.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon4.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon2.jpg",
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
const PROJECTSDATA = {
  heroImage: '/assets/images/sliders/hero1.jpg',
  intro: {
    title: 'Projelerimiz',
    heading: 'Lüks otellerden özel villalara',
    highlight: 'projelerimizden seçmeler. ',
    text: 'FNZ Ahşap Sanayi olarak, yılların deneyimini modern tasarım anlayışı ile buluşturuyoruz. FNZ markası, otel mobilyaları, villa dekorasyonları ve özel projelerde kaliteye olan bağlılığımızın bir yansımasıdır.',
  },


};
export default function ProjectsPageClient() {
  const { currentPage } = useBreadcrumb()
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageClick = (project: any, index: number) => {
    setSelectedProject(project);
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  return (
    <main className="bg-[#1e1e1f] text-white">
      {/* HERO */}
      <PageHero
        backgroundImage={PROJECTSDATA.heroImage}
        badgeText={currentPage}
        title={PROJECTSDATA.intro.heading}
        highlight={PROJECTSDATA.intro.highlight}
        description={PROJECTSDATA.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
      <ProjectCardSection
        projectsdata={PROJECTS}
        title="Projelerimiz"
        subtitle="Tamamladığımız"
        subtitle2="İşleri"
        subtitle3="Keşfedin"
        description="Türkiye’nin farklı bölgelerinde gerçekleştirdiğimiz projeler"
      />

    </main>
  );
}
