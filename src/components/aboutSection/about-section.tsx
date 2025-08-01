
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Search, ShoppingBag, Menu } from "lucide-react"
import { Inter } from "next/font/google"
import Image from "next/image"


export function AboutSection() {
    return (

        <section className="py-0">
            {/* About Section */}
            <div className="grid lg:grid-cols-2 min-h-[600px]">
                {/* Left Image - Full Size */}
                <div className="relative">
                    <Image
                        src="/assets/images/about-sections/about-secion2.jpg"
                        alt="Abstract architectural element"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="flex items-center px-8 lg:px-16 py-16 bg-white">
                    <div className="space-y-8 max-w-3xl">
                        <div className="text-sm font-medium text-gray-400 tracking-[0.2em] uppercase">ABOUT COMPANY</div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 leading-[1.1] font-sans">
                            50 Yılı Aşan Sektör Tecrübesi
                        </h2>
                        <div className="detailcontent">
                            <p className="textdetail ">
                                Yarım asrı aşkın tecrübesiyle modern ahşap mobilya tasarımı ve üretimi alanında faaliyet gösteren FNZ Mobilya,
                                satış öncesi sunduğu kaliteli hizmet anlayışını, satış sonrası müşteri memnuniyetiyle de sürdürülebilir kılmayı amaçlamaktadır.
                                Uzun yıllara dayanan bilgi birikimi ve deneyimiyle sektörde güvenilir bir marka olmayı başaran FNZ Mobilya,
                                müşteri odaklı yaklaşımıyla fark yaratmaya devam etmektedir.

                            </p>
                        </div>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-medium rounded-sm">
                            Daha Fazla Bilgi
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
