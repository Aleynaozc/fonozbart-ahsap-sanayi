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
        badgeText={currentPage??undefined}
        title={Services.intro.heading}
        highlight={Services.intro.highlight}
        description={Services.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      {/* SERVICES GRID */}
      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden border bg-[#1e1e1f]/60 border-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-700"
              >
                <div className="relative w-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* ICON + TITLE */}
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 sm:-translate-y-1/3 flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-2">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        fill
                        className="object-contain bg-orange-500 rounded-full"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">{service.title}</h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="p-6 pt-20 text-center">
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{service.desc}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#1e1e1f] ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Projeleriniz İçin Doğru Ahşap Çözümler
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            FNZ Ahşap Sanayi, <strong>otel mobilyaları</strong>,
            <strong>villa dekorasyonları</strong>, <strong>ofis mobilyaları</strong> ve
            <strong> dış mekân pergola & deck çözümleri</strong> ile projelerinize şıklık,
            dayanıklılık ve prestij katıyor.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center  justify-center
             bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]
             px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4
             text-sm sm:text-base md:text-lg
             rounded-lg font-medium
             hover:shadow-lg hover:shadow-[#FF6B35]/25
             transition-all"
          >
            Bizimle İletişime Geçin
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          </a>
        </div>
      </section>
    </main>
  );
}
