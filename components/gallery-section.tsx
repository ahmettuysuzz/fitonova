"use client"

import { useTranslation } from "@/lib/i18n/translations"
import Image from "next/image"

export function GallerySection() {
  const t = useTranslation()

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ventosaterapia%20%F0%9F%A4%8D%F0%9F%92%9A-F1o5SRgti4PUFnWF4Pk9R5pEKChX6e.jpg",
      alt: "Hacamat tedavisi - Cupping therapy",
      query: "cupping therapy traditional medicine",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PJ0foAZbkCKri8HYoq27KJerVZisRk.png",
      alt: "Solunum sistemi ve akciğer sağlığı",
      query: "respiratory system lungs health bronchial tree",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PFdToSbdABesKClEuLhVXYK7rIeWKD.png",
      alt: "Klinik danışma odası",
      query: "clinic consultation room",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SEUHl4c45UZIHmaPUn8TdTIy2JdEwB.png",
      alt: "Klinik tedavi odası",
      query: "clinic treatment room",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xnD2leRbTg8UARkn3xm8SbTLnJUyiJ.png",
      alt: "Sülük tedavisi - Leech therapy",
      query: "leech therapy hirudotherapy traditional medicine",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MtIqs6ahbN4GAWlrdta8cFZqaF0cOa.png",
      alt: "Sindirim sistemi sağlığı ve bağırsak mikrobiyomu",
      query: "digestive system gut health microbiome bacteria",
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
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
