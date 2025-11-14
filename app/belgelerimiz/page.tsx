import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BelgelerimizPage() {
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
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Certificate 1 - Talat Mollaoğlu */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/talat-mollaoglu-certificate.png"
                alt="Talat Mollaoğlu - Kıbrıs Ada Kent Üniversitesi Katılım Belgesi"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Talat Mollaoğlu</h3>
              <p className="text-gray-600 text-sm">Kıbrıs Ada Kent Üniversitesi - Fitoterapi Eğitimi Katılım Belgesi</p>
            </div>
          </div>

          {/* Certificate 2 - Ahmet Murat Dığış */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ahmet-murat-digis-certificate.png"
                alt="Ahmet Murat Dığış - Global Cert & IATELS Fitoterapi Eğitimi Sertifikası"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ahmet Murat Dığış</h3>
              <p className="text-gray-600 text-sm">Global Cert & IATELS - Fitoterapi Eğitimi 120 Saat</p>
            </div>
          </div>

          {/* Certificate 3 - Ercan Demir - NeuroFormat */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ercan-demir-neuroformat.png"
                alt="Ercan Demir - NeuroFormat Katılım Belgesi"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ercan Demir</h3>
              <p className="text-gray-600 text-sm">NeuroFormat Bireysel Uygulamalar Seminerine Katılım Belgesi</p>
            </div>
          </div>

          {/* Certificate 4 - Ercan Demir - Şifa-i Nebevi */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ercan-demir-sifa-nebevi.png"
                alt="Ercan Demir - Şifa-i Nebevi Derneği Katılım Belgesi"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ercan Demir</h3>
              <p className="text-gray-600 text-sm">
                Şifa-i Nebevi Derneği - Geleneksel Şifacılık Bilgilendirme Semineri
              </p>
            </div>
          </div>

          {/* Certificate 5 - Ercan Demir - ACARET Reflexology */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ercan-demir-acaret.png"
                alt="Ercan Demir - ACARET Reflexology Sertifikası"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ercan Demir</h3>
              <p className="text-gray-600 text-sm">ACARET - Klinik Refleksoloji Eğitimi Sertifikası (120 Saat)</p>
            </div>
          </div>

          {/* Certificate 6 - Ercan Demir - Manuel & Dorn Therapy */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ercan-demir-manuel-dorn.jpeg"
                alt="Ercan Demir - Manuel Terapi ve Dorn Terapi Katılım Belgesi"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ercan Demir</h3>
              <p className="text-gray-600 text-sm">
                Tıbbi Nebevi - Manuel Terapi ve Dorn Terapi Eğitimi Katılım Belgesi
              </p>
            </div>
          </div>

          {/* Certificate 7 - Ercan Demir - Üsküdar Üniversitesi */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/ercan-demir-uskudar.png"
                alt="Ercan Demir - Üsküdar Üniversitesi Vaka Analizi Zirveleri Katılım Belgesi"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ercan Demir</h3>
              <p className="text-gray-600 text-sm">
                Üsküdar Üniversitesi - Vaka Analizi Zirveleri III (Travma) Katılım Belgesi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
