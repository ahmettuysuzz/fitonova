"use client"

import { useTranslation } from "@/lib/i18n/translations"

export function ServicesSection() {
  const t = useTranslation()

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">{t.servicesTitle}</h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <span className="font-semibold">Fitonova</span>, {t.servicesIntro} {t.servicesGoal} {t.servicesDiseases}{" "}
              {t.servicesProtocols}
            </p>

            <ul className="space-y-4 pl-6">
              <li className="list-disc">{t.servicesBullet1}</li>
              <li className="list-disc">{t.servicesBullet2}</li>
              <li className="list-disc">{t.servicesBullet3}</li>
              <li className="list-disc">{t.servicesBullet4}</li>
              <li className="list-disc">{t.servicesBullet5}</li>
              <li className="list-disc">{t.servicesBullet6}</li>
              <li className="list-disc">{t.servicesBullet7}</li>
            </ul>

            <p>
              {t.servicesConclusion} {t.servicesApproach}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
