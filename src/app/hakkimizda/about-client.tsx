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
import { PageHero } from '@/components/pageHero/page-hero';
import { useBreadcrumb } from '@/hooks/use-breadcrumb';
import { EnhancedAutoBreadcrumb } from '@/components/bradcrumps/enhanced-auto-breadcrumb';

const ABOUT = {
  heroImage: '/assets/images/sliders/fnz-wood-hakkımızda-hero.mp4',
  intro: {
    title: 'Hakkımızda',
    heading: 'Zanaatten Sanata,',
    highlight: 'Ahşabın Yolculuğu ',
    text: 'FNZ Ahşap Sanayi olarak, yılların deneyimini modern tasarım anlayışı ile buluşturuyoruz. FNZ markası, otel mobilyaları, villa dekorasyonları ve özel projelerde kaliteye olan bağlılığımızın bir yansımasıdır.',
  },
  story: {
    heading: 'Biz Kimiz?',
    past: `1970 yılında Trabzon'un Of ilçesinde başlayan mobilya yolculuğumuz, 
1980’lerde Ankara Siteler’de büyüyerek devam etti. 2005 yılında Marmaris’te 
kurulan FNZ Ahşap Sanayi, ahşap mobilya üretimi ve otel projelerine yönelik 
kapasitesini artırarak sektörde güçlü bir marka olma yolunda ilerliyor.`,
    today: `Bugün FNZ Wood, Marmaris merkezli üretim tesislerinde; 
<strong>otel mobilyaları</strong>, <strong>villa dekorasyonları</strong>, 
<strong>mutfak ve banyo mobilyaları</strong>, pergola ve deck üretimi gibi birçok alanda hizmet vermektedir. 
Ayrıca <em>fason üretim desteği</em> (ebatlama, bantlama, cnc minifix) ile sektördeki projelere çözüm ortaklığı sunmaktadır.

Bölgedeki oteller, villalar, beach club’lar ve özel yaşam alanları için 
modern & şık tasarımlar geliştiren FNZ Ahşap Sanayi; kaliteli malzeme, 
profesyonel işçilik ve proje bazlı üretim deneyimi ile <strong>Türkiye genelinde güvenilir bir ahşap mobilya markası</strong> haline gelmiştir.`,
    image: '/assets/images/fnz-wood-about.jpg',
  },
  vision: {
    heading: 'Vizyon & Misyon',
    text: 'Vizyonumuz; ahşap tasarımında kalite ve prestiji en üst seviyeye taşımak. Misyonumuz ise; her projede özgünlük, işçilikte mükemmeliyet ve müşteri memnuniyetini esas almak.',
    image: '/assets/images/about-sections/about-section-fnz-wood-2.png',
  },
  values: [
    { icon: <Award className="w-5 h-5" />, title: 'Kalite', text: 'Her üründe yüksek kalite standartları.' },
    { icon: <Users className="w-5 h-5" />, title: 'Güven', text: 'Müşterilerimizle uzun vadeli ilişkiler kuruyoruz.' },
    { icon: <Gem className="w-5 h-5" />, title: 'Özgünlük', text: 'Her tasarımda benzersiz bir karakter.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Sürdürülebilirlik', text: 'Doğaya ve geleceğe saygılı üretim.' },
  ],
};

export default function AboutPageClient() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { currentPage } = useBreadcrumb();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsVisible(e.isIntersecting)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-[#1e1e1f] text-white min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* HERO */}
      <PageHero
        backgroundImage={ABOUT.heroImage}
        badgeText={currentPage ?? undefined}
        title={ABOUT.intro.heading}
        highlight={ABOUT.intro.highlight}
        description={ABOUT.intro.text}
        cta={{ label: "Projelerimizi Keşfedin", href: "/projeler" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
     
      {/* STORY SECTION */}
      <section
        ref={sectionRef}
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      >
         <EnhancedAutoBreadcrumb variant="default" enableSEO={true} showRichSnippets={true} className="pt-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {ABOUT.story.heading}
            </h2>
            <p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: ABOUT.story.past }}
            />
            <p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ABOUT.story.today }}
            />
          </div>

          {/* Image */}
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FF6B35]/20 bg-black/40 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
          >
            <Image
              src={ABOUT.story.image}
              alt="Atölye"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/3] rounded-xl overflow-hidden border border-[#FF6B35]/20 bg-black/40 backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
          >
            <Image
              src={ABOUT.vision.image}
              alt="Vizyon"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/10 to-transparent" />
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {ABOUT.vision.heading}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              {ABOUT.vision.text}
            </p>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#2a2a2b]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Değerlerimiz
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT.values.map((val, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl border bg-[#1e1e1f]/60 border-[#FF6B35]/10 hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/5 transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] mb-4">
                  {val.icon}
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {val.text}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Projelerinize Değer Katmaya Hazırız
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
            FNZ Wood ile prestijli projelerinizde farklılık yaratın. Kalite, özgünlük ve güvenin birleştiği noktadayız.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all"
          >
            Bizimle İletişime Geçin
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
