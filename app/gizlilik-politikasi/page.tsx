import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Fitonova",
  description: "Fitonova Sağlık Hizmet Birimi gizlilik politikası ve kişisel verilerin korunması",
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">Gizlilik Politikası</h1>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <p className="text-gray-700 leading-relaxed">
              Fitonova Sağlık Hizmet Birimi olarak, web sitemizi ziyaret eden tüm kullanıcılarımızın gizliliğini
              korumayı taahhüt ediyoruz. Bu politika, kişisel verilerinizin nasıl toplandığını, işlendiğini ve
              korunduğunu açıklamaktadır.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">1.</span>
                Google Analytics Kullanımı
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Web sitemizin kullanımını analiz etmek ve performansını iyileştirmek amacıyla Google Analytics
                hizmetinden yararlanıyoruz. Google Analytics, ziyaretçi davranışlarını anlamak için gerekler (cookies)
                aracılığıyla anonim veriler toplar. Toplanan web sitesinin işleyişini ve kullanıcı deneyimini
                geliştirmek amacıyla kullanılmaktadır. Web sitesini kullanmaya devam ederek, verilerinizin Google
                Analytics tarafından işlenmesine Google'ın gizlilik politikası doğrultusunda onay vermiş olursunuz.
                Dilerseniz, Google Analytics Opt-out Browser Add-on eklentisini yükleyerek izlenmeyi devre dışı
                bırakabilirsiniz.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">2.</span>
                Kişisel Verilerin Korunması
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fitonova Sağlık Hizmet Birimi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) hükümlerine
                tam uyum içinde hareket ediyoruz. Bu kapsamda:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Kişisel verileriniz yalnızca belirli, açık ve meşru amaçlarla işlenmektedir.</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>
                    Yasal zorunluluklar veya hizmetin gereklilikleri dışında üçüncü kişilerle paylaşılmamaktadır.
                  </span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Kişisel verilerinizin güvenliği için teknik ve idari tedbirler alınmaktadır.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">3.</span>
                Bağlantılar (Linkler)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Web sitemiz, üçüncü taraf internet sitelerine veya sunuculara bağlantılar içerebilir. Bu sitelerin
                içeriklerinden ve gizlilik uygulamalarından Fitonova Sağlık Hizmet Birimi sorumlu değildir. Ziyaret
                ettiğiniz diğer sitelerin kendi gizlilik politikalarını incelemenizi tavsiye ederiz.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">4.</span>
                Gizlilik Politikasında Değişiklikler
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Bu gizlilik politikası, gerektiğinde yasal düzenlemelere veya hizmetlerimizdeki değişikliklere uygun
                olarak güncellenebilir. Güncel sürüm her zaman web sitemizde yayımlanacaktır.
              </p>
            </section>

            {/* Closing */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fitonova Sağlık Hizmet Birimi</h3>
              <p className="text-gray-700 leading-relaxed">
                Kişisel verilerinizin korunmasına ve gizliliğinizin sağlanmasına en yüksek düzeyde önem vermektedir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
