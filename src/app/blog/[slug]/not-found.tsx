import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileX } from "lucide-react"

export default function BlogPostNotFound() {
  return (
    <main className="min-h-screen bg-[#1e1e1f] flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-[#FF6B35]/20 to-[#E55A2B]/20 rounded-full flex items-center justify-center">
            <FileX className="w-16 h-16 text-[#FF6B35]" />
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Blog Yazısı Bulunamadı</h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir. Lütfen URL'yi kontrol edin veya diğer
            yazılarımıza göz atın.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl group"
              >
                <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Blog'a Dön
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-[#FF6B35]/30 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white bg-transparent px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Ana Sayfaya Git
              </Button>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 p-6 bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl border border-[#FF6B35]/10">
            <h3 className="text-lg font-semibold text-white mb-4">Öneriler</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">URL'yi Kontrol Edin</h4>
                  <p className="text-sm text-gray-300">Yazı adresinin doğru yazıldığından emin olun</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Arama Yapın</h4>
                  <p className="text-sm text-gray-300">Blog sayfasında arama özelliğini kullanın</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">Kategorilere Göz Atın</h4>
                  <p className="text-sm text-gray-300">İlginizi çekebilecek diğer yazıları keşfedin</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-white mb-1">İletişime Geçin</h4>
                  <p className="text-sm text-gray-300">Sorun devam ederse bizimle iletişime geçin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
