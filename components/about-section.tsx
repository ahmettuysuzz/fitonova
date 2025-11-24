"use client"

import { useTranslation } from "@/lib/i18n/translations"

export function AboutSection() {
  const t = useTranslation()

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">{t.aboutTitle}</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{t.aboutText1}</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t.aboutText2}</p>

          {/* Values box - centered and full width */}
          <div className="relative group max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{t.valuesTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground leading-relaxed">{t.value1}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground leading-relaxed">{t.value2}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground leading-relaxed">{t.value3}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-primary flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground leading-relaxed">{t.value4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy, Mission, Vision cards in a row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Philosophy Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-primary mb-6">{t.philosophyTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.philosophyText}</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border-2 border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-green-700 mb-6">{t.missionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border-2 border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-blue-700 mb-6">{t.visionTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.visionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
