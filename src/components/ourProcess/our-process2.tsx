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

export default function OurProcess2() {
  return (
    <section className="py-0">
  <div className="w-full">

    <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 bg-white w-full">
      <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
        <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">
          İşleyiş Prensiplerimiz
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-[1.1] font-sans">
          Üretim Sürecimiz
        </h2>

        {steps.map((step) => {
  const n = String(step.id).padStart(2, "0");
  const Icon = step.Icon;

  return (
    <div
      key={step.id}
      className="max-w-5xl mx-auto py-12 border-b border-gray-100 last:border-b-0 px-4 md:px-8 group hover:bg-gray-50 transition-colors duration-300 rounded-xl"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="text-6xl md:text-8xl font-bold text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-300">
          {n}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {step.title}
          </h3>
          <p className={`${cairo.className} text-gray-600 text-lg leading-relaxed`}>
            {step.description}
          </p>
        </div>
        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
          <Icon className="h-12 w-12 text-gray-600" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>

  </div>
</section>
  )
}
