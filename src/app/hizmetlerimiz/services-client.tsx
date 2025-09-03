'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/pageHero/page-hero';
import { useBreadcrumb } from '@/hooks/use-breadcrumb';

const SERVICES = [
  {
    title: "Otel Mobilyaları",
    desc: "FNZ Ahşap Sanayi, Marmaris, Bodrum ve çevresindeki oteller için özel üretim otel mobilyası çözümleri sunar.",
    image: "/assets/images/services-section/otel-odasi-fnz-wood-1.jpg",
    icon: "/assets/images/services/hotel-room-icon-fnz-wood.png",
  },
  {
    title: "Mutfak Mobilyaları",
    desc: "FNZ Ahşap Sanayi tasarımı modern mutfak dolapları ve tezgâh sistemleri, fonksiyonel ve uzun ömürlü kullanım sağlar.",
    image: "/assets/images/services-section/mutfak-fnz-wood-2.jpg",
    icon: "/assets/images/services/mutfak-icon.png",
  },
  {
    title: "Banyo Mobilyaları",
    desc: "FNZ Ahşap Sanayi tarafından üretilen şık ve dayanıklı banyo dolapları, ayna ve depolama çözümleri.",
    image: "/assets/images/services-section/banyo-fnz-wood-1.jpg",
    icon: "/assets/images/services/banyo-icon-fnz-wood.png",
  },
  {
    title: "Ofis Mobilyaları",
    desc: "FNZ Ahşap Sanayi, ergonomik masa, depolama ve toplantı odası mobilyaları ile ofislerinize verimlilik ve şıklık katar.",
    image: "/assets/images/services-section/ofis-fnz-wood-2.jpg",
    icon: "/assets/images/services/ofis-icon-fnz-wood.png",
  },
  {
    title: "Pergola",
    desc: "FNZ Ahşap Sanayi’nin ahşap pergola sistemleri dış mekânlar için estetik ve dayanıklı gölgelendirme çözümleri sunar.",
    image: "/assets/images/services-section/pergola-fnz-wood.jpg",
    icon: "/assets/images/services/pergola-icon-fnz-wood.png",
  },
  {
    title: "Ahşap Deck",
    desc: "FNZ Ahşap Sanayi, havuz kenarı ve teraslar için uzun ömürlü ahşap deck kaplama uygulamaları üretir.",
    image: "/assets/images/services-section/deck-fnz-wood-1.jpg",
    icon: "/assets/images/services/deck-icon-fnz-wood.png",
  },
  {
    title: "Kapı",
    desc: "FNZ Ahşap Sanayi, iç ve dış mekânlara özel ölçü kapı üretimi yapmaktadır.",
    image: "/assets/images/services-section/kapi-fnz-wood-1.jpg",
    icon: "/assets/images/services/kapi-icon-fnz-wood.png",
  },
  {
    title: "Yangın Kapısı",
    desc: "FNZ Ahşap Sanayi tarafından tedarik edilen sertifikalı ve güvenli yangın kapısı çözümleri.",
    image: "/assets/images/services-section/yangın-kapısı-fnz-wood-2.jpg",
    icon: "/assets/images/services/yangın-kapı-icon-fnz-wood.png",
  },
];

const Services = {
  heroImage: '/assets/images/sliders/page-hero-fnz-wood-1.jpg',
  intro: {
    title: 'Hizmetlerimiz',
    heading: 'Yaşam Alanlarınıza',
    highlight: 'Değer Katıyoruz',
    text: 'FNZ Ahşap Sanayi larak Marmaris merkezli üretim tesislerimizde; otel mobilyaları, villa dekorasyonları, mutfak ve banyo dolapları, pergola ve deck çözümleri ile yaşam alanlarınıza estetik ve dayanıklılık kazandırıyoruz.',
  },
};

export default function ServicesPageClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { currentPage } = useBreadcrumb()

  useEffect(() => {
    setIsLoaded(true);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-[#1e1e1f] text-white min-h-screen py-24">
      {/* HERO */}
      <PageHero
        backgroundImage={Services.heroImage}
        badgeText={currentPage}
        title={Services.intro.heading}
        highlight={Services.intro.highlight}
        description={Services.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      {/* SERVICES GRID */}
      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className={`group relative rounded-xl overflow-hidden border bg-[#1e1e1f]/60 border-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-700 `}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="relative w-10 h-10">
                      <Image src={service.icon} alt={`${service.title} icon`} fill className="object-contain" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Projeleriniz İçin Doğru Ahşap Çözümler
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            FNZ Ahşap Sanayi, <strong>otel mobilyaları</strong>,
            <strong>villa dekorasyonları</strong>, <strong>ofis mobilyaları</strong> ve
            <strong> dış mekân pergola & deck çözümleri</strong> ile projelerinize şıklık,
            dayanıklılık ve prestij katıyor.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all"
          >
            Bizimle İletişime Geçin
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
