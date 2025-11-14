"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "tr" | "en" | "ar" | "de" | "fr" | "zh" | "ja" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const languageNames: Record<Language, string> = {
  tr: "Türkçe",
  en: "English",
  ar: "العربية",
  de: "Deutsch",
  fr: "Français",
  zh: "中文",
  ja: "日本語",
  ru: "Русский",
}

export const languageFlags: Record<Language, string> = {
  tr: "/flags/tr.jpg",
  en: "/flags/en.jpg",
  ar: "/flags/ar.jpg",
  de: "/flags/de.jpg",
  fr: "/flags/fr.jpg",
  zh: "/flags/zh.jpg",
  ja: "/flags/ja.jpg",
  ru: "/flags/ru.jpg",
}
