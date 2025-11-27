"use client"

import { useTranslation } from "@/lib/i18n/translations"
import Image from "next/image"

export function GallerySection() {
  const t = useTranslation()

  const galleryImages = [
    {
      src: "/images/hacamat-yap.jpg",
      alt: "Hacamat tedavisi - Cupping therapy",
      objectFit: "contain" as const,
    },
    {
      src: "/images/hacamat2.jpg",
      alt: "Hacamat tedavisi - Cupping therapy session",
      objectFit: "contain" as const,
    },
    {
      src: "/images/hacamat3.jpeg",
      alt: "Hacamat tedavisi - Bacak tedavisi",
      objectFit: "contain" as const,
    },
    {
      src: "/images/suluk1.jpg",
      alt: "Sülük tedavisi - Leech therapy",
      objectFit: "contain" as const,
    },
    {
      src: "/images/suluk2.jpg",
      alt: "Sülük tedavisi - Karın bölgesi tedavisi",
      objectFit: "contain" as const,
    },
    {
      src: "/images/hacamat5.jpg",
      alt: "Hacamat tedavisi - Sırt bölgesi tedavisi",
      objectFit: "contain" as const,
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{t.galleryTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t.gallerySubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className={`${image.objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
