// app/iletisim/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

/**
 * Minimal içerik konfigürasyonu — burada marka bilgilerini güncelle:
 */
const CONTACT = {
  addressTitle: 'Adres',
  addressText: 'Marmaris, Muğla, Türkiye',
  addressLink: 'https://www.google.com/maps/place/Fonozbart+Ah%C5%9Fap+Sanayi/@36.8329249,28.1403155,17z/data=!3m1!4b1!4m6!3m5!1s0x14bfb9542100a983:0x897c830fcb7a8d3!8m2!3d36.8329206!4d28.1428904!16s%2Fg%2F11hdjgj0tt?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D',
  phoneTitle: 'Telefon',
  phone: ' +90 532 333 50 67',
  emailTitle: 'E-posta',
  email: 'fonozbart@hotmail.com',
  workingTitle: 'Çalışma Saatleri',
  working: 'Hafta içi 08:30–18:30',
  whatsapp: 'https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0',
  heroImage: '/assets/images/sliders/hero2.jpg', // Landing ile uyumlu görsel
  showroomImage: '/assets/images/about-sections/about2.png',
};

export default function ContactPage() {
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
      <section id="contact-hero" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={CONTACT.heroImage}
            alt="Ahşap işçiliği arka plan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FF6B35]" />
            <span className="text-[#FF6B35] font-medium text-xs sm:text-sm tracking-wider uppercase">
              İletişim
            </span>
          </div>

          <h1
            className={`mt-4 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-150 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <span>Bizimle</span>{' '}
            <span className="text-[#FF6B35] block sm:inline">İletişime Geçin</span>
          </h1>

          <p
            className={`mt-3 sm:mt-5 max-w-2xl text-gray-300 text-sm sm:text-lg leading-relaxed transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Prestijli projeleriniz için deneyimimizi yanınıza alın. Size en uygun kanal üzerinden bize ulaşabilirsiniz.
          </p>

          {/* CTA Row */}
          <div
            className={`mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#FF6B35]/25"
            >
              E‑posta Gönder
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm"
            >
              WhatsApp
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Subtle Scroll Indicator (optional) */}
        <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
      >
        {/* Background pattern + floating particles (landing ile tutarlı) */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 opacity-5 transition-all duration-[1800ms] ${
              isVisible ? 'scale-100 rotate-0' : 'scale-110 rotate-3'
            }`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 bg-[#FF6B35] rounded-full opacity-20 transition-all duration-[1600ms] ${
                isVisible ? 'animate-[float_6s_ease-in-out_infinite]' : 'opacity-0'
              }`}
              style={{
                left: `${(i * 97) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${i * 0.35}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Cards */}
            <div className="space-y-4 sm:space-y-6">
              <InfoCard
                icon={<MapPin className="w-5 h-5" />}
                title={CONTACT.addressTitle}
                lines={[
                  CONTACT.addressText,
                ]}
                action={{
                  label: 'Haritada Aç',
                  href: CONTACT.addressLink,
                  icon: <Navigation className="w-4 h-4" />,
                }}
                isVisible={isVisible}
                delay={0}
              />

              <InfoCard
                icon={<Phone className="w-5 h-5" />}
                title={CONTACT.phoneTitle}
                lines={[CONTACT.phone]}
                action={{
                  label: 'Ara',
                  href: `tel:${CONTACT.phone.replace(/\s+/g, '')}`,
                  icon: <Phone className="w-4 h-4" />,
                }}
                isVisible={isVisible}
                delay={100}
              />

              <InfoCard
                icon={<Mail className="w-5 h-5" />}
                title={CONTACT.emailTitle}
                lines={[CONTACT.email]}
                action={{
                  label: 'E‑posta',
                  href: `mailto:${CONTACT.email}`,
                  icon: <Mail className="w-4 h-4" />,
                }}
                isVisible={isVisible}
                delay={200}
              />

              <InfoCard
                icon={<Clock className="w-5 h-5" />}
                title={CONTACT.workingTitle}
                lines={[CONTACT.working]}
                isVisible={isVisible}
                delay={300}
              />
            </div>

            {/* Right: Map / Image with glass overlay */}
            <div
              className={`relative rounded-2xl overflow-hidden border border-[#FF6B35]/20 bg-black/40 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Prefer map embed; dilersen Image ile değiştir */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <iframe
                  title="FNZ Ahşap - Konum"
                  className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-110 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.398761674455!2d28.140315476405746!3d36.83292486585322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfb9542100a983%3A0x897c830fcb7a8d3!2sFonozbart%20Ah%C5%9Fap%20Sanayi!5e0!3m2!1str!2str!4v1755930379716!5m2!1str!2str" 
                />
                
              </div>

              {/* Decorative overlay + badge */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF6B35]/10 via-transparent to-[#8B4513]/10" />
              <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3 py-1.5 bg-black/50 rounded-full border border-white/10 backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-xs text-white/90">Showroom & Atölye</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-300"
            >
              WhatsApp’tan Yazın
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <Link
              href="/projeler"
              className="inline-flex items-center border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300"
            >
              Projelerimizi İnceleyin
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* local keyframes (landing ile aynı isimde çakışmaz) */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(1deg); }
            66% { transform: translateY(4px) rotate(-1deg); }
          }
        `}</style>
      </section>
    </main>
  );
}

/** ---- Components ---- */

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  action?: { label: string; href: string; icon?: React.ReactNode };
  isVisible: boolean;
  delay?: number;
};

function InfoCard({ icon, title, lines, action, isVisible, delay = 0 }: InfoCardProps) {
  return (
    <div
      className={`group relative p-4 sm:p-5 rounded-xl border bg-[#2a2a2b]/30 border-[#FF6B35]/10 transition-all duration-700 hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-base sm:text-lg">{title}</h3>
            {action && (
              <a
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
              >
                {action.label}
                {action.icon && <span className="ml-1.5">{action.icon}</span>}
              </a>
            )}
          </div>
          <div className="mt-1 sm:mt-1.5 text-gray-300 text-sm sm:text-base leading-relaxed">
            {lines.map((l, i) => (
              <p key={i} className="truncate">{l}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#E55A2B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
