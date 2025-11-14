"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n/translations"
import { Award, Users } from "lucide-react"

export function DoctorsSection() {
  const t = useTranslation()

  return (
    <section id="doctor" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{t.doctorsTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t.doctorsSubtitle}</p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ahmet Murat Dığış */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1 min-h-[420px] flex flex-col max-w-xs mx-auto w-full">
              <div className="relative h-[180px] w-full bg-gray-50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PLqTkUMXxfpRSIUjnnunWWmSNztL5H.png"
                  alt={t.doctor2Name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-emerald-900 mb-1">{t.doctor2Name}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-sm">{t.doctor2Specialty}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.doctor2Bio}</p>
              </div>
            </div>

            {/* Ercan Demir */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1 min-h-[420px] flex flex-col max-w-xs mx-auto w-full">
              <div className="relative h-[180px] w-full bg-gray-50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rPSB2ty8rL8v4k5h8oRrv3dzBtfPbj.png"
                  alt={t.doctor5Name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-emerald-900 mb-1">{t.doctor5Name}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-sm">{t.doctor5Specialty}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.doctor5Bio}</p>
              </div>
            </div>

            {/* Serdar Erkal */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1 min-h-[420px] flex flex-col max-w-xs mx-auto w-full">
              <div className="relative h-[180px] w-full bg-gray-50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%2019.30.56-YEYyOpQF22fnTdRb2TTw3qEb3C5n9W.jpeg"
                  alt={t.doctor4Name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-emerald-900 mb-1">{t.doctor4Name}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-sm">{t.doctor4Specialty}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.doctor4Bio}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Talat Mollaoğlu */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100 hover:shadow-xl transition-all hover:-translate-y-1 min-h-[420px] flex flex-col max-w-xs w-full">
              <div className="relative h-[180px] w-full bg-gray-50">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AhjAn5yVwGJakTJZ8JrBpdKeXNEzMc.png"
                  alt={t.doctor1Name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-emerald-900 mb-1">{t.doctor1Name}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-sm">{t.doctor1Specialty}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <Users className="h-3 w-3" />
                    {t.doctor1Badge1}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <Award className="h-3 w-3" />
                    {t.doctor1Badge2}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.doctor1Bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
