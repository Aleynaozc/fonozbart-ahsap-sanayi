// app/hakkimizda/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Award,
  Users,
  Gem,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const ABOUT = {
  heroImage: '/assets/images/sliders/hero1.jpg',
  intro: {
    title: 'Hakkımızda',
    heading: 'Zanaatten Sanata, Ahşabın Yolculuğu',
    text: 'FNZ Ahşap olarak, yılların deneyimini modern tasarım anlayışı ile buluşturuyoruz. Her bir projemiz, ustalığımızın ve kaliteye olan bağlılığımızın bir yansımasıdır.',
  },
  story: {
    heading: 'Biz Kimiz?',
    past: `1970 yılında Trabzon'un Of ilçesinde başlayan mobilya yolculuğumuz, 
1980’lerde Ankara Siteler’de büyüyerek devam etti. 2005 yılında Marmaris’te 
kurulan FNZ Ahşap Sanayi, ahşap mobilya üretimi ve otel projelerine yönelik 
kapasitesini artırarak sektörde güçlü bir marka olma yolunda ilerledi.`,
    today: `Bugün FNZ Wood, Marmaris merkezli üretim tesislerinde; 
<strong>otel mobilyaları</strong>, <strong>villa dekorasyonları</strong>, 
<strong>mutfak ve banyo mobilyaları</strong>, pergola ve deck üretimi gibi birçok alanda hizmet vermektedir. 
Ayrıca <em>fason üretim desteği</em> (ebatlama, bantlama, minifix) ile sektördeki projelere çözüm ortaklığı sunmaktadır.

Bölgedeki oteller, villalar, beach club’lar ve özel yaşam alanları için 
modern & şık tasarımlar geliştiren FNZ Ahşap Sanayi; kaliteli malzeme, 
profesyonel işçilik ve proje bazlı üretim deneyimi ile <strong>Türkiye genelinde güvenilir bir ahşap mobilya markası</strong> haline gelmiştir.`,
    image: '/assets/images/about-sections/about1.png',
  },
  vision: {
    heading: 'Vizyon & Misyon',
    text: 'Vizyonumuz; ahşap tasarımında kalite ve prestiji en üst seviyeye taşımak. Misyonumuz ise; her projede özgünlük, işçilikte mükemmeliyet ve müşteri memnuniyetini esas almak.',
    image: '/assets/images/about-sections/about2.png',
  },
  values: [
    { icon: <Award className="w-5 h-5" />, title: 'Kalite', text: 'Her üründe yüksek kalite standartları.' },
    { icon: <Users className="w-5 h-5" />, title: 'Güven', text: 'Müşterilerimizle uzun vadeli ilişkiler kuruyoruz.' },
    { icon: <Gem className="w-5 h-5" />, title: 'Özgünlük', text: 'Her tasarımda benzersiz bir karakter.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Sürdürülebilirlik', text: 'Doğaya ve geleceğe saygılı üretim.' },
  ],
};


export default function AboutPage() {
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
            src={ABOUT.heroImage}
            alt="Ahşap işçiliği"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
          >
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-[#FF6B35] text-sm font-medium">Hakkımızda</span>
          </div>

          <h1
            className={`mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
          >
            {ABOUT.intro.heading}
          </h1>

          <p
            className={`mt-4 max-w-2xl text-gray-300 text-lg leading-relaxed transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
          >
            {ABOUT.intro.text}
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{ABOUT.story.heading}</h2>
           
            <p className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ABOUT.story.past }} />

            <p className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: ABOUT.story.today }} />
          </div>

          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FF6B35]/20 bg-black/40 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
          >
            <Image src={ABOUT.story.image} alt="Atölye" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FF6B35]/20 bg-black/40 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
          >
            <Image src={ABOUT.vision.image} alt="Vizyon" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent" />
          </div>
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{ABOUT.vision.heading}</h2>
            <p className="text-gray-300 leading-relaxed">{ABOUT.vision.text}</p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#2a2a2b]/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Değerlerimiz</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.map((val, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl border bg-[#1e1e1f]/60 border-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/5 transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] mb-4">
                  {val.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{val.text}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projelerinize Değer Katmaya Hazırız</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            FNZ Ahşap ile prestijli projelerinizde farklılık yaratın. Kalite, özgünlük ve güvenin birleştiği noktadayız.
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
