import Link from "next/link"

export const metadata = {
  title: "KVKK Aydınlatma Metni - Fitonova",
  description: "Kişisel Verilerin Korunması Kanunu Aydınlatma Metni",
}

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Ana Sayfaya Dön
        </Link>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            KİŞİSEL VERİLERİN KORUNMASI KANUNU AYDINLATMA METNİ
          </h1>

          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Fitonova Sağlık Hizmet Birimi, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK"), Avrupa Birliği
              Genel Veri Koruma Tüzüğü ("GDPR") ve ilgili mevzuat kapsamında Veri Sorumlusu sıfatıyla, kişisel
              verilerinizi aşağıda belirtilen çerçevede işleyebilecektir.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">1.</span>
                KİŞİSEL VERİLERİN GİZLİLİĞİ
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Fitonova Sağlık Hizmet Birimi olarak internet sitemizi ziyaret etmenizden ve kurumumuzun sunduğu ürün ve
                hizmetlere gösterdiğiniz ilgiden büyük memnuniyet duyuyoruz. Web sitemizi ziyaretiniz ve site üzerinden
                gerçekleştirdiğiniz işlemler kapsamında bizimle kişisel verilerinizi paylaşabilirsiniz. Ziyaretiniz
                sırasında bize iletilen ve tarafımızca kaydedilen kişisel verileriniz, azami dikkat ve özen gösterilerek
                korunmakta, yürürlükteki veri güvenliği ve kişisel verilerin korunmasına ilişkin mevzuat çerçevesinde
                işlenmektedir. Web sitemiz, veri güvenliği beyanı bulunmayan farklı sunuculara veya üçüncü taraf
                internet sitelerine bağlantılar (linkler) içerebilir. Bu bağlantılara erişmeniz durumunda, ilgili
                sitelerin kendi gizlilik politikaları geçerli olacak olup, Fitonova Sağlık Hizmet Birimi bu sitelerin
                işleyiş veya uygulamalarından sorumlu değildir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">2.</span>
                KİŞİSEL VERİLERİN TOPLANMASI
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Şirketimizle paylaştığınız kişisel verileriniz, otomatik ya da otomatik olmayan yöntemlerle;
                ofislerimiz, acentelerimiz, şubelerimiz, çağrı merkezimiz, internet sitemiz, sosyal medya mecralarımız,
                SMS kanallarımız, mobil uygulamalarımız ve iş veya program ortaklarımız üzerinden; benzeri vasıtalarla
                sözlü, yazılı veya elektronik yollarla toplanabilir. Toplanan kişisel veriler, açık rızanız alınmadan
                sağlık bilgilerinizde işlenmekte, güvenlik kayıtları yaratılmakta ve aşağıda sıralanan amaçlarla
                kullanılmaktadır. Fitonova Sağlık Hizmet Birimi, kişisel verileri yalnızca fiziki kanallardan değil,
                aynı zamanda dijital platformlar aracılığıyla da toplayabilmektedir. Bu kapsamda:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kişisel veriler; dijital veya mobil cihazlar üzerinden; bilgisayarlar, yazılımlar, Fitonova adına
                internet sunucusu sunan veri kaynakları tarafından yönetilen sosyal medya hesapları gibi dijital
                ortamlardan da kişisel veriler elde edilebilmektedir. Toplanan veriler, yalnızca mevzuata uygun, belirli
                ve meşru amaçlar doğrultusunda işlenmekte; toplanan veriler, ifşaya veya kötüye kullanıma karşı gerekli
                teknik ve idari önlemler alınmaktadır. Fitonova Sağlık Hizmet Birimi'ne ait bina ve tesislerin
                girişlerinde, ortak kullanım alanlarında ve güvenlik gerektiren bölgelerde kamera ile izleme sistemi
                kullanılmaktadır. Bu kapsamda, ziyaretçilerin görüntü kayıtları güvenlik kameraları aracılığıyla
                alınmakta ve yalnızca aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Sunulan hizmetlerin güvenilirliğini ve kalitesini artırmak,</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Şirket, çalışan, hasta, ziyaretçi ve diğer kişilerin güvenliğini sağlamak,</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Olası güvenlik ihlallerini önlemek ve gerektiğinde delil niteliğinde kayıt oluşturmak,</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Şirket mülkiyetini, tesislerini ve hizmet alanlarını korumak.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Elde edilen görüntü kayıtları, yalnızca ilgili mevzuat çerçevesinde ve belirli, meşru amaçlarla
                kullanılmakta; yetkisiz kişilerin erişimine karşı korunmakta ve sadece yetkili kişi veya kurumlarla
                paylaşılmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-emerald-600">3.</span>
                ÇEREZ (COOKIE) KULLANIMI
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fitonova Sağlık Hizmet Birimi web sitesinde kullanıcı deneyimini geliştirmek, site performansını
                artırmak ve ziyaret istatistiklerini analiz etmek amacıyla çerezler (cookies) kullanılmaktadır.
                Çerezler, sunucu tarafından kaydedilen küçük veri dosyalarıdır. Bu dosyalar, siteyi yeniden ziyaret
                ettiğinizde tarayıcınızın sizi tanımasını sağlar ve siteyi daha verimli kullanmanıza yardımcı olur. Web
                sitemizde kullanılan çerezler genellikle şu amaçlarla kullanılmaktadır:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Sitenin temel işlevlerinin düzgün çalışmasını sağlamak,</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Ziyaretçi trafiğini ve sayfa etkileşimlerini anonim olarak analiz etmek,</span>
                </li>
                <li className="text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">•</span>
                  <span>Kullanıcı deneyimini geliştirmek ve hizmet kalitesini artırmak.</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Ziyaretçiler, tarayıcı ayarlarını değiştirerek çerezlerin kullanılmasını engelleyebilir veya mevcut
                çerezleri silebilir. Ancak çerezlerin devre dışı bırakılması, web sitesinin bazı işlevlerinin tam olarak
                çalışmamasına neden olabilir. Çerezler aracılığıyla toplanan hiçbir veri, kişisel kimlik bilgisi
                niteliğinde değildir ve üçüncü taraflarla paylaşılmamaktadır.
              </p>
            </section>

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
