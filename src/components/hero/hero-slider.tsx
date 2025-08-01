'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Header } from '../navbar/navbar'

interface Slide {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
}

const slides: Slide[] = [
    {
        id: 1,
        title: 'Otel Odası Mobilyaları',
        subtitle: 'Fonozbart Ahşap Sanayi',
        description: 'Otel ve büyük ölçekli projelere özel üretim.',
        image: '/assets/images/sliders/hero7.jpg'
    },
    {
        id: 2,
        title: 'Mobilya Tefrişatı',
        subtitle: 'Fonozbart Ahşap Sanayi',
        description: 'Her aşamada uzmanlıkla ilerleyen inşaat çözümleri.',
        image: '/assets/images/sliders/hero3.jpg'
    },
    // {
    //     id: 3,
    //     title: 'Mobilya Tefrişatı',
    //     subtitle: 'Fonozbart Ahşap Sanayi',
    //     description: 'Otel ve büyük ölçekli projelere özel üretim.',
    //     image: '/assets/images/sliders/hero3.jpg'
    // },
    // {
    //     id: 4,
    //     title: 'Mobilya Tefrişatı',
    //     subtitle: 'Fonozbart Ahşap Sanayi',
    //     description: 'Otel ve büyük ölçekli projelere özel üretim.',
    //     image: '/assets/images/sliders/hero8.jpg'
    // }
]

export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setIsAutoPlaying(false)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <>
            <Header />

            <div className="relative h-screen w-full overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            layout="fill"
                            objectFit="cover" // Görselin tamamı görünür
                            priority
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" /> */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/30 to-transparent" />
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4"
                        >
                              <span className="text-orange-400 text-xl font-medium">
                                {slides[currentSlide].subtitle}
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-lg md:text-xl max-w-2xl text-gray-300 ">
                                {slides[currentSlide].description}
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 rounded-full text-white transition-colors"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false)
                                setCurrentSlide(index)
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-orange-500 w-8'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
