"use client"

import { useTranslation } from "@/lib/i18n/translations"

export function HeroSection() {
  const t = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50" />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hlmMlTdjFAXNTa1rc0UEmCJKIELFv7.png')",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center py-20">
          <div className="relative group">
            <div className="w-[28rem] h-[28rem] rounded-full overflow-hidden bg-gray-100 shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_80px_30px_rgba(16,185,129,0.3)]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8MegL0uymJviOugvszUVTwaa58e3uF.png"
                alt="Fitonova Klinik Logo"
                className="w-full h-full object-contain p-12 animate-in fade-in zoom-in duration-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
