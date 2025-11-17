"use client"

import { Instagram, Youtube, Twitter, Linkedin, Phone, MapPin, Mail } from 'lucide-react'
import { useTranslation } from "@/lib/i18n/translations"
import Image from "next/image"

export function Footer() {
  const t = useTranslation()

  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-[300px_1fr_1fr] gap-0">
            {/* Left: Logo Section */}
            <div className="relative bg-gray-50 p-8 flex items-center justify-center min-h-[300px]">
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8MegL0uymJviOugvszUVTwaa58e3uF.png"
                    alt="Fitonova Sağlık Hizmet Birimi Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Middle: Contact Section */}
            <div className="bg-gray-50 p-6 md:p-12">
              <h4 className="text-gray-900 font-semibold mb-6 pb-2 border-b border-gray-200 text-lg">
                {t.footerContact}
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+905058692629"
                  className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                  <span>+90 505 869 26 29</span>
                </a>
                <a
                  href="tel:+902165158155"
                  className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                  <span>+90 216 515 81 55</span>
                </a>
                <a
                  href="mailto:info@fitonovasaglik.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 text-emerald-600" />
                  <span>info@fitonovasaglik.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600" />
                  <span className="break-words leading-relaxed">{t.footerAddressText}</span>
                </div>
              </div>
            </div>

            {/* Right: Legal Section */}
            <div className="bg-gray-50 p-6 md:p-12 border-l border-gray-200">
              <h4 className="text-gray-900 font-semibold mb-6 pb-2 border-b border-gray-200 text-lg">
                {t.footerLegal}
              </h4>
              <div className="space-y-4">
                <a href="/gizlilik-politikasi" className="block text-gray-700 hover:text-emerald-600 transition-colors">
                  {t.footerPrivacy}
                </a>
                <a
                  href="/kvkk-aydinlatma-metni"
                  className="block text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {t.footerKVKK}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom: Copyright and Social Media */}
          <div className="bg-gray-50 px-6 md:px-12 py-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">{t.footerCopyright}</p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
