// app/hizmetler/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Otel Mobilyaları",
    desc: "Marmaris, Bodrum ve çevresindeki oteller için özel üretim mobilya çözümleri.",
    image: "/assets/images/services-section/oda9.jpg",
    icon: "/assets/images/services/hotel-room-icon.png",
  },
  {
    title: "Mutfak Mobilyaları",
    desc: "Fonksiyonel ve modern mutfak dolapları, tezgâh sistemleri.",
    image: "/assets/images/services-section/mutfak.jpg",
    icon: "/assets/images/services/mutfak-icon.png",
  },
  {
    title: "Banyo Mobilyaları",
    desc: "Dayanıklı ve şık banyo dolapları, ayna ve depolama çözümleri.",
    image: "/assets/images/services-section/banyo2.jpg",
    icon: "/assets/images/services/banyo-icon.png",
  },
  {
    title: "Ofis Mobilyaları",
    desc: "Ergonomik masa, depolama ve toplantı odası çözümleri.",
    image: "/assets/images/services-section/ofis4.png",
    icon: "/assets/images/services/office-icon.png",
  },
  {
    title: "Pergola",
    desc: "Ahşap sistemleri, dış mekân gölgelendirme çözümleri.",
    image: "/assets/images/services-section/ahsappergola.jpg",
    icon: "/assets/images/services/pergola-icon.png",
  },
  {
    title: "Ahşap Deck",
    desc: "Havuz kenarı ve teraslar için uzun ömürlü deck kaplama uygulamaları.",
    image: "/assets/images/services-section/deck2.jpg",
    icon: "/assets/images/services/deck-icon.png",
  },
  {
    title: "Kapı",
    desc: "İç ve dış mekânlara özel ölçü kapı üretimi.",
    image: "/assets/images/services-section/kapı3.jpg",
    icon: "/assets/images/services/kapı-icon.png",
  },
  {
    title: "Yangın Kapısı",
    desc: "Sertifikalı ve güvenli yangın kapısı çözümleri.",
    image: "/assets/images/services-section/yangınkapısı.jpg",
    icon: "/assets/images/services/yangın-kapı-icon.png",
  },
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
    <main className="bg-[#1e1e1f] text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/sliders/hero2.jpg"
            alt="Hizmetlerimiz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-[#FF6B35] text-sm font-medium">Hizmetlerimiz</span>
          </div>

          <h1
            className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Yaşam Alanlarınıza Değer Katıyoruz
          </h1>

          <p
            className={`mt-4 max-w-2xl text-gray-300 text-lg leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Fonksiyonel, şık ve uzun ömürlü çözümlerimizle projelerinizi özel kılıyoruz.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className={`group relative rounded-xl overflow-hidden border bg-[#1e1e1f]/60 border-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
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
                      <Image src={service.icon} alt="icon" fill className="object-contain" />
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
            Projeleriniz İçin Doğru Çözümler
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            FNZ Ahşap, otel, konut, ofis ve dış mekân projelerinde şıklık, dayanıklılık ve prestiji bir araya getiriyor.
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
