"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language, languageNames, languageFlags } from "@/lib/i18n/language-context"
import { Globe } from "lucide-react"
import Image from "next/image"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: Language[] = ["tr", "en", "ar", "de", "fr", "zh", "ja", "ru"]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className={language === lang ? "bg-accent" : ""}
          >
            <Image
              src={languageFlags[lang] || "/placeholder.svg"}
              alt={`${languageNames[lang]} flag`}
              width={20}
              height={15}
              className="mr-2 rounded-sm object-cover"
            />
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
