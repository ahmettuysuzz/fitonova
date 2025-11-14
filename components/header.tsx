"use client"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "@/lib/i18n/translations"
import { useState } from "react"

export function Header() {
  const t = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-green-50/90 backdrop-blur-lg border-b border-green-200/50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <a
              href="#home"
              className="relative text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors group py-2"
            >
              {t.navHome}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="relative text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors group py-2"
            >
              {t.navAboutUs}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#services"
              className="relative text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors group py-2"
            >
              {t.navOurServices}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#doctor"
              className="relative text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors group py-2"
            >
              {t.navOurDoctor}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              className="relative text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors group py-2"
            >
              {t.navGallery}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              asChild
              className="hidden sm:flex rounded-full bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all"
            >
              <a href="#appointment">{t.makeAppointment}</a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-green-700 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-green-200/50">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors py-2"
              >
                {t.navHome}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors py-2"
              >
                {t.navAboutUs}
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors py-2"
              >
                {t.navOurServices}
              </a>
              <a
                href="#doctor"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors py-2"
              >
                {t.navOurDoctor}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 hover:text-green-700 transition-colors py-2"
              >
                {t.navGallery}
              </a>
              <Button
                asChild
                className="sm:hidden rounded-full bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg transition-all mt-2"
              >
                <a href="#appointment" onClick={() => setMobileMenuOpen(false)}>
                  {t.makeAppointment}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
