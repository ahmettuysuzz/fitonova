"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { useState } from "react"

interface Certificate {
  id: number
  image: string
  alt: string
  name: string
  description: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    image: "/images/talat-mollaoglu-certificate.png",
    alt: "Talat Mollaoğlu - Kıbrıs Ada Kent Üniversitesi Katılım Belgesi",
    name: "Talat Mollaoğlu",
    description: "Kıbrıs Ada Kent Üniversitesi - Fitoterapi Eğitimi Katılım Belgesi",
  },
  {
    id: 2,
    image: "/images/ahmet-murat-digis-certificate.png",
    alt: "Ahmet Murat Dığış - Global Cert & IATELS Fitoterapi Eğitimi Sertifikası",
    name: "Ahmet Murat Dığış",
    description: "Global Cert & IATELS - Fitoterapi Eğitimi 120 Saat",
  },
  {
    id: 3,
    image: "/images/ercan-demir-neuroformat.png",
    alt: "Ercan Demir - NeuroFormat Katılım Belgesi",
    name: "Ercan Demir",
    description: "NeuroFormat Bireysel Uygulamalar Seminerine Katılım Belgesi",
  },
  {
    id: 4,
    image: "/images/ercan-demir-sifa-nebevi.png",
    alt: "Ercan Demir - Şifa-nebevi Derneği Katılım Belgesi",
    name: "Ercan Demir",
    description: "Şifa-i Nebevi Derneği - Geleneksel Şifacılık Bilgilendirme Semineri",
  },
  {
    id: 5,
    image: "/images/ercan-demir-acaret.png",
    alt: "Ercan Demir - ACARET Reflexology Sertifikası",
    name: "Ercan Demir",
    description: "ACARET - Klinik Refleksoloji Eğitimi Sertifikası (120 Saat)",
  },
  {
    id: 6,
    image: "/images/ercan-demir-manuel-dorn.jpeg",
    alt: "Ercan Demir - Manuel Terapi ve Dorn Terapi Katılım Belgesi",
    name: "Ercan Demir",
    description: "Tıbbi Nebevi - Manuel Terapi ve Dorn Terapi Eğitimi Katılım Belgesi",
  },
  {
    id: 7,
    image: "/images/ercan-demir-uskudar.png",
    alt: "Ercan Demir - Üsküdar Üniversitesi Vaka Analizi Zirveleri Katılım Belgesi",
    name: "Ercan Demir",
    description: "Üsküdar Üniversitesi - Vaka Analizi Zirveleri III (Travma) Katılım Belgesi",
  },
]

export default function BelgelerimizPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Belgelerimiz</h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {certificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer text-left"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image src={cert.image || "/placeholder.svg"} alt={cert.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Kapat"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedCertificate.image || "/placeholder.svg"}
              alt={selectedCertificate.alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  )
}
