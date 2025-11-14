"use client"

import { useState, useEffect } from "react"
import { X, Cookie } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n/translations"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslation()

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-emerald-100 p-6 md:p-8">
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-emerald-600" />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.cookieBanner.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{t.cookieBanner.description}</p>
              <Link
                href="/kvkk-aydinlatma-metni"
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium inline-flex items-center gap-1 transition-colors"
              >
                {t.cookieBanner.learnMore}
                <span>→</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleReject}
                className="px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                {t.cookieBanner.rejectAll}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 whitespace-nowrap"
              >
                {t.cookieBanner.acceptAll}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
