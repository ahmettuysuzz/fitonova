"use client"

import { useTranslation } from "@/lib/i18n/translations"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export function TestimonialsSection() {
  const t = useTranslation()
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const testimonialImages = [
    {
      src: "/images/once-sonra-skin.png",
      alt: "Cilt tedavisi önce sonra",
    },
    {
      src: "/images/sac_tedavi.png",
      alt: "Saç tedavisi önce sonra",
    },
    {
      src: "/images/kulak_tedavi.png",
      alt: "Kulak tedavisi önce sonra",
    },
    {
      src: "/images/topuk_tedavi.png",
      alt: "Topuk tedavisi önce sonra",
    },
    {
      src: "/images/el_tedavi.png",
      alt: "El tedavisi önce sonra",
    },
    {
      src: "/images/bacak_tedavi.png",
      alt: "Bacak tedavisi önce sonra",
    },
    {
      src: "/images/ayak_tedavi.png",
      alt: "Ayak tedavisi önce sonra",
    },
    {
      src: "/images/ayak_alt_tedavi.png",
      alt: "Ayak altı tedavisi önce sonra",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.testimonialsTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[2/1] overflow-hidden rounded-lg bg-muted hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </section>
  )
}
