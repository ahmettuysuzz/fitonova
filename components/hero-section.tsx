"use client"

import { useTranslation } from "@/lib/i18n/translations"
import Image from "next/image"
import { Check } from "lucide-react"

export function HeroSection() {
  const t = useTranslation()

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-700 bg-clip-text text-transparent">
            {t.heroTitle}
          </h1>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start mb-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/talat-mollaoglu.png"
                alt="Talat Mollaoğlu"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed text-muted-foreground">{t.heroParagraph1}</p>
              <p className="leading-relaxed text-muted-foreground">{t.heroParagraph2}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-emerald-700">{t.heroSectionTitle}</h2>

            <p className="leading-relaxed text-muted-foreground mb-4">{t.heroParagraph3}</p>

            <p className="leading-relaxed text-muted-foreground mb-4">{t.heroParagraph4}</p>

            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{t.heroListItem1}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{t.heroListItem2}</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{t.heroListItem3}</span>
              </li>
            </ul>

            <p className="leading-relaxed text-muted-foreground mt-6 italic">{t.heroParagraph5}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-emerald-700">
              {t.heroFitonovaTitle}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{t.heroFitonovaParagraph}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-emerald-700">{t.heroJourneyTitle}</h2>
            <p className="leading-relaxed text-muted-foreground mb-6">{t.heroJourneyParagraph}</p>
            <blockquote className="text-center py-6 px-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 rounded-r-lg">
              <p className="text-lg md:text-xl font-serif italic text-emerald-800 font-semibold">
                &ldquo;{t.heroJourneyQuote}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
