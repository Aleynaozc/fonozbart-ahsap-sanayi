import Image from "next/image"
import { Calendar, Hammer, Package } from "lucide-react"
import { Cairo } from 'next/font/google'
import { MdOutlineDesignServices } from "react-icons/md"

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const steps = [
  {
    id: 1,
    title: "Tasarım ve Onay",
    description: "Projeyi 3D tasarıma dönüştürüyor, renk, malzeme ve detay onayı alıyor, gerekirse numune sunuyoruz.",
    Icon: Calendar
  },
  {
    id: 2,
    title: "Tasarım ve Onay",
    description: "Projeyi 3D tasarıma dönüştürüyoruz.Renk, malzeme ve detay onayını alıyoruz.",
    Icon: MdOutlineDesignServices
  },
  {
    id: 3,
    title: "Üretim",
    description: "Modern makine parkurumuzda kaliteli malzemelerle üretim gerçekleştiriyoruz, CNC kesim, bantlama ve montaj işlemlerini hassasiyetle yapıyoruz.",
    Icon: Hammer
  },
  {
    id: 4,
    title: "Montaj ve Teslimat",
    description: "Uzman ekibimiz projeyi yerinde montajlıyor, kalite kontrol yapıyor ve anahtar teslim eksiksiz şekilde teslim ediyoruz.",
    Icon: Package
  }
]

export default function OurProcess() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">

        {/* Görsel solda */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto order-1 lg:order-none">
          <Image
            src="/assets/images/about-sections/about-section-fnz-wood.jpg"
            alt="Abstract architectural element"
            fill
            className="object-cover"
          />
        </div>

        {/* Sol taraf: Metin + ikonlar */}
        <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 bg-white">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-3xl w-full">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">
              İşleyiş Prensiplerimiz
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-[1.1] font-sans">
              Üretim Sürecimiz
            </h2>

            {/* Burada adımları iki satıra böl ve her satırda 2 adım göster */}
            {[[steps[0], steps[1]], [steps[2], steps[3]]].map((pair, rowIndex) => (
              <div key={rowIndex} className="flex items-center justify-between mb-12 relative">

                {pair.map((step, index) => {
                  const n = String(step.id).padStart(2, "0")
                  const Icon = step.Icon

                  return (
                    <div key={step.id} className="relative flex flex-col items-center text-center w-1/2">
                      {/* Icon + Numara */}
                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-gray-200">
                        <Icon className="h-12 w-12 text-gray-600" aria-hidden="true" />
                        <span className="absolute -right-3 -top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-orange-500 px-3 text-xs font-bold text-white shadow-md ring-4 ring-white">
                          {n}
                        </span>
                      </div>

                      {/* Başlık ve açıklama */}
                      <h3 className="mt-4 text-lg font-semibold text-gray-800">{step.title}</h3>
                      <div className="detailcontent">
                        <p className={`textdetail ${cairo.className} text-sm sm:text-base leading-relaxed sm:leading-loose`}>{step.description}</p>
                      </div>
                    </div>
                  )
                })}

                {/* Yatay dotted line - sadece 1. adım ile 2. adım arasında */}
                <div className="absolute top-10 left-1/2 w-full border-t-2 border-dotted border-gray-300 -translate-x-1/2 pointer-events-none" />
              </div>
            ))}

          </div>
        </div>


      </div>
    </section>
  )
}
