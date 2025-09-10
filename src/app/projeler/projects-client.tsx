"use client";

import { useState, useEffect, useRef } from "react";

import { ProjectCardSection } from "@/components/project-card";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/pageHero/page-hero";
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
const PROJECTS = [
 {
  id: 1,
  title: "D-Maris Bay Hotel NUSRET Restaurant Ahşap Deck Uygulaması | Marmaris",
  category: "Ahşap Deck Uygulamaları, Dış Mekan Ahşap Zemin Kaplama, Lüks Restoran Projeleri",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "Marmaris D-Maris Bay Hotel NUSRET Restaurant için özel ahşap deck uygulaması. Lüks oteller için estetik ve dayanıklı dış mekan ahşap zemin kaplama çözümleri.",  images: [
    "/assets/images/selected-project/D-maris-nusret-fnz-wood-4.jpg",
    "/assets/images/selected-project/D-maris-nusret-fnz-wood.jpg",
    "/assets/images/selected-project/D-maris-nusret-fnz-wood-3.jpg",
  ],
  stats: {
    area: "280m²",
  },
  features: [
    "Marmaris Ahşap Deck Uygulaması",
    "Otel Dış Mekan Ahşap Zemin",
    "Lüks Restoran Projesi",
    "Dayanıklı & Estetik Ahşap",
  ],
}
,
  {
    id: 2,
   title: "D-Maris Bay Hotel AURORA Restaurant Ahşap Deck Projesi | Marmaris",
    category: "Ahşap Deck, Otel Dış Mekan Uygulamaları, Ahşap Zemin Kaplama",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "Marmaris D-Maris Bay Hotel AURORA Restaurant için ahşap deck uygulaması. Lüks otel dış mekanlarında estetik ve dayanıklı ahşap zemin çözümleri.",
    images: [
      "/assets/images/selected-project/aurora-capri.webp",
      "/assets/images/selected-project/aurora-capri2.webp",
      "/assets/images/selected-project/aurora-capri3.webp",
    ],
    stats: {
      area: "285m²",
    },
    features: [
      "Ahşap Deck Uygulaması",
      "Lüks Restoran Dış Mekan",
      "Dayanıklı Zemin Kaplama",
      "Estetik Tasarım",
    ],
  },
   {
    id: 3,
    title: "TUI BLUE Tropical & Palace Otel Mobilya Renovasyonu | Sarıgerme",
    category: "Otel Mobilya Renovasyonu, Ahşap Mobilya Bakımı, Otel İç Mekan Tasarımları",
    location: "Sarigerme, Muğla",
    year: "2025",
    client: "TUI BLUE Tropical & Palace",
    description:
      "Muğla Sarıgerme’de TUI BLUE Tropical & Palace otelinin 200 odasında mobilya renovasyonu ve bakım işleri yapıldı. Dayanıklı ve modern otel mobilya çözümleri.",
   images: [
          "/assets/images/selected-project/tui-blue-oda-fnz-wood-2.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-3.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-1.jpg",
    ],
    stats: {
      rooms: "200 Oda",
    },
    features: [
      "Otel Mobilya Renovasyonu",
      "Ahşap Mobilya Bakımı",
      "Modern Otel Tasarımları",
      "Dayanıklı Malzeme Kullanımı",
    ],
  },
  {
    id: 4,
     title: "Ahu Hastanesi Diyaliz Binası Ahşap ve Mobilya Uygulamaları | Marmaris",
    category: "Sağlık Yapıları Ahşap Uygulamaları, Hastane Mobilya Tefrişatı, Özel Kapı Tasarımları",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "Ahu Hastanesi",
    description:
      "Marmaris Ahu Hastanesi Diyaliz Binası için mobilya tefrişatı, hijyenik kapılar ve ahşap uygulamaları yapıldı. Sağlık yapıları için fonksiyonel ve estetik çözümler.",
    images: [
      "/assets/images/selected-project/ahu-diyaliz-fnz-wood-2-2025.jpg",
      "/assets/images/selected-project/ahu-diyaliz-fnz-wood-3-2025.jpg",
      "/assets/images/selected-project/ahu-diyaliz-fnz-wood-4-2025.jpg",
      "/assets/images/selected-project/ahu-diyaliz-fnz-wood-5-2025.jpg",
    ],
    stats: {
      floors: "1 Kat",

    },
     features: [
      "Hastane Mobilya Tefrişatı",
      "Hijyenik Ahşap Malzemeler",
      "Özel Kapı Uygulamaları",
      "Fonksiyonel & Estetik Tasarım",
    ],
  },
  {
    id: 5,
    title: "TUI BLUE Tropical & Palace Otel Mobilya Renovasyonu | Muğla",
    category: "Otel Mobilya Yenileme, Ahşap Mobilya Onarımı, İç Mekan Mobilya Tasarımı",
    location: "Sarıgerme, Muğla",
    year: "2025",
    client: "TUI BLUE Hotels",
    description:
      "Muğla Sarıgerme’de TUI BLUE Tropical & Palace otelinde 200 odalık mobilya renovasyonu yapıldı. Otel konforunu artıran modern ve dayanıklı mobilya çözümleri sunuldu.",
    images: [
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-2.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-3.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-1.jpg",
    ],
    stats: {
      rooms: "200 Oda",
    },
    features: [
      "Otel Mobilya Renovasyonu",
      "Ahşap Mobilya Onarımı",
      "Modern İç Mekan Tasarımı",
      "Dayanıklı Malzemeler",
      "Hızlı Teslimat",
    ],
  },
  {
    id: 6,
   title: "FNZ YAPI Özel Villa İnşaatı ve Mobilya Tefrişatı | Marmaris",
    category: "Anahtar Teslim Villa İnşaatı, Özel Mobilya Üretimi, Ahşap İç Mekan Tasarımları",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "FNZ YAPI",
    description:
      "Marmaris’te FNZ YAPI tarafından inşa edilen özel villa projesi. Anahtar teslim villa inşaatı, ahşap uygulamalar ve özel mobilya tefrişatı ile lüks yaşam alanı oluşturuldu.",
    images: [
      "/assets/images/selected-project/fnz-yapi-villa-fnz-wood.webp",
      "/assets/images/selected-project/fnz-yapi-villa-fnz-wood-4.webp",
      "/assets/images/selected-project/fnz-yapi-villa-fnz-wood-2.webp",
      "/assets/images/selected-project/fnz-yapi-villa-fnz-wood-3.webp",
      "/assets/images/selected-project/fnz-yapi-villa-fnz-wood-5.webp",
    ],
    stats: {
      area: "500m²",
    },
    features: [
      "Anahtar Teslim Villa İnşaatı",
      "Lüks İç Mekan Tasarımı",
      "Özel Mobilya Üretimi",
      "Doğal Ahşap Uygulamaları",
    ],
  },
  {
    id: 7,
    title: "Class Unique Beach Hotel Mobilya Renovasyonu & Kabana Tasarımı | Marmaris",
    category: "Otel Mobilya Yenileme, Beach Kabana Tasarımı, Ahşap Dış Mekan Mobilyaları",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "Class Unique Beach Hotel",
    description:
      "Marmaris Class Unique Beach Hotel’de 62 odalık mobilya renovasyonu ve özel tasarım beach kabana uygulamaları yapıldı. Estetik ve konforlu otel mobilya çözümleri sunuldu.",
    images: [
      "/assets/images/selected-project/CLASS_UNIQUE_fnz-wood-renovasyon3.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_fnz-wood-renovasyon-4.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_fnz-wood-renovasyon.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_fnz-wood-renovasyon-2.jpg",
    ],
    stats: {
      rooms: "62 Oda",
    },
    features: [
      "Otel Mobilya Renovasyonu",
      "Beach Kabana Tasarımı",
      "Şezlong ve Dış Mekan Mobilyaları",
      "Estetik & Konforlu Çözümler",
    ],
  },

  {
    id: 8,
   title: "Ahu Hastanesi Resepsiyon Mobilya Tefrişatı | Marmaris",
    category: "Resepsiyon Mobilya Tasarımları, Sağlık Yapıları Ahşap Uygulamaları",
    location: "Marmaris, Muğla",
    year: "2019",
    client: "Ahu Hastanesi",
    description:
      "Marmaris Ahu Hastanesi resepsiyon alanı için özel mobilya tefrişatı yapıldı. Modern, fonksiyonel ve estetik resepsiyon mobilyaları ile kullanıcı dostu çözümler sunuldu.",
    images: [
      "/assets/images/selected-project/ahu-hastanesi-resepsiyon-marmaris-fnz-ahşap-sanayi.jpg",
      "/assets/images/selected-project/ahu-hastanesi-resepsiyon-marmaris-fnz-ahşap-sanayi-2.jpg",
      "/assets/images/selected-project/ahu-hastanesi-resepsiyon-marmaris-fnz-ahşap-sanayi-3.jpg",
    ],
    stats: {
      rooms: "1",
    },
     features: [
      "Resepsiyon Mobilya Tefrişatı",
      "Modern Ahşap Tasarımlar",
      "Kullanıcı Dostu Çözümler",
      "Fonksiyonel & Estetik Tasarım",
    ],
  },
  {
    id: 9,
    title: "Ahu Hastanesi Doktor Odaları Mobilya Tefrişatı | Marmaris",
    category: "Hastane Mobilya Tasarımları, Ahşap Masa ve Dolap Üretimi, Kapı Tefrişatı",
    location: "Marmaris, Muğla",
    year: "2019",
    client: "Ahu Hastanesi",
    description:
      "Marmaris Ahu Hastanesi doktor odaları için masa, dolap ve kapı mobilya tefrişatı yapıldı. Dayanıklı, estetik ve işlevsel sağlık yapıları için özel mobilya çözümleri.",
    images: [
      "/assets/images/selected-project/ahu-hastanesi-doktor-odasi-fnz-ahsap-sanayi-marmaris.jpg",
      "/assets/images/selected-project/ahu-hastanesi-doktor-odasi-fnz-ahsap-sanayi-marmaris-2.jpg",
      "/assets/images/selected-project/ahu-hastanesi-doktor-odasi-fnz-ahsap-sanayi-marmaris-3.jpg",
    ],
    stats: {
      rooms: "+10",
    },
     features: [
      "Doktor Odası Mobilyaları",
      "Ahşap Masa ve Dolap Üretimi",
      "Kapı Tefrişatı",
      "Dayanıklı Sağlık Yapıları Çözümleri",
    ],
  },
  {
    id: 10,
     title: "Hisarönü Jandarma Kampı Beach Kabana Tasarımı | Muğla",
    category: "Beach Kabana Tasarımı, Ahşap İskele Bakımı, Dış Mekan Ahşap Uygulamaları",
    location: "Hisarönü, Muğla",
    year: "2019",
    client: "Hisarönü Jandarma Kampı",
    description:
      "Muğla Hisarönü Jandarma Kampı’nda ahşap beach kabana tasarımı, iskele bakımı ve apart odalara özel ahşap seperatör uygulamaları yapıldı.",
    images: [
      "/assets/images/selected-project/hisaronu-jandarma-kampi-beach-cabana-iskele.jpg",
      "/assets/images/selected-project/hisaronu-jandarma-kampi-beach-cabana.jpg",
      "/assets/images/selected-project/hisaronu-jandarma-kampi-beach-cabana-2.jpg",
      "/assets/images/selected-project/hisaronu-jandarma-kampi-beach-cabana-3.jpg",
      "/assets/images/selected-project/hisaronu-jandarma-kampi-beach-seperator.jpg",

    ],
    stats: {
      area: "Beach Alanı",
    },
   features: [
      "Beach Kabana Tasarımı",
      "Ahşap İskele Bakımı",
      "Dayanıklı Dış Mekan Uygulamaları",
      "Doğa ile Uyumlu Tasarım",
    ],
  },
  {
    id: 11,
   title: "TUI BLUE Yalancıboğaz Lobby Ahşap Uygulamaları | Marmaris",
    category: "Lobby Ahşap Uygulamaları, Otel Mobilya Tefrişatı, Bar Alanı Tasarımları",
    location: "Marmaris, Muğla",
    year: "2018",
    client: "TUI BLUE",
    description:
      "Marmaris TUI BLUE Yalancıboğaz otelinde lobby ahşap uygulamaları yapıldı. Resepsiyon bankosu, bar alanı ve kitaplık tasarımlarıyla modern otel çözümleri.",
    images: [
      "/assets/images/selected-project/tui-blue-yalancibogaz-lobby-1.jpg",
      "/assets/images/selected-project/tui-blue-yalancibogaz-lobby-2.jpg",
      "/assets/images/selected-project/tui-blue-yalancibogaz-lobby-3.jpg",
      "/assets/images/selected-project/tui-blue-yalancibogaz-lobby-4.jpg",
    ],
    stats: {
      area: "Lobby",
    },
   features: [
      "Resepsiyon Bankosu Ahşap Uygulamaları",
      "Bar Alanı Tasarımı",
      "Kitaplık ve Masa Üretimi",
      "Modern & Estetik Otel Çözümleri",
    ],
  },
  {
    id: 12,
   title: "TUI BLUE Grand Azur Beach Kabana Tasarımı | Marmaris",
    category: "Beach Kabana Uygulamaları, Dış Mekan Ahşap Tasarımlar, Otel Plaj Projeleri",
    location: "Marmaris, Muğla",
    year: "2018",
    client: "TUI BLUE Grand Azur",
    description:
      "Marmaris TUI BLUE Grand Azur oteli için özel beach kabana tasarımı yapıldı. Estetik, konforlu ve mimariye uyumlu otel plaj alanı çözümleri.",
    images: [
      "/assets/images/selected-project/tui-grand-azur-marmaris-kabana-tasarımı.jpg",
      "/assets/images/selected-project/tui-grand-azur-marmaris-kabana-tasarımı-2.jpg",
    ],
    stats: {
      area: "Beach Alanı",
    },
    features: [
      "Beach Kabana Tasarımı",
      "Konforlu Plaj Alanı Çözümleri",
      "Dayanıklı Ahşap Uygulamalar",
      "Estetik & Mimariye Uyumlu Tasarım",
    ],
  },
  {
    id: 13,
    title: "Aslı Boutique Otel Mobilya Tefrişatı | Marmaris",
    category: "Otel Mobilya Üretimi, Ahşap Kapı İmalatı, İç Mekan Mobilya Tasarımları",
    location: "Marmaris, Muğla",
    year: "2017",
    client: "Aslı Boutique Otel",
    description:
      "Marmaris Aslı Boutique Otel için mobilya tefrişatı yapıldı. Giyinme dolabı, TV ünitesi, şifonyer ve kapı imalatı ile modern ve estetik otel çözümleri sunuldu.",
    images: [
      "/assets/images/selected-project/asli-boutique-otel-giyinme-dolabi-fnz-ahsap-sanayi.jpg",
      "/assets/images/selected-project/asli-boutique-otel-giyinme-dolabi-fnz-ahsap-sanayi-2.jpg",
      "/assets/images/selected-project/asli-boutique-otel-ikram-unitesi-fnz-ahsap-sanayi.jpg",
      "/assets/images/selected-project/asli-boutique-otel-kapı-imalat-fnz-ahsap-sanayi.jpg",
    ],
    stats: {
      rooms: "70",
    },
features: [
      "Otel Mobilya Tefrişatı",
      "Ahşap Kapı İmalatı",
      "Giyinme Dolabı & TV Ünitesi",
      "Modern & Estetik Mobilya Tasarımları",
    ],
  },{
    id: 14,
      title: "D-Maris Bay Hotel Beach Kabana ve Deck Uygulamaları | Marmaris",
    category: "Beach Kabana Tasarımı, Ahşap Deck Uygulamaları, Otel Plaj Alanı Projeleri",
    location: "Marmaris, Muğla",
    year: "2016",
    client: "D-Maris Bay Hotel",
    description:
      "Marmaris D-Maris Bay Hotel plaj alanında beach kabana ve ahşap deck uygulamaları yapıldı. Lüks otel plajlarında estetik ve konforlu çözümler sunuldu.",
    images: [
      "/assets/images/selected-project/d-maris-bay-beach-iskele-bakim-fnz-ahsap-sanayi-marmaris.jpg",
      "/assets/images/selected-project/d-maris-bay-beach-sezlong-fnz-ahsap-sanayi-marmaris.jpg",
      "/assets/images/selected-project/d-maris-bay-beach-sezlong-fnz-ahsap-sanayi-marmaris-2.jpg",
      "/assets/images/selected-project/d-maris-bay-beach-cabana-fnz-ahsap-sanayi-marmaris.jpg",
    ],
    stats: {
      area: "Beach Alanı",
    },
    features: [
      "Beach Kabana Tasarımı",
      "Ahşap Deck Uygulamaları",
      "Otel Plaj Alanı Çözümleri",
      "Estetik & Konforlu Tasarım",
    ],
  },
  {
    id: 15,
   title: "TUI BLUE Grand Azur Otel Mobilya Tefrişatı | Marmaris",
    category: "Otel Mobilya Tefrişatı, Ahşap Mobilya Üretimi, İç Mekan Tasarımları",
    location: "Marmaris, Muğla",
    year: "2016",
    client: "TUI BLUE Grand Azur",
    description:
      "Marmaris TUI BLUE Grand Azur oteli için mobilya tefrişatı yapıldı. Modern ve estetik ahşap mobilya çözümleri ile konforlu otel iç mekanları oluşturuldu.",
    images: [
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-2.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-3.jpg",
      "/assets/images/selected-project/tui-blue-oda-fnz-wood-1.jpg",
    ],
    stats: {
      rooms: "100 Oda",
    },
    features: [
      "Otel Mobilya Tefrişatı",
      "Ahşap Mobilya Üretimi",
      "Modern İç Mekan Tasarımları",
      "Estetik & Fonksiyonel Çözümler",
    ],
  },
 

]
const PROJECTSDATA = {
  heroImage: "/assets/images/selected-project/aurora-capri2.webp",
  intro: {
    title: "Projelerimiz",
    heading: "Lüks otellerden özel villalara",
    highlight: "projelerimizden seçmeler. ",
    text: "FNZ Ahşap Sanayi olarak, yılların deneyimini modern tasarım anlayışı ile buluşturuyoruz. FNZ markası, otel mobilyaları, villa dekorasyonları ve özel projelerde kaliteye olan bağlılığımızın bir yansımasıdır.",
  },
};

export default function ProjectsPageClient() {
  const { currentPage } = useBreadcrumb();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#1e1e1f] text-white min-h-screen py-24">
      {/* HERO */}
      <PageHero
        backgroundImage={PROJECTSDATA.heroImage}
        badgeText={currentPage?? undefined}
        title={PROJECTSDATA.intro.heading}
        highlight={PROJECTSDATA.intro.highlight}
        description={PROJECTSDATA.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      {/* PROJE KARTLARI */}
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
