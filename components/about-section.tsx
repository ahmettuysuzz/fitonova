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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary">{t.philosophyTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.philosophyText}</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border-2 border-green-500/10 hover:border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700">{t.missionTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-background/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border-2 border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-700">{t.visionTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.visionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
