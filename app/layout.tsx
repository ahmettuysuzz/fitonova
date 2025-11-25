import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { CookieBanner } from "@/components/cookie-banner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fitonova - Doğadan Gelen Yeni Umut",
  description:
    "Fitonova Sağlık Hizmet Birimi - Kanser tedavisi sürecinde modern tıp ve fitoterapi desteği. Bütünsel sağlık yaklaşımıyla bağışıklık sistemini güçlendirme ve yaşam kalitesini artırma hizmetleri.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/fitonova-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fitonova Sağlık Hizmet Birimi",
              url: "https://fitonovasaglik.com",
              logo: "https://fitonovasaglik.com/fitonova-logo.png",
              description:
                "Modern tıbbın bilimsel gücünü doğanın yenileyici potansiyeliyle birleştiren bütünsel bir sağlık merkezidir.",
              sameAs: ["https://fitonovasaglik.com.tr"],
            }),
          }}
        />
        {/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9PJWZMWWB9"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9PJWZMWWB9');
    `,
  }}
/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
