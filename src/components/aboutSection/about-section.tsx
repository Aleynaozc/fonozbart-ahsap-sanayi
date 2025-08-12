    import Link from "next/link"
    import { Button } from "@/components/ui/button"
    import { Inter, Cairo } from 'next/font/google'
    import Image from "next/image"

    const cairo = Cairo({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    })

    export function AboutSection() {
        return (
            <section className="py-0">
                {/* About Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
                    {/* Left Image - Full Size */}
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
                        <Image
                            src="/assets/images/about-sections/about-secion1.jpg"
                            alt="Abstract architectural element"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Right Content */}
                    <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 bg-white">
                        <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-3xl w-full">
                            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">HAKKIMIZDA</div>
                             <div className="flex items-center mb-4">
                <div className="w-8 h-0.5 bg-[#D4A574]"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
              </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-[1.1] font-sans">
                                50 Yılı Aşan Sektör Tecrübesi
                            </h2>
                            <div className="detailcontent">
                                <p className={`textdetail ${cairo.className} text-sm sm:text-base leading-relaxed sm:leading-loose`}>
                                    Yarım asrı aşkın tecrübesiyle modern ahşap mobilya tasarımı ve üretimi alanında faaliyet gösteren FNZ Mobilya,
                                    satış öncesi sunduğu kaliteli hizmet anlayışını, satış sonrası müşteri memnuniyetiyle de sürdürülebilir kılmayı amaçlamaktadır.
                                    Uzun yıllara dayanan bilgi birikimi ve deneyimiyle sektörde güvenilir bir marka olmayı başaran FNZ Mobilya,
                                    müşteri odaklı yaklaşımıyla fark yaratmaya devam etmektedir.
                                </p>
                            </div>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm w-full sm:w-auto">
                                Daha Fazla Bilgi
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
