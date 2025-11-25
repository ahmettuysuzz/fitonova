"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"
// </CHANGE>

const slides = [
  {
    image: "/images/cancer-types.jpg",
    title: "Kanserle Mücadelede Doğanın İyileştirici Formülü",
    alt: "Kanser Türleri",
  },
  {
    image: "/images/psoriasis-legs.jpg",
    title: "Sedef Çok Olabilir, Çare Doğada Tek",
    alt: "Sedef Tedavisi",
  },
  {
    image: "/images/cupping-therapy.jpg",
    title: "Doğanın En Eski Şifası, Modern Yaşamın İhtiyacı",
    alt: "Hacamat Tedavisi",
  },
  {
    image: "/images/leech-therapy.jpg",
    title: "Sülük Tedavisi: İyileştiren Mikro Mucize",
    alt: "Sülük Tedavisi",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]

  const slides = [
    {
      image: "/images/cancer-types.jpg",
      title: t.heroSlide1Title,
      alt: t.heroSlide1Alt,
    },
    {
      image: "/images/psoriasis-legs.jpg",
      title: t.heroSlide2Title,
      alt: t.heroSlide2Alt,
    },
    {
      image: "/images/cupping-therapy.jpg",
      title: t.heroSlide3Title,
      alt: t.heroSlide3Alt,
    },
    {
      image: "/images/leech-therapy.jpg",
      title: t.heroSlide4Title,
      alt: t.heroSlide4Alt,
    },
  ]
  // </CHANGE>

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto relative">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Image Section */}
              <div className="relative h-[400px] md:h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Text Section */}
              <div className="px-8 py-12 md:py-0">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-emerald-900 leading-tight">
                      {slide.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-800" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-emerald-800" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-emerald-600 w-12" : "bg-emerald-300 w-3 hover:bg-emerald-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
