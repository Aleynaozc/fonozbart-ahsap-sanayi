"use client";

import { EnhancedAutoBreadcrumb } from "@/components/bradcrumps/enhanced-auto-breadcrumb";
import { PageHero } from "@/components/pageHero/page-hero";
import { useBreadcrumb } from "@/hooks/use-breadcrumb";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import {
  FaLandmark,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaUtensils,
  FaUniversity,
  FaHome,
} from "react-icons/fa";

const references = [
  { title: "Elmadağ Nato Tesisleri Büro", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Hava Kuvvetleri Mobileks Dinlenme Tesisleri", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Yenikent Askeri Nizamiye Manyetik Giriş", desc: "Masa ve Teşrifatı", category: "devlet" },
  { title: "Milli Eğitim Bakanlığı Bilgi Eğitim Sınıfları", desc: "Masa ve Teşrifatı", category: "eğitim" },
  { title: "Yozgat Belediye Yaşlılar Evi", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Yapı Ve Kredi Bankası", desc: "Mobilya Teşrifatı", category: "banka" },
  { title: "Bodrum Manço Club", desc: "Mobilya Teşrifatı", category: "restoran" },
  { title: "Azerbaycan Bakü'de 70 Odalı", desc: "Otel Mobilya Teşrifatı", category: "otel" },
  { title: "Tesis Sendikası Toplu Konut Kooperatifi", desc: "Mutfak Dolapları", category: "konut" },
  { title: "Rize Çayeli Kız Öğrenci Yurdu", desc: "Mobilya Teşrifatı", category: "eğitim" },
  { title: "T.B.M.M. Çankaya Lojmanları Çocuk Kreş", desc: "Mobilya Teşrifatı", category: "konut" },
  { title: "Kazakistan'da 560 Odalı Otel", desc: "Mobilya Teşrifatı", category: "otel" },
  { title: "Kazakistan'da 200 Odalı Otel", desc: "Mobilya Teşrifatı", category: "otel" },
  { title: "Türkmen Televizyonu", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Ankara’nın Çeşitli Semtlerinde İnşaatlara", desc: "Mobilya Teşrifatı", category: "konut" },
  { title: "Ankara Yargıtay", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Polatlı Erkek Ve Kız Meslek Lisesi", desc: "Mobilya Teşrifatı", category: "eğitim" },
  { title: "Çubuk Meslek Lisesi", desc: "Mobilya Teşrifatı", category: "eğitim" },
  { title: "Konya Cumra Toki Evleri", desc: "Mobilya Teşrifatı", category: "konut" },
  { title: "Tarım Ve Köy Hizmetleri İdari Bina", desc: "Mobilya Teşrifatı", category: "devlet" },
  { title: "Kütahya Devlet Hastanesi", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "Sincan Devlet Hastanesi", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "Marmaris D-Hotel Personel Lojmanları", desc: "Mobilya Teşrifatı", category: "otel" },
  { title: "Marmaris D-Hotel", desc: "Dış Cephe Ve Dış Mekan Ahşap İşleri", category: "otel" },
  { title: "Elegance Hotels Marmaris", desc: "İç Ve Dış Mobilya Ve Ahşap Teşrifatı", category: "otel" },
  { title: "Tui Blue Yalancıboğaz", desc: "İç Ve Dış Mekan Mobilya Ve Ahşap Teşrifatı", category: "otel" },
  { title: "D-Maris Bay Hotel", desc: "Beach Kabana & Şezlong Tasarım ve Uygulaması", category: "otel" },
  { title: "Class Unique Beach Hotel", desc: "Mobilya Tefrişatı, Kabana ve Şezlong Tasarım ve Uygulaması", category: "otel" },
  { title: "Hisarönü Jandarma Kampı", desc: "Kabana Tasarım ve Uygulaması", category: "devlet" },
  { title: "Marmaris D-Resort Grand Azur Otel Personel Lojman", desc: "Mobilya Teşrifatı", category: "otel" },
  { title: "Marmaris Çeşitli Semtlerinde ", desc: "Mobilya Teşrifatı", category: "konut" },
  { title: "Ulaştırma Denizcilik Haberleşme Bakanlığı Binası", desc: "Tadilat Onarım İşleri", category: "devlet" },
  { title: "Aslı Hotel Marmaris", desc: "İç Ve Dış Mobilya Teşrifatı", category: "otel" },
  { title: "Tui Blue Tropical 200 Oda", desc: "Mobilya Renovasyon ve Bakım İşleri", category: "otel" },
  { title: "Hisarönü Jandarma Kampı", desc: "Ahşap Uygulaması", category: "devlet" },
  { title: "Ahu Hastanesi Diyaliz", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "Ahu Hastanesi Röntgen", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "Ahu Hastanesi Doktor Odası", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "Ahu Hastanesi Lojman", desc: "Mobilya Teşrifatı", category: "hastane" },
  { title: "D-Maris Bay Hotel Nusret Restoran", desc: "Ahşap Uygulaması", category: "restoran" },
  { title: "D-Maris Bay Hotel Aurora Restorant", desc: "Ahşap Uygulaması", category: "restoran" },
];

const categories = [
  { key: "all", label: "Tümü" },
  { key: "otel", label: "Oteller" },
  { key: "restoran", label: "Restoran & Club" },
  { key: "hastane", label: "Hastaneler" },
  { key: "eğitim", label: "Eğitim" },
  { key: "banka", label: "Bankalar" },
  { key: "devlet", label: "Devlet Kurumları" },
  { key: "konut", label: "Konut" },
];

const Referances = {
  heroImage: "/assets/images/fnz-wood-hotel-lobby.jpg",
  intro: {
    title: "Referanslarımız",
    heading: " 50+ Yıllık Deneyimle",
    highlight: "Tamamladığımız Projeler",
    text: "FNZ Ahşap Sanayi olarak Marmaris merkezli üretim tesislerimizde; otel mobilyaları, villa dekorasyonları, mutfak ve banyo dolapları, pergola ve deck çözümleri ile yaşam alanlarınıza estetik ve dayanıklılık kazandırıyoruz.",
  },
};

// kategoriye göre ikon eşleme
const categoryIcons: any = {
  devlet: FaLandmark,
  eğitim: FaGraduationCap,
  hastane: FaHospital,
  otel: FaHotel,
  restoran: FaUtensils,
  banka: FaUniversity,
  konut: FaHome,
};

export default function ReferencesPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { currentPage } = useBreadcrumb()
  const filteredRefs =
    activeCategory === "all"
      ? references
      : references.filter((ref) => ref.category === activeCategory);

  return (
    <section className="bg-[#414141] py-20 min-h-screen relative">
      {/* HERO */}
      <PageHero
        backgroundImage={Referances.heroImage}
        badgeText={currentPage ?? undefined}
        title={Referances.intro.heading}
        highlight={Referances.intro.highlight}
        description={Referances.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
      <div className="absolute inset-0 pointer-events-none">
        {/* Main background pattern */}
        <div
          className={`absolute inset-0 opacity-5 transition-all duration-3000 `}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 lg:py-20 relative">
        <EnhancedAutoBreadcrumb variant="default" enableSEO={true} showRichSnippets={true} className="pt-20" />

        {/* Floating Decorative Elements */}
        <div
          className={`absolute top-20 right-2 w-12 h-12 border-2 border-[#FF6B35]/30 rotate-45 transition-all duration-2000`}
        />
        {/* Kategoriler */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeCategory === cat.key
                  ? "bg-orange-500 text-white"
                  : "bg-[#14171b] text-gray-300 hover:bg-orange-500/20 hover:text-orange-400"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRefs.map((ref, i) => {
            const Icon = categoryIcons[ref.category] || FaLandmark;
            return (
              <div
                key={i}
                className="group flex flex-col justify-between bg-[#14171b] border border-white/5 rounded-lg p-5 shadow-md hover:border-orange-400/40 hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{ref.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-400">{ref.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
