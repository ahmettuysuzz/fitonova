"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language, languageNames, languageFlags } from "@/lib/i18n/language-context"
import { Globe } from 'lucide-react'
import Image from "next/image"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: Language[] = ["tr", "en", "ar", "de", "fr", "zh", "ja", "ru"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-green-100/50">
          <Globe className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Dil Seçin</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`cursor-pointer ${language === lang ? "bg-green-50 font-semibold" : ""}`}
          >
            <Image
              src={languageFlags[lang] || "/placeholder.svg"}
              alt={`${languageNames[lang]} flag`}
              width={24}
              height={16}
              className="mr-3 rounded-sm object-cover border border-gray-200"
            />
            <span>{languageNames[lang]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
