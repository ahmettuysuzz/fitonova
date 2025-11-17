"use client"

import { Phone } from 'lucide-react'
import { useTranslation } from "@/lib/i18n/translations"

export function CTASection() {
  const t = useTranslation()

  return (
    <section id="appointment" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t.ctaTitle}</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t.ctaSubtitle}</p>

          <div className="flex flex-col items-center gap-6">
            <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-emerald-100 shadow-sm">
                <div className="p-3 bg-primary rounded-full">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">{t.callUs}</p>
                  <a
                    href="tel:+905058692629"
                    className="text-xl md:text-2xl font-bold text-primary hover:underline whitespace-nowrap"
                  >
                    +90 505 869 26 29
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-emerald-100 shadow-sm">
                <div className="p-3 bg-primary rounded-full">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">{t.callUs}</p>
                  <a
                    href="tel:+902165158155"
                    className="text-xl md:text-2xl font-bold text-primary hover:underline whitespace-nowrap"
                  >
                    +90 216 515 81 55
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 max-w-md w-full bg-white rounded-2xl border-2 border-emerald-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">{t.workingHoursTitle}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-emerald-50">
                  <span className="text-sm font-medium text-muted-foreground">{t.weekdays}</span>
                  <span className="text-sm font-semibold">{t.weekdaysHours}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-emerald-50">
                  <span className="text-sm font-medium text-muted-foreground">{t.saturday}</span>
                  <span className="text-sm font-semibold">{t.saturdayHours}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-muted-foreground">{t.sunday}</span>
                  <span className="text-sm font-semibold text-primary">{t.sundayHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
