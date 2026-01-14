"use client"
import { useLanguage } from "./language-context"

const translations = {
  tr: {
    // Header
    brandName: "Canlılık",
    navServices: "Hizmetler",
    navAbout: "Hakkında",
    navContact: "İletişim",
    getStarted: "Başlayın",
    navHome: "Ana Sayfa",
    navAboutUs: "Hakkımızda",
    navOurServices: "Hizmetlerimiz",
    navOurDoctor: "Ekibimiz",
    navGallery: "Galeri",
    navAppointment: "Randevu Al",
    makeAppointment: "Randevu Al",
    navDocuments: "Belgelerimiz",

    // Hero
    heroTitle: "Bir Yolculuğun Adı: Talat Mollaoğlu",
    heroSlide1Title: "Kanserle Mücadelede Doğanın İyileştirici Formülü",
    heroSlide1Alt: "Kanser Türleri",
    heroSlide2Title: "Sedef Çok Olabilir, Çare Doğada Tek",
    heroSlide2Alt: "Sedef Tedavisi",
    heroSlide3Title: "Doğanın En Eski Şifası, Modern Yaşamın İhtiyacı",
    heroSlide3Alt: "Hacamat Tedavisi",
    heroSlide4Title: "Sülük Tedavisi: İyileştiren Mikro Mucize",
    heroSlide4Alt: "Sülük Tedavisi",
    heroSlide5Title: "Bilimin ve Keşfin Adı: Talat Mollaoğlu",
    heroSlide5Alt: "Talat Mollaoğlu",
    // </CHANGE>
    learnMoreButton: "Daha Fazla Bilgi",
    backToHome: "Ana Sayfaya Dön",
    cancerTreatmentTitle: "Kanser Tedavisi",
    cancerTreatmentIntro:
      "Kanser; vücuttaki hücrelerin kontrolsüz çoğalması ile gelişen, her bireyde farklı seyreden karmaşık bir hastalıktır. Bu yolculuk, fiziksel olduğu kadar duygusal ve psikolojik boyutlar da içerir. Bu nedenle tedavi sürecine yalnızca hastalık odaklı değil, insanı merkeze alan bütüncül bir yaklaşımla bakmak önemlidir.",
    cancerFitonovaTitle: "Fitonova'da Kanser Yaklaşımı",
    cancerFitonovaApproach:
      "Fitonova, modern tıp tedavilerini reddetmez. Aksine, onların gücünü doğanın tamamlayıcı potansiyeliyle desteklemeyi hedefler. Bilimsel çalışmalarda yer alan bitkisel aktif maddeler, bağışıklık sistemini güçlendiren doğal bileşenler ve metabolik dengeyi destekleyici protokoller, uzman değerlendirmesiyle kişiye özel uygulanır.",
    // </CHANGE>
    cancerHerbalSupportTitle: "Kanser Tedavisinde Bitkisel Destek Neler Sağlar?",
    cancerHerbalBenefit1: "Bağışıklığı güçlendirmeye yardımcı olabilir",
    cancerHerbalBenefit2:
      "Tedavinin yan etkilerinden kaynaklanan halsizlik, iştahsızlık ve uyku bozukluklarının giderilmesini destekleyebilir",
    cancerHerbalBenefit3: "Hücresel savunmayı artırmaya katkıda bulunabilir",
    cancerHerbalBenefit4: "Tedavi sürecinde fiziksel ve zihinsel dayanıklılığı güçlendirebilir",
    cancerHerbalConclusion:
      "Bu yaklaşımın temel hedefi; kişinin yaşam kalitesini koruyarak iyileşme sürecini desteklemektir.",
    cancerSpiritualTitle: "Manevi ve Psikolojik Destek",
    cancerSpiritualIntro:
      "Kanser sadece bedensel bir hastalık değildir. Bu süreç; umut, korku, güç, yorgunluk ve yeniden doğuş arasında gidip gelen bir insani yolculuktur. Bu yüzden Fitonova'da:",
    cancerSpiritualBenefit1: "Hastanın duygusal gücünü korumaya yönelik danışmanlık",
    cancerSpiritualBenefit2: "Tedavi sürecinde motivasyonu artıran destek programları",
    cancerSpiritualBenefit3: "Aile ve çevreye yönelik bilgilendirme",
    cancerSpiritualBenefit4: "Moral ve iyileşme isteğini güçlendiren yaklaşım",
    cancerSpiritualConclusion: "uygulanır. Çünkü bizce her hasta bir dosya değil; bir hikâyedir.",
    psoriasisTitle: "Sedef Hastalığını Anlamak",
    psoriasisIntro:
      "Sedef (Psoriasis), bağışıklık sisteminin aşırı tepki vermesi sonucu cilt hücrelerinin normalden çok daha hızlı çoğalmasıyla ortaya çıkan kronik bir cilt hastalığıdır. Klasik olarak deride kızarıklık, pullanma ve kaşıntı ile kendini gösterse de yalnızca deriyi değil; kişinin psikolojisini, sosyal yaşamını ve özgüvenini de etkileyebilen çok boyutlu bir tablodur. Bu nedenle tedavi sürecine sadece cilt yüzeyinden değil, vücudun denge mekanizmalarından yaklaşmak önemlidir.",
    psoriasisFitonovaTitle: "Fitonova'da Sedef Yaklaşımı",
    psoriasisFitonovaIntro:
      "Sedef, yalnızca cilt üzerinde görünen bir hastalık değildir; bağışıklık sistemi, stres, beslenme, hormonal denge ve yaşamsal faktörler bu tablonun şekillenmesinde önemli rol oynar. Fitonova'da amaç, sorunu bastırmak değil; vücudu dengelemeyi desteklemektir. Yaklaşımımız şu prensiplere dayanır:",
    psoriasisFitonovaBenefit1: "Bağışıklık sisteminin düzenlenmesine yardımcı doğal destekler",
    psoriasisFitonovaBenefit2: "Hücresel iltihabi yanıtın dengelenmesini hedefleyen bitkisel bileşenler",
    psoriasisFitonovaBenefit3: "Cilt bariyerini destekleyici ve yenilenmeyi teşvik eden doğal içerikler",
    psoriasisFitonovaBenefit4: "Sedefi tetikleyen faktörlerin kişiye özel belirlenmesi",
    psoriasisFitonovaBenefit5: "Sürdürülebilir yaşam kalitesi",
    psoriasisFitonovaConclusion:
      "Fitonova, modern tıp tedavilerini reddetmez — onları tamamlayıcı, destekleyici ve güçlendirici bir rol üstlenir.",
    // </CHANGE>
    heroSubtitle: "Bedeninizi, zihninizi ve ruhunuzu besleyen bütünsel bir sağlık yaklaşımını keşfedin",
    startJourney: "Yolculuğunuza Başlayın",
    learnMore: "Daha Fazla Bilgi",

    // About
    aboutTitle: "Hakkımızda",
    aboutText1:
      "Fitonova, modern tıbbın bilimsel gücünü doğanın yenileyici potansiyeliyle birleştiren bütünsel bir sağlık merkezidir. Amacımız yalnızca hastalığı geçici olarak baskılamak değil; nedenlerini ortadan kaldırarak kalıcı ve kesin çözüme ulaşmaktır. Her bireyin beden, zihin ve ruh bütünlüğünü yeniden kurmayı, sağlığı sürdürülebilir hale getirmeyi hedefliyoruz.\n\nAlanında uzman hekimlerimiz, onkoloji başta olmak üzere birçok hastalık grubunda bilimsel teşhis ve tedavi yöntemlerini, bitkisel ve doğal protokollerle bir araya getirir. Bu yaklaşım, hücresel düzeyde iyileşmeyi destekleyen, vücudun kendi savunma sistemini yeniden aktive eden entegre bir tedavi modeli sunar.",
    aboutText2:
      "Her hastamız için kişiye özel bir tedavi planı oluşturulur; bu plan laboratuvar sonuçları, yaşam alışkanlıkları ve hastalık geçmişi dikkate alınarak titizlikle hazırlanır. Tedavi süreci, bilimsel analizler ve düzenli değerlendirmeler ile yakından takip edilir; böylece hastalığın tekrarlama riski en aza indirilir ve kalıcı iyileşme hedeflenir.\n\nFitonova'da amaç yalnızca tedavi etmek değil, iyileşmeyi kesinleştirmek ve bireyin yaşam kalitesini en yüksek düzeye taşımaktır.",
    valuesTitle: "Değerlerimiz",
    value1: "Etik, güvenilir ve şeffaf hizmet anlayışı",
    value2: "Bilimsel bilgi ile doğanın gücünü harmanlamak",
    value3: "Kişiye özel ve bütüncül tedavi yaklaşımı",
    value4: "Sürekli gelişim ve hasta memnuniyeti odaklı çalışma",
    philosophyTitle: "Felsefemiz",
    philosophyText:
      "Biz, doğanın sunduğu imkanların modern tıp ile birleştiğinde daha etkili sonuçlar vereceğine inanıyoruz. Bu nedenle her tedavi sürecimiz; kanıta dayalı tıp ilkelerine uygun olarak, güvenli ve etik standartlarda yürütülür.",
    missionTitle: "Misyonumuz",
    missionText:
      "Hastalarımıza en yüksek yaşam kalitesini sunmak, modern tıbbın verilerini ve doğal tedavi yaklaşımlarını bir araya getirerek umut veren çözümler üretmek.",
    visionTitle: "Vizyonumuz",
    visionText:
      "Doğal ve bilimsel yöntemleri bir arada kullanan yenilikçi tedavi modelleriyle, ulusal ve uluslararası düzeyde örnek gösterilen bir sağlık merkezi olmak.",

    // Services
    servicesTitle: "Tedavi Ettiğimiz Hastalıklar",
    servicesIntro:
      "modern tıbbın tanı gücünü doğanın yenileyici enerjisiyle birleştirerek, birçok hastalıkta kalıcı ve kesin çözümler sunar.",
    servicesGoal:
      "Amacımız sadece belirtileri hafifletmek değil, hastalığın kök nedenini ortadan kaldırarak vücudu yeniden dengeye kavuşturmaktır.",
    servicesDiseases:
      "Alanında uzman hekimlerimiz; onkoloji (tüm kanser türleri) başta olmak üzere, egzama, sedef, kangren, beyin tümörü, kronik ağrılar, hormonal dengesizlikler, kısırlık (infertilite) gibi çok farklı hastalık gruplarında kapsamlı tedavi programları uygulamaktadır.",
    servicesProtocols:
      "Her hastalığa özel kişisel tedavi protokolleri, bilimsel analizlerle belirlenir; hücresel yenilenmeyi destekleyen bitkisel bileşenler ve modern tıbbın kanıta dayalı yöntemleriyle birlikte uygulanır.",
    servicesBullet1:
      "Kanser tedavilerinde; bağışıklık sistemini yeniden güçlendiren, tümör gelişimini durduran ve iyileşme sürecini hızlandıran özgün protokoller kullanılır.",
    servicesBullet2:
      "Cilt hastalıklarında (sedef, egzama); vücudun toksin yükünü azaltan, hücre yenilenmesini destekleyen bitkisel içerikler ile kalıcı çözümler sağlanır.",
    servicesBullet3:
      "Dolaşım bozuklukları ve kangren gibi ileri durumlarda, doku onarımını artıran özel formülasyonlar sayesinde kaybedilen bölgelerde yeniden canlanma hedeflenir.",
    servicesBullet4:
      "Kısırlık (infertilite) tedavisinde, hormonal dengeyi doğal yollarla düzenleyen ve üreme fonksiyonlarını yeniden aktive eden tamamlayıcı uygulamalar kullanılır.",
    servicesBullet5:
      "Bel, boyun ve eklem ağrıları için sinir ve kas dokularını onaran, iltihaplanmayı azaltan doğal terapi yöntemleriyle kesin çözüme ulaşılır.",
    servicesBullet6:
      "Hacamat (kupa terapisi) ile vücuttaki toksinler atılır, kan dolaşımı hızlanır ve genel detoks etkisi sağlanır.",
    servicesBullet7:
      "Sülük tedavisi (hirudoterapi) ile dolaşım sisteminin dengelenmesi, ağrıların azaltılması ve damar sağlığının desteklenmesi hedeflenir.",
    servicesConclusion:
      "Fitonova'da her hastalık yalnızca tıbbi bir durum değil, yeniden sağlık kazanma yolculuğunun başlangıcı olarak görülür.",
    servicesApproach:
      "Biz, her hastamız için bu yolculuğu bilimsel, doğal ve kesin sonuç odaklı bir yaklaşımla yönetiyoruz.",

    // Doctors
    doctorsTitle: "Ekip Arkadaşlarımız",
    doctorsSubtitle: "Sağlığınıza ve zindeliğinize adanmış uzman fitoterapi uzmanları",
    doctor1Name: "Talat Mollaoğlu",
    doctor1Specialty: "Asistant",
    doctor1Badge1: "30+ Yıl",
    doctor1Badge2: "Çok Sayıda Başarı",
    doctor1Bio:
      "Fitoterapi ve bitkisel tedavi alanında 30 yılı aşkın deneyime sahip. Kliniğimizin kurucusu ve tedavi yöntemlerinin mimarı olarak binlerce hastaya umut ve sağlık getirmiştir.",
    doctor2Name: "Ahmet Murat Dığış",
    doctor2Specialty: "Eczacı Farmakolog",
    doctor2Bio:
      "İlaç-bitki etkileşimleri ve farmakoterapötik yaklaşımlar konusunda uzman. Hastaların tedavi süreçlerinde güvenli ve etkili ilaç kullanımını sağlamak için çalışmaktadır.",
    doctor3Name: "Aleyna Zeynep Tuhan",
    doctor3Specialty: "Hemşire",
    doctor3Bio:
      "Hasta bakımı ve tedavi süreçlerinin yönetiminde uzman hemşire. Hastaların konforunu ve iyileşme süreçlerini yakından takip ederek, tedavi ekibinin vazgeçilmez bir parçası olarak görev yapmaktadır.",
    doctor4Name: "Serdar Erkal",
    doctor4Specialty: "Tıbbi Biyokimya Uzmanı",
    doctor4Bio:
      "Tıbbi biyokimya ve laboratuvar tanı yöntemleri konusunda uzman. Hastalıkların biyokimyasal teşhisi ve tedavi süreçlerinin bilimsel analizlerle desteklenmesi için çalışmaktadır.",
    doctor5Name: "Ercan Demir",
    doctor5Specialty: "Hacamat, Sülük ve Masaj Uzmanı",
    doctor5Bio:
      "Hacamat (kupa terapisi), sülük tedavisi (hirudoterapi) ve terapötik masaj alanlarında uzman. Geleneksel tedavi yöntemlerini modern tıbbi yaklaşımlarla birleştirerek hastaların ağrı yönetimi, dolaşım problemleri ve genel sağlık durumlarını iyileştirmek için çalışmaktadır.",

    // Gallery
    galleryTitle: "Galerimiz",
    gallerySubtitle: "Topluluğumuzdan sağlık, dönüşüm ve sağlıklı yaşam anlarını keşfedin",

    // Testimonials
    testimonialsTitle: "Mucizevi Dokunuşlar",
    // </CHANGE>

    // CTA
    ctaTitle: "Randevu Almaya Hazır mısınız?",
    ctaSubtitle: "Fitoterapi uzmanlarımızla danışma randevunuzu planlamak için bizi arayın.",
    callUs: "Bizi arayın:",
    workingHoursTitle: "Çalışma Saatlerimiz",
    weekdays: "Hafta İçi",
    saturday: "Cumartesi",
    sunday: "Pazar",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "Esnek Saat Tedavisi",

    // Footer
    footerTagline: "Bütünsel sağlık ve zindelikte güvenilir ortağınız.",
    footerAddress: "Adres",
    footerAddressText: "Murat Reis Mah. Nuhkuyu Cad. No:255/2 Bağlarbaşı/Üsküdar",
    footerContact: "İletişim",
    footerSocialMedia: "Sosyal Medya",
    footerCopyright: "© 2025 Fitonova Sağlık Hizmet Birimi. Tüm hakları saklıdır.",
    footerLegal: "Yasal Metinler ve Politikalar",
    footerPrivacy: "Gizlilik Politikası", // Added missing footer link translations
    footerTerms: "Belgelerimiz", // Added missing footer link translations
    footerKVKK: "KVKK Aydınlatma Metni", // Added missing footer link translations
    cookieBanner: {
      title: "Çerez Kullanımı",
      description:
        "Web sitemizde deneyiminizi geliştirmek ve analiz yapmak için çerezler kullanıyoruz. Devam ederek çerez kullanımını kabul etmiş olursunuz.",
      acceptAll: "Tümünü Kabul Et",
      rejectAll: "Reddet",
      learnMore: "Daha Fazla Bilgi",
    },
  },
  en: {
    // Header
    brandName: "Vitality",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    getStarted: "Get Started",
    navHome: "Home",
    navAboutUs: "About Us",
    navOurServices: "Our Services",
    navOurDoctor: "Our Team",
    navGallery: "Gallery",
    navAppointment: "Book Appointment",
    makeAppointment: "Book Appointment",
    navDocuments: "Our Documents", // Added documents menu link

    // Hero
    heroTitle: "A Journey Named: Talat Mollaoğlu",
    heroSlide1Title: "Nature's Healing Formula in the Fight Against Cancer",
    heroSlide1Alt: "Cancer Types",
    heroSlide2Title: "Psoriasis May Be Many, Nature's Cure Is One",
    heroSlide2Alt: "Psoriasis Treatment",
    heroSlide3Title: "Nature's Ancient Remedy, Modern Life's Necessity",
    heroSlide3Alt: "Cupping Therapy",
    heroSlide4Title: "Leech Therapy: The Healing Micro Miracle",
    heroSlide4Alt: "Leech Therapy",
    heroSlide5Title: "The Name of Science and Discovery: Talat Mollaoğlu",
    heroSlide5Alt: "Talat Mollaoğlu",
    // </CHANGE>
    learnMoreButton: "Learn More",
    backToHome: "Back to Home",
    cancerTreatmentTitle: "Cancer Treatment",
    cancerTreatmentIntro:
      "Cancer is a complex disease that develops through the uncontrolled proliferation of cells in the body, with a different course in each individual. This journey includes emotional and psychological dimensions as well as physical ones. Therefore, it is important to approach the treatment process not only with a disease-focused perspective, but with a holistic approach that puts the person at the center.",
    cancerFitonovaTitle: "Fitonova's Approach to Cancer",
    cancerFitonovaApproach:
      "Fitonova does not reject modern medical treatments. On the contrary, it aims to support their power with the complementary potential of nature. Herbal active ingredients that are part of scientific studies, natural components that strengthen the immune system, and protocols that support metabolic balance are applied individually after expert evaluation.",
    // </CHANGE>
    cancerHerbalSupportTitle: "What Does Herbal Support Provide in Cancer Treatment?",
    cancerHerbalBenefit1: "Can help strengthen immunity",
    cancerHerbalBenefit2:
      "Can support the alleviation of weakness, loss of appetite and sleep disorders caused by side effects of treatment",
    cancerHerbalBenefit3: "Can contribute to increasing cellular defense",
    cancerHerbalBenefit4: "Can strengthen physical and mental resilience during the treatment process",
    cancerHerbalConclusion:
      "The main goal of this approach is to support the healing process while maintaining the person's quality of life.",
    cancerSpiritualTitle: "Spiritual and Psychological Support",
    cancerSpiritualIntro:
      "Cancer is not just a physical illness. This process is a human journey that fluctuates between hope, fear, strength, fatigue, and rebirth. That's why in Fitonova:",
    cancerSpiritualBenefit1: "Counseling aimed at preserving the patient's emotional strength",
    cancerSpiritualBenefit2: "Support programs that increase motivation during the treatment process",
    cancerSpiritualBenefit3: "Information for family and environment",
    cancerSpiritualBenefit4: "An approach that strengthens morale and the will to heal",
    cancerSpiritualConclusion: "is applied. Because in our opinion, every patient is not a file; but a story.",
    psoriasisTitle: "Understanding Psoriasis",
    psoriasisIntro:
      "Psoriasis is a chronic skin disease caused by the immune system overreacting, leading to skin cells multiplying much faster than normal. While classically characterized by redness, scaling, and itching of the skin, it is a multifaceted condition that can affect not only the skin but also a person's psychology, social life, and self-confidence. Therefore, it is important to approach the treatment process not just from the skin's surface, but from the body's balance mechanisms.",
    psoriasisFitonovaTitle: "Fitonova's Approach to Psoriasis",
    psoriasisFitonovaIntro:
      "Psoriasis is not just a skin condition; the immune system, stress, diet, hormonal balance, and vital factors play a significant role in shaping this condition. At Fitonova, the aim is not to suppress the problem, but to support the body's balance. Our approach is based on the following principles:",
    psoriasisFitonovaBenefit1: "Natural supports to help regulate the immune system",
    psoriasisFitonovaBenefit2: "Herbal components targeting the balance of cellular inflammatory response",
    psoriasisFitonovaBenefit3: "Natural ingredients that support the skin barrier and promote regeneration",
    psoriasisFitonovaBenefit4: "Personalized identification of factors triggering psoriasis",
    psoriasisFitonovaBenefit5: "Sustainable quality of life",
    psoriasisFitonovaConclusion:
      "Fitonova does not reject modern medical treatments—it takes a complementary, supportive, and strengthening role.",
    // </CHANGE>
    heroSubtitle: "Discover a holistic approach to health that nourishes your body, mind, and spirit",
    startJourney: "Start Your Journey",
    learnMore: "Learn More",

    // About
    aboutTitle: "About Us",
    aboutText1:
      "Fitonova is a holistic health center that combines the scientific power of modern medicine with the regenerative potential of nature. Our goal is not just to temporarily suppress the disease, but to achieve a permanent and definitive solution by eliminating its causes. We aim to rebuild the body, mind, and spirit integrity of each individual and make health sustainable.\n\nOur specialist physicians combine scientific diagnosis and treatment methods with herbal and natural protocols in many disease groups, primarily oncology. This approach offers an integrated treatment model that supports healing at the cellular level and reactivates the body's own defense system.",
    aboutText2:
      "A personalized treatment plan is created for each of our patients; this plan is carefully prepared taking into account laboratory results, lifestyle habits, and medical history. The treatment process is closely monitored with scientific analyses and regular evaluations; thus, the risk of disease recurrence is minimized and permanent healing is targeted.\n\nAt Fitonova, the goal is not only to treat, but to ensure healing and elevate the individual's quality of life to the highest level.",
    valuesTitle: "Our Values",
    value1: "Ethical, reliable, and transparent service approach",
    value2: "Blending scientific knowledge with the power of nature",
    value3: "Personalized and holistic treatment approach",
    value4: "Continuous development and patient satisfaction-focused work",
    philosophyTitle: "Our Philosophy",
    philosophyText:
      "We believe that the opportunities offered by nature will produce more effective results when combined with modern medicine. Therefore, each of our treatment processes is conducted in accordance with evidence-based medical principles, in safe and ethical standards.",
    missionTitle: "Our Mission",
    missionText:
      "To offer our patients the highest quality of life, to produce hopeful solutions by bringing together modern medical data and natural treatment approaches.",
    visionTitle: "Our Vision",
    visionText:
      "To become a health center that is exemplary at national and international levels with innovative treatment models that use natural and scientific methods together.",

    // Services
    servicesTitle: "Diseases We Treat",
    servicesIntro:
      "combines the diagnostic power of modern medicine with the regenerative energy of nature to provide permanent and definitive solutions for many diseases.",
    servicesGoal:
      "Our goal is not just to alleviate symptoms, but to eliminate the root cause of the disease and restore the body to balance.",
    servicesDiseases:
      "Our specialist physicians implement comprehensive treatment programs in various disease groups, primarily oncology (all types of cancer), as well as eczema, psoriasis, gangrene, brain tumors, chronic pain, hormonal imbalances, and infertility.",
    servicesProtocols:
      "Personalized treatment protocols for each disease are determined through scientific analysis and applied together with herbal components that support cellular renewal and evidence-based methods of modern medicine.",
    servicesBullet1:
      "In cancer treatments, unique protocols are used that strengthen the immune system, stop tumor development, and accelerate the healing process.",
    servicesBullet2:
      "For skin diseases (psoriasis, eczema), permanent solutions are provided with herbal ingredients that reduce the body's toxin load and support cell renewal.",
    servicesBullet3:
      "In advanced conditions such as circulatory disorders and gangrene, special formulations that increase tissue repair aim to revitalize lost areas.",
    servicesBullet4:
      "In infertility treatment, complementary applications are used that naturally regulate hormonal balance and reactivate reproductive functions.",
    servicesBullet5:
      "For back, neck, and joint pain, definitive solutions are achieved through natural therapy methods that repair nerve and muscle tissues and reduce inflammation.",
    servicesBullet6:
      "Cupping therapy removes toxins from the body, accelerates blood circulation, and provides a general detox effect.",
    servicesBullet7:
      "Leech therapy (hirudotherapy) aims to balance the circulatory system, reduce pain, and support vascular health.",
    servicesConclusion:
      "At Fitonova, every disease is seen not just as a medical condition, but as the beginning of a journey to regain health.",
    servicesApproach:
      "We manage this journey for each of our patients with a scientific, natural, and result-oriented approach.",

    // Doctors
    doctorsTitle: "Our Team Members",
    doctorsSubtitle: "Expert phytotherapy specialists dedicated to your health and wellness",
    doctor1Name: "Talat Mollaoğlu",
    doctor1Specialty: "Assistant",
    doctor1Badge1: "30+ Years",
    doctor1Badge2: "Numerous Successes",
    doctor1Bio:
      "With over 30 years of experience in phytotherapy and herbal treatment. As the founder of our clinic and architect of treatment methods, he has brought hope and health to thousands of patients.",
    doctor2Name: "Ahmet Murat Dığış",
    doctor2Specialty: "Pharmacist Pharmacologist",
    doctor2Bio:
      "Expert in drug-plant interactions and pharmacotherapeutic approaches. Works to ensure safe and effective medication use in patients' treatment processes.",
    doctor3Name: "Aleyna Zeynep Tuhan",
    doctor3Specialty: "Nurse",
    doctor3Bio:
      "Expert nurse in patient care and treatment process management. Closely monitors patients' comfort and recovery processes, serving as an indispensable part of the treatment team.",
    doctor4Name: "Serdar Erkal",
    doctor4Specialty: "Medical Biochemistry Specialist",
    doctor4Bio:
      "Expert in medical biochemistry and laboratory diagnostic methods. Works to support the biochemical diagnosis of diseases and treatment processes with scientific analyses.",
    doctor5Name: "Ercan Demir",
    doctor5Specialty: "Cupping, Leech Therapy & Massage Specialist",
    doctor5Bio:
      "Specialist doctor in cupping therapy (hijama), leech therapy (hirudotherapy), and therapeutic massage. Combines traditional treatment methods with modern medical approaches to improve patients' pain management, circulation problems, and overall health conditions.",

    // Gallery
    galleryTitle: "Our Gallery",
    gallerySubtitle: "Discover moments of health, transformation, and healthy living from our community",
    testimonialsTitle: "Miraculous Touches",
    // </CHANGE>

    // CTA
    ctaTitle: "Ready to Book an Appointment?",
    ctaSubtitle: "Call us to schedule your consultation with our phytotherapy specialists.",
    callUs: "Call us:",
    workingHoursTitle: "Working Hours",
    weekdays: "Weekdays",
    saturday: "Saturday",
    sunday: "Sunday",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "Flexible Hour Treatment",

    // Footer
    footerTagline: "Your trusted partner in holistic health and wellness.",
    footerAddress: "Address",
    footerAddressText: "Murat Reis Mah. Nuhkuyu Cad. No:255/2 Bağlarbaşı/Üsküdar",
    footerContact: "Contact",
    footerSocialMedia: "Social Media",
    footerCopyright: "© 2025 Fitonova Health Service Unit. All rights reserved.",
    footerLegal: "Legal Documents and Policies",
    footerPrivacy: "Privacy Policy", // Added missing footer link translations
    footerTerms: "Our Documents", // Added missing footer link translations
    footerKVKK: "GDPR Disclosure Text", // Added missing footer link translations
    privacyPolicy: "Privacy Policy",
    termsOfService: "Our Documents",
    kvkkText: "GDPR Disclosure Text",
    cookieBanner: {
      title: "Cookie Usage",
      description:
        "We use cookies on our website to improve your experience and perform analytics. By continuing, you accept the use of cookies.",
      acceptAll: "Accept All",
      rejectAll: "Reject",
      learnMore: "Learn More",
    },
  },
  ar: {
    // Header
    brandName: "الحيوية",
    navServices: "الخدمات",
    navAbout: "حول",
    navContact: "اتصل",
    getStarted: "ابدأ",
    navHome: "الرئيسية",
    navAboutUs: "من نحن",
    navOurServices: "خدماتنا",
    navOurDoctor: "فريقنا",
    navGallery: "المعرض",
    navAppointment: "احجز موعد",
    makeAppointment: "احجز موعد",
    navDocuments: "وثائقنا", // Added documents menu link

    // Hero
    heroTitle: "اسم الرحلة: طلعت ملا أوغلو",
    heroSlide1Title: "صيغة الطبيعة العلاجية في مكافحة السرطان",
    heroSlide1Alt: "أنواع السرطان",
    heroSlide2Title: "الصدفية كثيرة، والعلاج في الطبيعة واحد",
    heroSlide2Alt: "علاج الصدفية",
    heroSlide3Title: "أقدم علاج طبيعي، حاجة الحياة العصرية",
    heroSlide3Alt: "العلاج بالحجامة",
    heroSlide4Title: "العلاج بالعلق: المعجزة الصغيرة الشافية",
    heroSlide4Alt: "العلاج بالعلق",
    heroSlide5Title: "اسم العلم والاكتشاف: طلعت مولا أوغلو",
    heroSlide5Alt: "طلعت مولا أوغلو",
    // </CHANGE>
    learnMoreButton: "معرفة المزيد",
    backToHome: "العودة إلى الصفحة الرئيسية",
    cancerTreatmentTitle: "علاج السرطان",
    cancerTreatmentIntro:
      "السرطان هو مرض معقد يتطور من خلال التكاثر غير المنضبط للخلايا في الجسم، مع مسار مختلف في كل فرد. تتضمن هذه الرحلة أبعادًا عاطفية ونفسية بالإضافة إلى الأبعاد الجسدية. لذلك، من المهم التعامل مع عملية العلاج ليس فقط بمنظور يركز على المرض، ولكن بنهج شامل يضع الشخص في المركز.",
    cancerFitonovaTitle: "نهج فيتونوفا للسرطان",
    cancerFitonovaApproach:
      "لا ترفض فيتونوفا علاجات الطب الحديث. على العكس من ذلك، تهدف إلى دعم قوتها بالإمكانيات التكميلية للطبيعة. يتم تطبيق المكونات النشطة النباتية الموجودة في الدراسات العلمية، والمكونات الطبيعية التي تقوي جهاز المناعة، والبروتوكولات التي تدعم التوازن الأيضي بشكل فردي بعد تقييم الخبراء.",
    // </CHANGE>
    cancerHerbalSupportTitle: "ماذا يقدم الدعم العشبي في علاج السرطان؟",
    cancerHerbalBenefit1: "يمكن أن يساعد في تقوية المناعة",
    cancerHerbalBenefit2: "يمكن أن يدعم تخفيف الضعف وفقدان الشهية واضطرابات النوم الناجمة عن الآثار الجانبية للعلاج",
    cancerHerbalBenefit3: "يمكن أن يساهم في زيادة الدفاع الخلوي",
    cancerHerbalBenefit4: "يمكن أن يقوي المرونة الجسدية والعقلية أثناء عملية العلاج",
    cancerHerbalConclusion: "الهدف الرئيسي لهذا النهج هو دعم عملية الشفاء مع الحفاظ على جودة حياة الشخص.",
    cancerSpiritualTitle: "الدعم الروحي والنفسي",
    cancerSpiritualIntro:
      "السرطان ليس مجرد مرض جسدي. هذه العملية هي رحلة إنسانية تتأرجح بين الأمل والخوف والقوة والإرهاق وإعادة الميلاد. لهذا السبب في فيتونوفا:",
    cancerSpiritualBenefit1: "استشارات تهدف إلى الحفاظ على القوة العاطفية للمريض",
    cancerSpiritualBenefit2: "برامج دعم تزيد من الدافعية خلال عملية العلاج",
    cancerSpiritualBenefit3: "معلومات للعائلة والبيئة",
    cancerSpiritualBenefit4: "نهج يعزز الروح المعنوية والرغبة في الشفاء",
    cancerSpiritualConclusion: "يتم تطبيقه. لأننا نعتقد أن كل مريض ليس ملفًا، بل قصة.",
    psoriasisTitle: "فهم الصدفية",
    psoriasisIntro:
      "الصدفية مرض جلدي مزمن يحدث نتيجة رد فعل مناعي مفرط، مما يؤدي إلى تكاثر خلايا الجلد بشكل أسرع من المعتاد. على الرغم من أنها تظهر تقليديًا على شكل احمرار وتقشر وحكة في الجلد، إلا أنها حالة متعددة الأوجه يمكن أن تؤثر ليس فقط على الجلد، ولكن أيضًا على نفسية الشخص وحياته الاجتماعية وثقته بنفسه. لذلك، من المهم التعامل مع عملية العلاج ليس فقط من سطح الجلد، ولكن من آليات توازن الجسم.",
    psoriasisFitonovaTitle: "نهج فيتونوفا للصدفية",
    psoriasisFitonovaIntro:
      "الصدفية ليست مجرد حالة جلدية؛ يلعب جهاز المناعة والتوتر والنظام الغذائي والتوازن الهرموني والعوامل الحيوية دورًا هامًا في تشكيل هذه الحالة. في فيتونوفا، الهدف ليس قمع المشكلة، بل دعم توازن الجسم. نهجنا مبني على المبادئ التالية:",
    psoriasisFitonovaBenefit1: "الدعم الطبيعي للمساعدة في تنظيم جهاز المناعة",
    psoriasisFitonovaBenefit2: "المكونات العشبية التي تستهدف توازن الاستجابة الالتهابية الخلوية",
    psoriasisFitonovaBenefit3: "المكونات الطبيعية التي تدعم حاجز الجلد وتعزز التجديد",
    psoriasisFitonovaBenefit4: "التحديد الشخصي للعوامل المسببة للصدفية",
    psoriasisFitonovaBenefit5: "جودة حياة مستدامة",
    psoriasisFitonovaConclusion: "فيتونوفا لا ترفض علاجات الطب الحديث - بل تلعب دورًا تكميليًا وداعمًا ومعززًا.",
    // </CHANGE>
    heroSubtitle: "اكتشف نهجًا شاملاً للصحة يغذي جسمك وعقلك وروحك",
    startJourney: "ابدأ رحلتك",
    learnMore: "اعرف المزيد",

    // About
    aboutTitle: "من نحن",
    aboutText1:
      "فيتونوفا هو مركز صحي شامل يجمع بين القوة العلمية للطب الحديث والإمكانات التجديدية للطبيعة. هدفنا ليس فقط قمع المرض مؤقتًا، ولكن تحقيق حل دائم ونهائي من خلال القضاء على أسبابه. نهدف إلى إعادة بناء سلامة الجسم والعقل والروح لكل فرد وجعل الصحة مستدامة.\n\nينفذ أطباؤنا المتخصصون طرق التشخيص والعلاج العلمية مع البروتوكولات العشبية والطبيعية في العديد من مجموعات الأمراض، في المقام الأول علم الأورام. يقدم هذا النهج نموذج علاج متكامل يدعم الشفاء على المستوى الخلوي ويعيد تنشيط نظام الدفاع الخاص بالجسم.",
    aboutText2:
      "يتم إنشاء خطة علاج شخصية لكل من مرضانا؛ يتم إعداد هذه الخطة بعناية مع مراعاة نتائج المختبر وعادات نمط الحياة والتاريخ الطبي. تتم مراقبة عملية العلاج عن كثب من خلال التحليلات العلمية والتقييمات المنتظمة؛ وبالتالي، يتم تقليل خطر تكرار المرض إلى الحد الأدنى ويتم استهداف الشفاء الدائم.\n\nفي فيتونوفا، الهدف ليس فقط العلاج، ولكن ضمان الشفاء ورفع جودة حياة الفرد إلى أعلى مستوى.",
    valuesTitle: "قيمنا",
    value1: "نهج خدمة أخلاقي وموثوق وشفاف",
    value2: "مزج المعرفة العلمية مع قوة الطبيعة",
    value3: "نهج علاج شخصي وشامل",
    value4: "التطوير المستمر والعمل المركز على رضا المرضى",
    philosophyTitle: "فلسفتنا",
    philosophyText:
      "نحن نؤمن بأن الفرص التي تقدمها الطبيعة ستنتج نتائج أكثر فعالية عند دمجها مع الطب الحديث. لذلك، يتم إجراء كل من عمليات العلاج لدينا وفقًا لمبادئ الطب القائم على الأدلة، في معايير آمنة وأخلاقية.",
    missionTitle: "مهمتنا",
    missionText:
      "تقديم أعلى جودة حياة لمرضانا، وإنتاج حلول مليئة بالأمل من خلال الجمع بين البيانات الطبية الحديثة ونهج العلاج الطبيعي.",
    visionTitle: "رؤيتنا",
    visionText:
      "أن نصبح مركزًا صحيًا مثاليًا على المستويين الوطني والدولي مع نماذج علاج مبتكرة تستخدم الأساليب الطبيعية والعلمية معًا.",

    // Services
    servicesTitle: "الأمراض التي نعالجها",
    servicesIntro:
      "يجمع بين قوة التشخيص في الطب الحديث والطاقة التجديدية للطبيعة لتقديم حلول دائمة ونهائية للعديد من الأمراض.",
    servicesGoal: "هدفنا ليس فقط تخفيف الأعراض، ولكن القضاء على السبب الجذري للمرض واستعادة توازن الجسم.",
    servicesDiseases:
      "ينفذ أطباؤنا المتخصصون برامج علاجية شاملة في مجموعات أمراض مختلفة، في المقام الأول علم الأورام (جميع أنواع السرطان)، بالإضافة إلى الأكزيما والصدفية والغرغرينا وأورام الدماغ والألم المزمن والاختلالات الهرمونية والعقم.",
    servicesProtocols:
      "يتم تحديد بروتوكولات العلاج الشخصية لكل مرض من خلال التحليل العلمي وتطبيقها مع المكونات العشبية التي تدعم التجديد الخلوي والأساليب القائمة على الأدلة في الطب الحديث.",
    servicesBullet1:
      "في علاجات السرطان، يتم استخدام بروتوكولات فريدة تقوي جهاز المناعة وتوقف تطور الورم وتسرع عملية الشفاء.",
    servicesBullet2:
      "بالنسبة لأمراض الجلد (الصدفية والأكزيما)، يتم توفير حلول دائمة مع المكونات العشبية التي تقلل من حمل السموم في الجسم وتدعم تجديد الخلايا.",
    servicesBullet3:
      "في الحالات المتقدمة مثل اضطرابات الدورة الدموية والغرغرينا، تهدف التركيبات الخاصة التي تزيد من إصلاح الأنسجة إلى إحياء المناطق المفقودة.",
    servicesBullet4:
      "في علاج العقم، يتم استخدام تطبيقات تكميلية تنظم التوازن الهرموني بشكل طبيعي وتعيد تنشيط الوظائف الإنجابية.",
    servicesBullet5:
      "بالنسبة لآلام الظهر والرقبة والمفاصل، يتم تحقيق حلول نهائية من خلال طرق العلاج الطبيعية التي تصلح أنسجة الأعصاب والعضلات وتقلل الالتهاب.",
    servicesBullet6: "العلاج بالحجامة يزيل السموم من الجسم ويسرع الدورة الدموية ويوفر تأثير إزالة السموم العام.",
    servicesBullet7:
      "العلاج بالعلق (العلاج بالعلق) يهدف إلى موازنة الجهاز الدوري وتقليل الألم ودعم صحة الأوعية الدموية.",
    servicesConclusion: "في فيتونوفا، يُنظر إلى كل مرض ليس فقط كحالة طبية، ولكن كبداية لرحلة لاستعادة الصحة.",
    servicesApproach: "نحن ندير هذه الرحلة لكل من مرضانا بنهج علمي وطبيعي وموجه نحو النتائج.",

    // Doctors
    doctorsTitle: "أعضاء فريقنا",
    doctorsSubtitle: "متخصصون خبراء في العلاج النباتي مكرسون لصحتك وعافيتك",
    doctor1Name: "طلعت ملا أوغلو",
    doctor1Specialty: "مساعد",
    doctor1Badge1: "أكثر من 30 عامًا",
    doctor1Badge2: "نجاحات عديدة",
    doctor1Bio:
      "مع أكثر من 30 عامًا من الخبرة في العلاج النباتي والعلاج بالأعشاب. كمؤسس لعيادتنا ومهندس طرق العلاج، جلب الأمل والصحة لآلاف المرضى.",
    doctor2Name: "أحمد مراد ديغيش",
    doctor2Specialty: "صيدلي عالم صيدلة",
    doctor2Bio:
      "خبير في التفاعلات بين الأدوية والنباتات والنهج الدوائية العلاجية. يعمل على ضمان استخدام آمن وفعال للأدوية في عمليات علاج المرضى.",
    doctor3Name: "أليينا زينب توهان",
    doctor3Specialty: "ممرضة",
    doctor3Bio:
      "ممرضة خبيرة في رعاية المرضى وإدارة عمليات العلاج. تراقب عن كثب راحة المرضى وعمليات التعافي، وتعمل كجزء لا غنى عنه من فريق العلاج.",
    doctor4Name: "سردار إركال",
    doctor4Specialty: "أخصائي الكيمياء الحيوية الطبية",
    doctor4Bio:
      "خبير في الكيمياء الحيوية الطبية وطرق التشخيص المخبري. يعمل على دعم التشخيص الكيميائي الحيوي للأمراض وعمليات العلاج بالتحليلات العلمية.",
    doctor5Name: "إرجان ديمير",
    doctor5Specialty: "أخصائي الحجامة والعلاج بالعلق والتدليك",
    doctor5Bio:
      "طبيب متخصص في العلاج بالحجامة والعلاج بالعلق (العلاج بالعلق) والتدليك العلاجي. يجمع بين طرق العلاج التقليدية والنهج الطبية الحديثة لتحسين إدارة الألم ومشاكل الدورة الدموية والحالات الصحية العامة للمرضى.",

    // Gallery
    galleryTitle: "معرضنا",
    gallerySubtitle: "اكتشف لحظات الصحة والتحول والحياة الصحية من مجتمعنا",

    // Testimonials
    testimonialsTitle: "اللمسات المعجزة",
    // </CHANGE>

    // CTA
    ctaTitle: "هل أنت مستعد لحجز موعد؟",
    ctaSubtitle: "اتصل بنا لجدولة استشارتك مع متخصصي العلاج النباتي لدينا.",
    callUs: "اتصل بنا:",
    workingHoursTitle: "ساعات العمل",
    weekdays: "أيام الأسبوع",
    saturday: "السبت",
    sunday: "الأحد",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "علاج بساعات مرنة",

    // Footer
    footerTagline: "شريكك الموثوق في الصحة والعافية الشاملة.",
    footerAddress: "العنوان",
    footerAddressText: "مراد رئيس ماه. نوهكويو كاد. رقم:255/2 باغلار باشي/أوسكودار",
    footerContact: "اتصل",
    footerSocialMedia: "وسائل التواصل الاجتماعي",
    footerCopyright: "© 2025 وحدة خدمة فيتونوفا الصحية. جميع الحقوق محفوظة.",
    footerLegal: "المستندات والسياسات القانونية",
    footerPrivacy: "سياسة الخصوصية", // Added missing footer link translations
    footerTerms: "وثائقنا", // Added missing footer link translations
    footerKVKK: "نص الإفصاح عن GDPR", // Added missing footer link translations
    cookieBanner: {
      title: "استخدام ملفات تعريف الارتباط",
      description:
        "نستخدم ملفات تعريف الارتباط على موقعنا لتحسين تجربتك وإجراء التحليلات. من خلال المتابعة، فإنك توافق على استخدام ملفات تعريف الارتباط.",
      acceptAll: "قبول الكل",
      rejectAll: "رفض",
      learnMore: "معرفة المزيد",
    },
  },
  de: {
    // Header
    brandName: "Vitalität",
    navServices: "Dienstleistungen",
    navAbout: "Über",
    navContact: "Kontakt",
    getStarted: "Loslegen",
    navHome: "Startseite",
    navAboutUs: "Über uns",
    navOurServices: "Unsere Dienstleistungen",
    navOurDoctor: "Unser Team",
    navGallery: "Galerie",
    navAppointment: "Termin buchen",
    makeAppointment: "Termin buchen",
    navDocuments: "Unsere Dokumente", // Added documents menu link

    // Hero
    heroTitle: "Der Name einer Reise: Talat Mollaoğlu",
    // Adding hero slider translations for German
    heroSlide1Title: "Natürliche Heilformel im Kampf gegen Krebs",
    heroSlide1Alt: "Krebsarten",
    heroSlide2Title: "Viele Psoriasis-Fälle, eine Heilung in der Natur",
    heroSlide2Alt: "Psoriasis-Behandlung",
    heroSlide3Title: "Ältestes Heilmittel der Natur, Bedürfnis des modernen Lebens",
    heroSlide3Alt: "Schröpftherapie",
    heroSlide4Title: "Blutegeltherapie: Das heilende Mikrowunder",
    heroSlide4Alt: "Blutegeltherapie",
    heroSlide5Title: "Der Name von Wissenschaft und Entdeckung: Talat Mollaoğlu",
    heroSlide5Alt: "Talat Mollaoğlu",
    // </CHANGE>
    learnMoreButton: "Mehr erfahren",
    backToHome: "Zurück zur Startseite",
    cancerTreatmentTitle: "Krebsbehandlung",
    cancerTreatmentIntro:
      "Krebs ist eine komplexe Krankheit, die durch unkontrolliertes Zellwachstum im Körper entsteht und bei jedem Einzelnen unterschiedlich verläuft. Diese Reise beinhaltet nicht nur physische, sondern auch emotionale und psychologische Dimensionen. Daher ist es wichtig, den Behandlungsprozess nicht nur krankheitsorientiert, sondern mit einem ganzheitlichen Ansatz, der den Menschen in den Mittelpunkt stellt, zu betrachten.",
    cancerFitonovaTitle: "Fitonova's Ansatz bei Krebs",
    cancerFitonovaApproach:
      "Fitonova lehnt moderne medizinische Behandlungen nicht ab. Im Gegenteil, es zielt darauf ab, ihre Kraft mit dem komplementären Potenzial der Natur zu unterstützen. Pflanzliche Wirkstoffe, die Teil wissenschaftlicher Studien sind, natürliche Komponenten, die das Immunsystem stärken, und Stoffwechselgleichgewicht unterstützende Protokolle werden nach Expertenbewertung individuell angewendet.",
    // </CHANGE>
    cancerHerbalSupportTitle: "Was bietet pflanzliche Unterstützung bei der Krebsbehandlung?",
    cancerHerbalBenefit1: "Kann helfen, das Immunsystem zu stärken",
    cancerHerbalBenefit2:
      "Kann die Linderung von Schwäche, Appetitlosigkeit und Schlafstörungen, die durch Nebenwirkungen der Behandlung verursacht werden, unterstützen",
    cancerHerbalBenefit3: "Kann zur Stärkung der zellulären Abwehr beitragen",
    cancerHerbalBenefit4:
      "Kann die körperliche und geistige Widerstandsfähigkeit während des Behandlungsprozesses stärken",
    cancerHerbalConclusion:
      "Das Hauptziel dieses Ansatzes ist es, den Heilungsprozess zu unterstützen und gleichzeitig die Lebensqualität des Menschen zu erhalten.",
    cancerSpiritualTitle: "Spirituelle und psychologische Unterstützung",
    cancerSpiritualIntro:
      "Krebs ist nicht nur eine körperliche Krankheit. Dieser Prozess ist eine menschliche Reise, die zwischen Hoffnung, Angst, Stärke, Müdigkeit und Wiedergeburt schwankt. Deshalb wird bei Fitonova:",
    cancerSpiritualBenefit1: "Beratung zur Erhaltung der emotionalen Kraft des Patienten",
    cancerSpiritualBenefit2: "Unterstützungsprogramme zur Steigerung der Motivation während des Behandlungsprozesses",
    cancerSpiritualBenefit3: "Informationen für Familie und Umfeld",
    cancerSpiritualBenefit4: "Ein Ansatz, der den Moral und den Heilungswillen stärkt",
    cancerSpiritualConclusion:
      "angewendet. Denn unserer Meinung nach ist jeder Patient keine Akte, sondern eine Geschichte.",
    psoriasisTitle: "Psoriasis verstehen",
    psoriasisIntro:
      "Psoriasis ist eine chronische Hauterkrankung, die durch eine Überreaktion des Immunsystems verursacht wird, was zu einer viel schnelleren Vermehrung der Hautzellen als normal führt. Obwohl sie klassisch durch Rötungen, Schuppenbildung und Juckreiz der Haut gekennzeichnet ist, ist sie eine vielschichtige Erkrankung, die nicht nur die Haut, sondern auch die Psyche, das soziale Leben und das Selbstvertrauen eines Menschen beeinflussen kann. Daher ist es wichtig, den Behandlungsprozess nicht nur von der Hautoberfläche aus anzugehen, sondern von den Regulationsmechanismen des Körpers.",
    psoriasisFitonovaTitle: "Fitonova's Ansatz bei Psoriasis",
    psoriasisFitonovaIntro:
      "Psoriasis ist nicht nur eine Hauterkrankung; das Immunsystem, Stress, Ernährung, hormonelles Gleichgewicht und vitale Faktoren spielen eine wichtige Rolle bei der Gestaltung dieser Erkrankung. Bei Fitonova besteht das Ziel darin, das Problem nicht zu unterdrücken, sondern das Gleichgewicht des Körpers zu unterstützen. Unser Ansatz basiert auf folgenden Prinzipien:",
    psoriasisFitonovaBenefit1: "Natürliche Unterstützung zur Regulierung des Immunsystems",
    psoriasisFitonovaBenefit2:
      "Pflanzliche Komponenten, die auf das Gleichgewicht der zellulären Entzündungsreaktion abzielen",
    psoriasisFitonovaBenefit3:
      "Natürliche Inhaltsstoffe, die die Hautbarriere unterstützen und die Regeneration fördern",
    psoriasisFitonovaBenefit4: "Individuelle Bestimmung von Psoriasis auslösenden Faktoren",
    psoriasisFitonovaBenefit5: "Nachhaltige Lebensqualität",
    psoriasisFitonovaConclusion:
      "Fitonova lehnt moderne medizinische Behandlungen nicht ab — es übernimmt eine komplementäre, unterstützende und stärkende Rolle.",
    // </CHANGE>
    heroSubtitle: "Entdecken Sie einen ganzheitlichen Gesundheitsansatz, der Ihren Körper, Geist und Seele nährt",
    startJourney: "Beginnen Sie Ihre Reise",
    learnMore: "Mehr erfahren",

    // About
    aboutTitle: "Über uns",
    aboutText1:
      "Fitonova ist ein ganzheitliches Gesundheitszentrum, das die wissenschaftliche Kraft der modernen Medizin mit dem regenerativen Potenzial der Natur verbindet. Unser Ziel ist es nicht nur, die Krankheit vorübergehend zu unterdrücken, sondern eine dauerhafte und endgültige Lösung zu erreichen, indem wir ihre Ursachen beseitigen. Wir streben danach, die Integrität von Körper, Geist und Seele jedes Einzelnen wiederherzustellen und die Gesundheit nachhaltig zu machen.\n\nUnsere Fachärzte kombinieren wissenschaftliche Diagnose- und Behandlungsmethoden mit pflanzlichen und natürlichen Protokollen in vielen Krankheitsgruppen, hauptsächlich in der Onkologie. Dieser Ansatz bietet ein integriertes Behandlungsmodell, das die Heilung auf zellulärer Ebene unterstützt und das körpereigene Abwehrsystem reaktiviert.",
    aboutText2:
      "Für jeden unserer Patienten wird ein personalisierter Behandlungsplan erstellt; dieser Plan wird sorgfältig unter Berücksichtigung von Laborergebnissen, Lebensgewohnheiten und Krankengeschichte erstellt. Der Behandlungsprozess wird mit wissenschaftlichen Analysen und regelmäßigen Bewertungen genau überwacht; somit wird das Risiko eines Krankheitsrückfalls minimiert und eine dauerhafte Heilung angestrebt.\n\nBei Fitonova ist das Ziel nicht nur zu behandeln, sondern die Heilung sicherzustellen und die Lebensqualität des Einzelnen auf das höchste Niveau zu heben.",
    valuesTitle: "Unsere Werte",
    value1: "Ethischer, zuverlässiger und transparenter Serviceansatz",
    value2: "Wissenschaftliches Wissen mit der Kraft der Natur verbinden",
    value3: "Personalisierter und ganzheitlicher Behandlungsansatz",
    value4: "Kontinuierliche Entwicklung und patientenzufriedenheitsorientierte Arbeit",
    philosophyTitle: "Unsere Philosophie",
    philosophyText:
      "Wir glauben, dass die von der Natur gebotenen Möglichkeiten effektivere Ergebnisse erzielen, wenn sie mit moderner Medizin kombiniert werden. Daher wird jeder unserer Behandlungsprozesse in Übereinstimmung mit evidenzbasierten medizinischen Prinzipien in sicheren und ethischen Standards durchgeführt.",
    missionTitle: "Unsere Mission",
    missionText:
      "Unseren Patienten die höchste Lebensqualität zu bieten, hoffnungsvolle Lösungen zu produzieren, indem wir moderne medizinische Daten und natürliche Behandlungsansätze zusammenbringen.",
    visionTitle: "Unsere Vision",
    visionText:
      "Ein Gesundheitszentrum zu werden, das auf nationaler und internationaler Ebene mit innovativen Behandlungsmodellen, die natürliche und wissenschaftliche Methoden zusammen verwenden, beispielhaft ist.",

    // Services
    servicesTitle: "Krankheiten, die wir behandeln",
    servicesIntro:
      "kombiniert die diagnostische Kraft der modernen Medizin mit der regenerativen Energie der Natur, um dauerhafte und endgültige Lösungen für viele Krankheiten zu bieten.",
    servicesGoal:
      "Unser Ziel ist es nicht nur, Symptome zu lindern, sondern die Grundursache der Krankheit zu beseitigen und den Körper wieder ins Gleichgewicht zu bringen.",
    servicesDiseases:
      "Unsere Fachärzte führen umfassende Behandlungsprogramme in verschiedenen Krankheitsgruppen durch, hauptsächlich in der Onkologie (alle Krebsarten), sowie bei Ekzemen, Psoriasis, Gangrän, Hirntumoren, chronischen Schmerzen, hormonellen Ungleichgewichten und Unfruchtbarkeit.",
    servicesProtocols:
      "Personalisierte Behandlungsprotokolle für jede Krankheit werden durch wissenschaftliche Analysen bestimmt und zusammen mit pflanzlichen Komponenten angewendet, die die zelluläre Erneuerung unterstützen, sowie evidenzbasierten Methoden der modernen Medizin.",
    servicesBullet1:
      "Bei Krebsbehandlungen werden einzigartige Protokolle verwendet, die das Immunsystem stärken, die Tumorentwicklung stoppen und den Heilungsprozess beschleunigen.",
    servicesBullet2:
      "Bei Hauterkrankungen (Psoriasis, Ekzeme) werden dauerhafte Lösungen mit pflanzlichen Inhaltsstoffen bereitgestellt, die die Toxinbelastung des Körpers reduzieren und die Zellerneuerung unterstützen.",
    servicesBullet3:
      "Bei fortgeschrittenen Zuständen wie Durchblutungsstörungen und Gangrän zielen spezielle Formulierungen, die die Gewebereparatur erhöhen, darauf ab, verlorene Bereiche wiederzubeleben.",
    servicesBullet4:
      "Bei der Unfruchtbarkeitsbehandlung werden ergänzende Anwendungen verwendet, die das hormonelle Gleichgewicht auf natürliche Weise regulieren und die Fortpflanzungsfunktionen reaktivieren.",
    servicesBullet5:
      "Bei Rücken-, Nacken- und Gelenkschmerzen werden endgültige Lösungen durch natürliche Therapiemethoden erreicht, die Nerven- und Muskelgewebe reparieren und Entzündungen reduzieren.",
    servicesBullet6:
      "Schröpftherapie entfernt Giftstoffe aus dem Körper, beschleunigt die Durchblutung und bietet eine allgemeine Entgiftungswirkung.",
    servicesBullet7:
      "Blutegeltherapie (Hirudotherapie) zielt darauf ab, das Kreislaufsystem auszugleichen, Schmerzen zu reduzieren und die Gefäßgesundheit zu unterstützen.",
    servicesConclusion:
      "Bei Fitonova wird jede Krankheit nicht nur als medizinischer Zustand gesehen, sondern als Beginn einer Reise zur Wiedererlangung der Gesundheit.",
    servicesApproach:
      "Wir verwalten diese Reise für jeden unserer Patienten mit einem wissenschaftlichen, natürlichen und ergebnisorientierten Ansatz.",

    // Doctors
    doctorsTitle: "Unsere Teammitglieder",
    doctorsSubtitle: "Experten für Phytotherapie, die sich Ihrer Gesundheit und Ihrem Wohlbefinden widmen",
    doctor1Name: "Talat Mollaoğlu",
    doctor1Specialty: "Assistent",
    doctor1Badge1: "30+ Jahre",
    doctor1Badge2: "Zahlreiche Erfolge",
    doctor1Bio:
      "Mit über 30 Jahren Erfahrung in Phytotherapie und Kräuterbehandlung. Als Gründer unserer Klinik und Architekt der Behandlungsmethoden hat er Tausenden von Patienten Hoffnung und Gesundheit gebracht.",
    doctor2Name: "Ahmet Murat Dığış",
    doctor2Specialty: "Apotheker Pharmakologe",
    doctor2Bio:
      "Experte für Arzneimittel-Pflanzen-Wechselwirkungen und pharmakotherapeutische Ansätze. Arbeitet daran, eine sichere und wirksame Medikamentenverwendung in den Behandlungsprozessen der Patienten zu gewährleisten.",
    doctor3Name: "Aleyna Zeynep Tuhan",
    doctor3Specialty: "Krankenschwester",
    doctor3Bio:
      "Expertin Krankenschwester in der Patientenversorgung und im Behandlungsprozessmanagement. Überwacht genau den Komfort und die Genesungsprozesse der Patienten und dient als unverzichtbarer Teil des Behandlungsteams.",
    doctor4Name: "Serdar Erkal",
    doctor4Specialty: "Medizinischer Biochemie-Spezialist",
    doctor4Bio:
      "Experte für medizinische Biochemie und Labordiagnosemethoden. Arbeitet daran, die biochemische Diagnose von Krankheiten und Behandlungsprozesse mit wissenschaftlichen Analysen zu unterstützen.",
    doctor5Name: "Ercan Demir",
    doctor5Specialty: "Schröpfen, Blutegeltherapie & Massage-Spezialist",
    doctor5Bio:
      "Facharzt für Schröpftherapie (Hijama), Blutegeltherapie (Hirudotherapie) und therapeutische Massage. Kombiniert traditionelle Behandlungsmethoden mit modernem medizinischen Ansätzen zur Verbesserung des Schmerzmanagements, der Durchblutungsprobleme und des allgemeinen Gesundheitszustands der Patienten.",

    // Gallery
    galleryTitle: "Unsere Galerie",
    gallerySubtitle:
      "Entdecken Sie Momente der Gesundheit, Transformation und des gesunden Lebens aus unserer Gemeinschaft",
    testimonialsTitle: "Wundersame Berührungen",
    // </CHANGE>

    // CTA
    ctaTitle: "Bereit, einen Termin zu buchen?",
    ctaSubtitle: "Rufen Sie uns an, um Ihre Beratung mit unseren Phytotherapie-Spezialisten zu planen.",
    callUs: "Rufen Sie uns an:",
    workingHoursTitle: "Öffnungszeiten",
    weekdays: "Wochentage",
    saturday: "Samstag",
    sunday: "Sonntag",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "Flexible Behandlungszeiten",

    // Footer
    footerTagline: "Ihr vertrauenswürdiger Partner für ganzheitliche Gesundheit und Wohlbefinden.",
    footerAddress: "Adresse",
    footerAddressText: "Murat Reis Mah. Nuhkuyu Cad. Nr:255/2 Bağlarbaşı/Üsküdar",
    footerContact: "Kontakt",
    footerSocialMedia: "Soziale Medien",
    footerCopyright: "© 2025 Fitonova Gesundheitsdiensteinheit. Alle Rechte vorbehalten.",
    footerLegal: "Rechtliche Dokumente und Richtlinien",
    footerPrivacy: "Datenschutzrichtlinie", // Added missing footer link translations
    footerTerms: "Unsere Dokumente", // Added missing footer link translations
    footerKVKK: "DSGVO-Offenlegungstext", // Added missing footer link translations
    cookieBanner: {
      title: "Cookie-Nutzung",
      description:
        "Wir verwenden Cookies auf unserer Website, um Ihre Erfahrung zu verbessern und Analysen durchzuführen. Durch Fortfahren akzeptieren Sie die Verwendung von Cookies.",
      acceptAll: "Alle akzeptieren",
      rejectAll: "Ablehnen",
      learnMore: "Mehr erfahren",
    },
  },
  fr: {
    // Header
    brandName: "Vitalité",
    navServices: "Services",
    navAbout: "À propos",
    navContact: "Contact",
    getStarted: "Commencer",
    navHome: "Accueil",
    navAboutUs: "À propos de nous",
    navOurServices: "Nos services",
    navOurDoctor: "Notre équipe",
    navGallery: "Galerie",
    navAppointment: "Prendre rendez-vous",
    makeAppointment: "Prendre rendez-vous",
    navDocuments: "Nos documents", // Added documents menu link

    // Hero
    heroTitle: "Le nom d'un voyage : Talat Mollaoğlu",
    // Adding hero slider translations for French
    heroSlide1Title: "La formule de guérison de la nature dans la lutte contre le cancer",
    heroSlide1Alt: "Types de cancer",
    heroSlide2Title: "Beaucoup de cas de psoriasis, une seule guérison dans la nature",
    heroSlide2Alt: "Traitement du psoriasis",
    heroSlide3Title: "Le plus ancien remède de la nature, le besoin de la vie moderne",
    heroSlide3Alt: "Thérapie par ventouses",
    heroSlide4Title: "Thérapie par sangsues : le micro-miracle qui guérit",
    heroSlide4Alt: "Thérapie par sangsues",
    heroSlide5Title: "Le nom de la science et de la découverte : Talat Mollaoğlu",
    heroSlide5Alt: "Talat Mollaoğlu",
    // </CHANGE>
    learnMoreButton: "En savoir plus",
    backToHome: "Retour à l'accueil",
    cancerTreatmentTitle: "Traitement du cancer",
    cancerTreatmentIntro:
      "Le cancer est une maladie complexe qui se développe avec la prolifération incontrôlée des cellules dans le corps, évoluant différemment chez chaque individu. Ce voyage implique des dimensions émotionnelles et psychologiques ainsi que physiques. Par conséquent, il est important d'aborder le processus de traitement non pas uniquement axé sur la maladie, mais avec une approche holistique centrée sur l'être humain.",
    cancerFitonovaTitle: "L'approche Fitonova face au cancer",
    cancerFitonovaApproach:
      "Fitonova ne rejette pas les traitements médicaux modernes. Au contraire, elle vise à soutenir leur puissance grâce au potentiel complémentaire de la nature. Les ingrédients actifs à base de plantes issus d'études scientifiques, les composants naturels qui renforcent le système immunitaire et les protocoles qui soutiennent l'équilibre métabolique sont appliqués individuellement après évaluation par des experts.",
    // </CHANGE>
    cancerHerbalSupportTitle: "Que fournit le soutien à base de plantes dans le traitement du cancer ?",
    cancerHerbalBenefit1: "Peut aider à renforcer le système immunitaire",
    cancerHerbalBenefit2:
      "Peut soutenir l'atténuation de la faiblesse, de la perte d'appétit et des troubles du sommeil causés par les effets secondaires du traitement",
    cancerHerbalBenefit3: "Peut contribuer à renforcer la défense cellulaire",
    cancerHerbalBenefit4: "Peut renforcer la résilience physique et mentale pendant le processus de traitement",
    cancerHerbalConclusion:
      "L'objectif principal de cette approche est de soutenir le processus de guérison tout en maintenant la qualité de vie de la personne.",
    cancerSpiritualTitle: "Soutien spirituel et psychologique",
    cancerSpiritualIntro:
      "Le cancer n'est pas seulement une maladie physique. Ce processus est un voyage humain qui oscille entre l'espoir, la peur, la force, la fatigue et la renaissance. C'est pourquoi chez Fitonova :",
    cancerSpiritualBenefit1: "Conseils visant à préserver la force émotionnelle du patient",
    cancerSpiritualBenefit2: "Programmes de soutien qui augmentent la motivation pendant le processus de traitement",
    cancerSpiritualBenefit3: "Informations pour la famille et l'environnement",
    cancerSpiritualBenefit4: "Une approche qui renforce le moral et la volonté de guérir",
    cancerSpiritualConclusion:
      "est appliquée. Car selon nous, chaque patient n'est pas un dossier ; mais une histoire.",
    psoriasisTitle: "Comprendre le psoriasis",
    psoriasisIntro:
      "Le psoriasis est une maladie cutanée chronique causée par une réaction excessive du système immunitaire, entraînant une multiplication des cellules cutanées beaucoup plus rapide que la normale. Bien que classiquement caractérisé par des rougeurs, des squames et des démangeaisons de la peau, il s'agit d'une affection multidimensionnelle qui peut affecter non seulement la peau, mais aussi la psychologie, la vie sociale et la confiance en soi d'une personne. Par conséquent, il est important d'aborder le processus de traitement non pas seulement de la surface de la peau, mais à partir des mécanismes d'équilibre du corps.",
    psoriasisFitonovaTitle: "L'approche Fitonova face au psoriasis",
    psoriasisFitonovaIntro:
      "Le psoriasis n'est pas seulement une affection cutanée ; le système immunitaire, le stress, l'alimentation, l'équilibre hormonal et les facteurs vitaux jouent un rôle important dans la formation de cette condition. Chez Fitonova, l'objectif n'est pas de supprimer le problème, mais de soutenir l'équilibre du corps. Notre approche est basée sur les principes suivants :",
    psoriasisFitonovaBenefit1: "Soutiens naturels pour aider à réguler le système immunitaire",
    psoriasisFitonovaBenefit2:
      "Composants à base de plantes ciblant l'équilibre de la réponse inflammatoire cellulaire",
    psoriasisFitonovaBenefit3: "Ingrédients naturels qui soutiennent la barrière cutanée et favorisent la régénération",
    psoriasisFitonovaBenefit4: "Identification personnalisée des facteurs déclencheurs du psoriasis",
    psoriasisFitonovaBenefit5: "Qualité de vie durable",
    psoriasisFitonovaConclusion:
      "Fitonova ne rejette pas les traitements médicaux modernes — elle adopte un rôle complémentaire, de soutien et de renforcement.",
    // </CHANGE>
    heroSubtitle: "Découvrez une approche de santé holistique qui nourrit votre corps, votre esprit et votre âme",
    startJourney: "Commencez votre voyage",
    learnMore: "En savoir plus",

    // About
    aboutTitle: "À propos de nous",
    aboutText1:
      "Fitonova est un centre de santé holistique qui combine la puissance scientifique de la médecine moderne avec le potentiel régénérateur de la nature. Notre objectif n'est pas seulement de supprimer temporairement la maladie, mais d'atteindre une solution permanente et définitive en éliminant ses causes. Nous visons à reconstruire l'intégrité du corps, de l'esprit et de l'âme de chaque individu et à rendre la santé durable.\n\nNos médecins spécialistes combinent des méthodes de diagnostic et de traitement scientifiques avec des protocoles à base de plantes et naturels dans de nombreux groupes de maladies, principalement l'oncologie. Cette approche offre un modèle de traitement intégré qui soutient la guérison au niveau cellulaire et réactive le système de défense propre du corps.",
    aboutText2:
      "Un plan de traitement personnalisé est créé pour chacun de nos patients; ce plan est soigneusement préparé en tenant compte des résultats de laboratoire, des habitudes de vie et des antécédents médicaux. Le processus de traitement est étroitement surveillé avec des analyses scientifiques et des évaluations régulières; ainsi, le risque de récidive de la maladie est minimisé et une guérison permanente est ciblée.\n\nChez Fitonova, l'objectif n'est pas seulement de traiter, mais d'assurer la guérison et d'élever la qualité de vie de l'individu au plus haut niveau.",
    valuesTitle: "Nos valeurs",
    value1: "Approche de service éthique, fiable et transparente",
    value2: "Mélanger les connaissances scientifiques avec la puissance de la nature",
    value3: "Approche de traitement personnalisée et holistique",
    value4: "Développement continu et travail axé sur la satisfaction des patients",
    philosophyTitle: "Notre philosophie",
    philosophyText:
      "Nous croyons que les opportunités offertes par la nature produiront des résultats plus efficaces lorsqu'elles sont combinées avec la médecine moderne. Par conséquent, chacun de nos processus de traitement est mené conformément aux principes de la médecine fondée sur des preuves, dans des normes sûres et éthiques.",
    missionTitle: "Notre mission",
    missionText:
      "Offrir à nos patients la plus haute qualité de vie, produire des solutions pleines d'espoir en rassemblant les données médicales modernes et les approches de traitement naturel.",
    visionTitle: "Notre vision",
    visionText:
      "Devenir un centre de santé exemplary aux niveaux national et international avec des modèles de traitement innovants qui utilisent ensemble des méthodes naturelles et scientifiques.",

    // Services
    servicesTitle: "Maladies que nous traitons",
    servicesIntro:
      "combine la puissance diagnostique de la médecine moderne avec l'énergie régénératrice de la nature pour fournir des solutions permanentes et définitives pour de nombreuses maladies.",
    servicesGoal:
      "Notre objectif n'est pas seulement de soulager les symptômes, mais d'éliminer la cause profonde de la maladie et de rétablir l'équilibre du corps.",
    servicesDiseases:
      "Nos médecins spécialistes mettent en œuvre des programmes de traitement complets dans divers groupes de maladies, principalement l'oncologie (tous types de cancer), ainsi que l'eczéma, le psoriasis, la gangrène, les tumeurs cérébrales, la douleur chronique, les déséquilibres hormonaux et l'infertilité.",
    servicesProtocols:
      "Les protocoles de traitement personnalisés pour chaque maladie sont déterminés par une analyse scientifique et appliqués avec des composants à base de plantes qui soutiennent le renouvellement cellulaire et des méthodes fondées sur des preuves de la médecine moderne.",
    servicesBullet1:
      "Dans les traitements contre le cancer, des protocoles uniques sont utilisés qui renforcent le système immunitaire, arrêtent le développement de la tumeur et accélèrent le processus de guérison.",
    servicesBullet2:
      "Pour les maladies de la peau (psoriasis, eczéma), des solutions permanentes sont fournies avec des ingrédients à base de plantes qui réduisent la charge toxique du corps et soutiennent le renouvellement cellulaire.",
    servicesBullet3:
      "Dans les conditions avancées telles que les troubles circulatoires et la gangrène, des formulations spéciales qui augmentent la réparation des tissus visent à revitaliser les zones perdues.",
    servicesBullet4:
      "Dans le traitement de l'infertilité, des applications complémentaires sont utilisées qui régulent naturellement l'équilibre hormonal et réactivent les fonctions reproductives.",
    servicesBullet5:
      "Pour les douleurs au dos, au neck et aux articulations, des solutions définitives sont obtenues grâce à des méthodes de thérapie naturelle qui réparent les tissus nerveux et musculaires et réduisent l'inflammation.",
    servicesBullet6:
      "La thérapie par ventouses élimine les toxines du corps, accélère la circulation sanguine et fournit un effet de désintoxication général.",
    servicesBullet7:
      "La thérapie par sangsues (hirudothérapie) vise à équilibrer le système circulatoire, à réduire la douleur et à soutenir la santé vasculaire.",
    servicesConclusion:
      "Chez Fitonova, chaque maladie est considérée non seulement comme une condition médicale, mais comme le début d'un voyage pour retrouver la santé.",
    servicesApproach:
      "Nous gérons ce voyage pour chacun de nos patients avec une approche scientifique, naturelle et axée sur les résultats.",

    // Doctors
    doctorsTitle: "Membres de notre équipe",
    doctorsSubtitle: "Spécialistes experts en phytothérapie dédiés à votre santé et votre bien-être",
    doctor1Name: "Talat Mollaoğlu",
    doctor1Specialty: "Assistant",
    doctor1Badge1: "30+ ans",
    doctor1Badge2: "Nombreux succès",
    doctor1Bio:
      "Avec plus de 30 ans d'expérience en phytothérapie et en traitement à base de plantes. En tant que fondateur de notre clinique et architecte des méthodes de traitement, il a apporté espoir et santé à des milliers de patients.",
    doctor2Name: "Ahmet Murat Dığış",
    doctor2Specialty: "Pharmacien Pharmacologue",
    doctor2Bio:
      "Expert en interactions médicament-plante et approches pharmacothérapeutiques. Travaille pour assurer une utilisation sûre et efficace des médicaments dans les processus de traitement des patients.",
    doctor3Name: "Aleyna Zeynep Tuhan",
    doctor3Specialty: "Infirmière",
    doctor3Bio:
      "Infirmière experte en soins aux patients et en gestion des processus de traitement. Surveille de près le confort et les processus de récupération des patients, servant de partie indispensable de l'équipe de traitement.",
    doctor4Name: "Serdar Erkal",
    doctor4Specialty: "Spécialiste en biochimie médicale",
    doctor4Bio:
      "Expert en biochimie médicale et méthodes de diagnostic de laboratoire. Travaille pour soutenir le diagnostic biochimique des maladies et les processus de traitement avec des analyses scientifiques.",
    doctor5Name: "Ercan Demir",
    doctor5Specialty: "Spécialiste en ventouses, hirudothérapie et massage",
    doctor5Bio:
      "Médecin spécialiste en thérapie par ventouses (hijama), hirudothérapie (thérapie par sangsues) et massage thérapeutique. Combine les méthodes de traitement traditionnelles avec des approches médicales modernes pour améliorer la gestion de la douleur, les problèmes de circulation et l'état de santé général des patients.",

    // Gallery
    galleryTitle: "Notre galerie",
    gallerySubtitle: "Découvrez des moments de santé, de transformation et de vie saine de notre communauté",
    testimonialsTitle: "Touches Miraculeuses",
    // </CHANGE>

    // CTA
    ctaTitle: "Prêt à prendre rendez-vous?",
    ctaSubtitle: "Appelez-nous pour planifier votre consultation avec nos spécialistes en phytothérapie.",
    callUs: "Appelez-nous:",
    workingHoursTitle: "Heures d'ouverture",
    weekdays: "Jours de semaine",
    saturday: "Samedi",
    sunday: "Dimanche",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "Traitement à heures flexibles",

    // Footer
    footerTagline: "Votre partenaire de confiance en santé et bien-être holistiques.",
    footerAddress: "Adresse",
    footerAddressText: "Murat Reis Mah. Nuhkuyu Cad. No:255/2 Bağlarbaşı/Üsküdar",
    footerContact: "Contact",
    footerSocialMedia: "Réseaux sociaux",
    footerCopyright: "© 2025 Unité de service de santé Fitonova. Tous droits réservés.",
    footerLegal: "Documents légaux et politiques",
    footerPrivacy: "Politique de confidentialité", // Added missing footer link translations
    footerTerms: "Nos documents", // Added missing footer link translations
    footerKVKK: "Texte de divulgation GDPR", // Added missing footer link translations
    cookieBanner: {
      title: "Utilisation des cookies",
      description:
        "Nous utilisons des cookies sur notre site Web pour améliorer votre expérience et effectuer des analyses. En continuant, vous acceptez l'utilisation de cookies.",
      acceptAll: "Tout accepter",
      rejectAll: "Rejeter",
      learnMore: "En savoir plus",
    },
  },
  zh: {
    // Header
    brandName: "活力",
    navServices: "服务",
    navAbout: "关于",
    navContact: "联系",
    getStarted: "开始",
    navHome: "首页",
    navAboutUs: "关于我们",
    navOurServices: "我们的服务",
    navOurDoctor: "我们的团队",
    navGallery: "画廊",
    navAppointment: "预约",
    makeAppointment: "预约",
    navDocuments: "我们的文件", // Added documents menu link

    // Hero
    heroTitle: "一段旅程的名字：塔拉特·莫拉奥卢",
    // Adding hero slider translations for Chinese
    heroSlide1Title: "癌症治疗中的自然疗愈配方",
    heroSlide1Alt: "癌症类型",
    heroSlide2Title: "银屑病成因多，自然界单一疗法",
    heroSlide2Alt: "银屑病治疗",
    heroSlide3Title: "自然界最古老的疗法，现代生活的需求",
    heroSlide3Alt: "拔罐疗法",
    heroSlide4Title: "蚂蟥疗法：治愈的微小奇迹",
    heroSlide4Alt: "蚂蟥疗法",
    heroSlide5Title: "科学与发现之名：塔拉特·莫拉奥卢",
    heroSlide5Alt: "塔拉特·莫拉奥卢",
    // </CHANGE>
    learnMoreButton: "了解更多",
    backToHome: "返回首页",
    cancerTreatmentTitle: "癌症治疗",
    cancerTreatmentIntro:
      "癌症是一种复杂的疾病，其特征是体内细胞失控增殖，并且在每个人身上表现不同。这场旅程不仅包含身体上的，还包含情感和心理上的层面。因此，重要的是要以一种以人为中心的整体方法来对待治疗过程，而不仅仅是关注疾病本身。",
    cancerFitonovaTitle: "菲托诺瓦的癌症治疗方法",
    cancerFitonovaApproach:
      "菲托诺瓦不排斥现代医学治疗。相反，它旨在通过自然的辅助潜力来增强其力量。科学研究中发现的植物活性成分、增强免疫系统的天然成分以及支持新陈代谢平衡的方案，都会在专家评估后为患者量身定制。",
    // </CHANGE>
    cancerHerbalSupportTitle: "草药支持在癌症治疗中提供什么？",
    cancerHerbalBenefit1: "有助于增强免疫力",
    cancerHerbalBenefit2: "可支持缓解治疗副作用引起的虚弱、食欲不振和睡眠障碍",
    cancerHerbalBenefit3: "可促进细胞防御能力的增强",
    cancerHerbalBenefit4: "可在治疗过程中增强身心韧性",
    cancerHerbalConclusion: "这种方法的主要目标是在保持患者生活质量的同时支持愈合过程。",
    cancerSpiritualTitle: "精神和心理支持",
    cancerSpiritualIntro:
      "癌症不仅仅是一种身体疾病。这个过程是一段在希望、恐惧、力量、疲惫和重生之间摇摆的人类旅程。因此，在Fitonova：",
    cancerSpiritualBenefit1: "旨在维护患者情感力量的咨询",
    cancerSpiritualBenefit2: "治疗过程中提高动力的支持计划",
    cancerSpiritualBenefit3: "家庭和环境信息",
    cancerSpiritualBenefit4: "一种增强士气和治愈意愿的方法",
    cancerSpiritualConclusion: "被应用。因为在我们看来，每个患者不是一份文件；而是一个故事。",
    psoriasisTitle: "理解银屑病",
    psoriasisIntro:
      "银屑病是一种慢性皮肤病，由免疫系统过度反应引起，导致皮肤细胞的增殖速度远超正常。虽然经典表现为皮肤发红、脱屑和瘙痒，但它是一种多方面的疾病，不仅影响皮肤，还可能影响个人的心理、社交生活和自信心。因此，重要的是要从身体的平衡机制出发来处理治疗过程，而不仅仅是皮肤表面。",
    psoriasisFitonovaTitle: "菲托诺瓦的银屑病治疗方法",
    psoriasisFitonovaIntro:
      "银屑病不仅仅是一种皮肤状况；免疫系统、压力、饮食、荷尔蒙平衡和生命因素在塑造这种状况方面起着重要作用。在Fitonova，我们的目标不是压制问题，而是支持身体的平衡。我们的方法基于以下原则：",
    psoriasisFitonovaBenefit1: "有助于调节免疫系统的自然支持",
    psoriasisFitonovaBenefit2: "针对细胞炎症反应平衡的植物成分",
    psoriasisFitonovaBenefit3: "支持皮肤屏障和促进再生的天然成分",
    psoriasisFitonovaBenefit4: "银屑病诱发因素的个性化识别",
    psoriasisFitonovaBenefit5: "可持续的生活质量",
    psoriasisFitonovaConclusion: "菲托诺瓦不排斥现代医学治疗——它发挥着补充、支持和加强的作用。",
    // </CHANGE>
    heroSubtitle: "发现滋养您的身体、思想和灵魂的整体健康方法",
    startJourney: "开始您的旅程",
    learnMore: "了解更多",

    // About
    aboutTitle: "关于我们",
    aboutText1:
      "Fitonova是一个整体健康中心，将现代医学的科学力量与自然的再生潜力相结合。我们的目标不仅是暂时抑制疾病，而是通过消除其原因来实现永久和明确的解决方案。我们旨在重建每个人的身体、思想和灵魂的完整性，并使健康可持续。\n\n我们的专科医生在许多疾病组中将科学诊断和治疗方法与草本和自然方案相结合，主要是肿瘤学。这种方法提供了一个综合治疗模型，支持细胞水平的愈合并重新激活身体自身的防御系统。",
    aboutText2:
      "为我们的每位患者创建个性化治疗计划；该计划经过仔细准备，考虑到实验室结果、生活习惯和病史。治疗过程通过科学分析和定期评估进行密切监测；因此，疾病复发的风险被最小化，并针对永久愈合。\n\n在Fitonova，目标不仅是治疗，而是确保愈合并将个人的生活质量提升到最高水平。",
    valuesTitle: "我们的价值观",
    value1: "道德、可靠和透明的服务方法",
    value2: "将科学知识与自然力量相结合",
    value3: "个性化和整体治疗方法",
    value4: "持续发展和以患者满意度为中心的工作",
    philosophyTitle: "我们的哲学",
    philosophyText:
      "我们相信，当与现代医学结合时，自然提供的机会将产生更有效的结果。因此，我们的每个治疗过程都按照循证医学原则进行，符合安全和道德标准。",
    missionTitle: "我们的使命",
    missionText: "为我们的患者提供最高的生活质量，通过将现代医学数据和自然治疗方法结合起来，产生充满希望的解决方案。",
    visionTitle: "我们的愿景",
    visionText: "成为一个在国家和国际层面上以创新治疗模式为榜样的健康中心，该模式将自然和科学方法结合使用。",

    // Services
    servicesTitle: "我们治疗的疾病",
    servicesIntro: "将现代医学的诊断力量与自然的再生能量相结合，为许多疾病提供永久和明确的解决方案。",
    servicesGoal: "我们的目标不仅是缓解症状，而是消除疾病的根本原因并恢复身体平衡。",
    servicesDiseases:
      "我们的专科医生在各种疾病组中实施全面的治疗计划，主要是肿瘤学（所有类型的癌症），以及湿疹、牛皮癣、坏疽、脑肿瘤、慢性疼痛、激素失衡和不孕症。",
    servicesProtocols:
      "每种疾病的个性化治疗方案通过科学分析确定，并与支持细胞更新的草本成分和现代医学的循证方法一起应用。",
    servicesBullet1: "在癌症治疗中，使用独特的方案来增强免疫系统、阻止肿瘤发展并加速愈合过程。",
    servicesBullet2: "对于皮肤病（牛皮癣、湿疹），通过减少身体毒素负荷和支持细胞更新的草本成分提供永久解决方案。",
    servicesBullet3: "在循环障碍和坏疽等晚期情况下，增加组织修复的特殊配方旨在使失去的区域恢复活力。",
    servicesBullet4: "在不孕症治疗中，使用自然调节激素平衡并重新激活生殖功能的补充应用。",
    servicesBullet5: "对于背部、颈部和关节疼痛，通过修复神经和肌肉组织并减少炎症的自然疗法方法实现最终解决方案。",
    servicesBullet6: "拔罐疗法从身体中去除毒素，加速血液循环，并提供一般排毒效果。",
    servicesBullet7: "蚂蟥疗法（蚂蟥疗法）旨在平衡循环系统、减轻疼痛并支持血管健康。",
    servicesConclusion: "在Fitonova，每种疾病不仅被视为医疗状况，而且被视为重新获得健康的旅程的开始。",
    servicesApproach: "我们以科学、自然和以结果为导向的方法为每位患者管理这一旅程。",

    // Doctors
    doctorsTitle: "我们的团队成员",
    doctorsSubtitle: "致力于您的健康和福祉的专家植物疗法专家",
    doctor1Name: "塔拉特·莫拉奥卢",
    doctor1Specialty: "助理",
    doctor1Badge1: "30多年",
    doctor1Badge2: "众多成功",
    doctor1Bio:
      "在植物疗法和草本治疗方面拥有30多年的经验。作为我们诊所的创始人和治疗方法的设计师，他为成千上万的患者带来了希望和健康。",
    doctor2Name: "艾哈迈德·穆拉特·迪吉什",
    doctor2Specialty: "药剂师药理学家",
    doctor2Bio: "药物-植物相互作用和药物治疗方法的专家。致力于确保患者治疗过程中安全有效的药物使用。",
    doctor3Name: "阿莱娜·泽伊内普·图汉",
    doctor3Specialty: "护士",
    doctor3Bio: "患者护理和治疗过程管理方面的专家护士。密切监测患者的舒适度和康复过程，作为治疗团队不可或缺的一部分。",
    doctor4Name: "塞尔达尔·埃尔卡尔",
    doctor4Specialty: "医学生物化学专家",
    doctor4Bio: "医学生物化学和实验室诊断方法专家。致力于通过科学分析支持疾病的生化诊断和治疗过程。",
    doctor5Name: "埃尔坎·德米尔",
    doctor5Specialty: "拔罐、蚂蟥疗法和按摩专家",
    doctor5Bio:
      "拔罐疗法（拔罐）、蚂蟥疗法（蚂蟥疗法）和治疗性按摩专科医生。将传统治疗方法与现代医学方法相结合，以改善患者的疼痛管理、循环问题和整体健康状况。",

    // Gallery
    galleryTitle: "我们的画廊",
    gallerySubtitle: "从我们的社区中发现健康、转变和健康生活的时刻",
    testimonialsTitle: "奇迹之触",
    // </CHANGE>

    // CTA
    ctaTitle: "准备好预约了吗？",
    ctaSubtitle: "致电我们安排与我们的植物疗法专家的咨询。",
    callUs: "致电我们：",
    workingHoursTitle: "工作时间",
    weekdays: "工作日",
    saturday: "星期六",
    sunday: "星期日",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "灵活时间治疗",

    // Footer
    footerTagline: "您在整体健康和福祉方面值得信赖的合作伙伴。",
    footerAddress: "地址",
    footerAddressText: "穆拉特雷斯街努赫库尤街255/2巴拉尔巴什/于斯屈达尔",
    footerContact: "联系",
    footerSocialMedia: "社交媒体",
    footerCopyright: "© 2025 Fitonova健康服务单位。保留所有权利。",
    footerLegal: "法律文本和政策",
    footerPrivacy: "隐私政策", // Added missing footer link translations
    footerTerms: "我们的文件", // Added missing footer link translations
    footerKVKK: "GDPR披露文本", // Added missing footer link translations
    cookieBanner: {
      title: "Cookie 使用",
      description: "我们在网站上使用 Cookie 来改善您的体验并进行分析。继续使用即表示您接受 Cookie 的使用。",
      acceptAll: "全部接受",
      rejectAll: "拒绝",
      learnMore: "了解更多",
    },
  },
  ja: {
    // Header
    brandName: "活力",
    navServices: "サービス",
    navAbout: "について",
    navContact: "お問い合わせ",
    getStarted: "始める",
    navHome: "ホーム",
    navAboutUs: "私たちについて",
    navOurServices: "私たちのサービス",
    navOurDoctor: "私たちのチーム",
    navGallery: "ギャラリー",
    navAppointment: "予約する",
    makeAppointment: "予約する",
    navDocuments: "私たちの文書", // Added documents menu link

    // Hero
    heroTitle: "旅の名前：タラト・モラオール",
    // Adding hero slider translations for Japanese
    heroSlide1Title: "癌との闘いにおける自然の治癒処方",
    heroSlide1Alt: "癌の種類",
    heroSlide2Title: "乾癬は多い、自然界に一つの治療法",
    heroSlide2Alt: "乾癬治療",
    heroSlide3Title: "自然界最古の治療法、現代生活の必要性",
    heroSlide3Alt: "カッピング療法",
    heroSlide4Title: "ヒル療法：癒しのマイクロミラクル",
    heroSlide4Alt: "ヒル療法",
    heroSlide5Title: "科学と発見の名前：タラト・モラオール",
    heroSlide5Alt: "タラト・モラオール",
    // </CHANGE>
    learnMoreButton: "もっと詳しく",
    backToHome: "ホームに戻る",
    cancerTreatmentTitle: "癌治療",
    cancerTreatmentIntro:
      "癌は、体内の細胞が無秩序に増殖することによって発生する複雑な疾患であり、個人によって進行が異なります。この旅には、身体的な側面だけでなく、感情的および心理的な側面も含まれます。したがって、治療プロセスには、病気だけに焦点を当てるのではなく、人間を中心に据えた全体的なアプローチで臨むことが重要です。",
    cancerFitonovaTitle: "Fitonovaの癌へのアプローチ",
    cancerFitonovaApproach:
      "Fitonovaは現代医学の治療法を否定しません。むしろ、自然の補完的な可能性をもってその力をサポートすることを目指しています。科学的研究に含まれる植物由来の有効成分、免疫システムを強化する天然成分、そして代謝バランスをサポートするプロトコルは、専門家の評価に基づいて個別に適用されます。",
    // </CHANGE>
    cancerHerbalSupportTitle: "癌治療におけるハーブサポートは何を提供しますか？",
    cancerHerbalBenefit1: "免疫力を強化するのに役立ちます",
    cancerHerbalBenefit2: "治療の副作用による衰弱、食欲不振、睡眠障害の緩和をサポートできます",
    cancerHerbalBenefit3: "細胞防御の強化に貢献できます",
    cancerHerbalBenefit4: "治療プロセス中の身体的および精神的な回復力を強化できます",
    cancerHerbalConclusion:
      "このアプローチの主な目的は、個人の生活の質を維持しながら、治癒プロセスをサポートすることです。",
    cancerSpiritualTitle: "精神的および心理的サポート",
    cancerSpiritualIntro:
      "癌は単なる身体的な病気ではありません。このプロセスは、希望、恐れ、強さ、疲労、そして再生の間を揺れ動く人間の旅です。だからこそFitonovaでは：",
    cancerSpiritualBenefit1: "患者の感情的な強さを維持するためのカウンセリング",
    cancerSpiritualBenefit2: "治療プロセス中のモチベーションを高めるサポートプログラム",
    cancerSpiritualBenefit3: "家族と周囲への情報提供",
    cancerSpiritualBenefit4: "士気と回復への意欲を高めるアプローチ",
    cancerSpiritualConclusion:
      "が適用されます。なぜなら、私たちの意見では、すべての患者はファイルではなく、物語なのです。",
    psoriasisTitle: "乾癬を理解する",
    psoriasisIntro:
      "乾癬は、免疫システムが過剰反応することによって引き起こされる慢性的な皮膚疾患であり、皮膚細胞が通常よりもはるかに速く増殖します。古典的には皮膚の発赤、鱗屑、かゆみを特徴としますが、皮膚だけでなく、個人の心理、社会生活、自己肯定感にも影響を与える可能性のある多面的な状態です。したがって、治療プロセスには、皮膚の表面からだけでなく、体のバランスメカニズムからアプローチすることが重要です。",
    psoriasisFitonovaTitle: "Fitonovaの乾癬へのアプローチ",
    psoriasisFitonovaIntro:
      "乾癬は単なる皮膚疾患ではありません。免疫システム、ストレス、食事、ホルモンバランス、そして生命要因がこの状態の形成に重要な役割を果たします。Fitonovaでは、問題を押さえつけるのではなく、体のバランスをサポートすることを目的としています。私たちのアプローチは次の原則に基づいています：",
    psoriasisFitonovaBenefit1: "免疫システムを調節するのを助ける自然なサポート",
    psoriasisFitonovaBenefit2: "細胞の炎症反応のバランスをターゲットとする植物成分",
    psoriasisFitonovaBenefit3: "皮膚バリアをサポートし、再生を促進する天然成分",
    psoriasisFitonovaBenefit4: "乾癬を誘発する要因の個別特定",
    psoriasisFitonovaBenefit5: "持続可能な生活の質",
    psoriasisFitonovaConclusion:
      "Fitonovaは現代医学の治療法を否定しません—それらは補完的、支持的、そして強化的な役割を果たします。",
    // </CHANGE>
    heroSubtitle: "あなたの体、心、魂を養う総合的な健康アプローチを発見してください",
    startJourney: "あなたの旅を始めましょう",
    learnMore: "もっと詳しく",

    // About
    aboutTitle: "私たちについて",
    aboutText1:
      "Fitonovaは、現代医学の科学的力と自然の再生可能性を組み合わせた総合的な健康センターです。私たちの目標は、病気を一時的に抑制するだけでなく、その原因を排除することによって永続的で決定的な解決策を達成することです。私たちは、各個人の体、心、魂の完全性を再構築し、健康を持続可能にすることを目指しています。\n\n私たちの専門医は、主に腫瘍学を含む多くの病気グループで科学的診断と治療方法をハーブと自然のプロトコルと組み合わせています。このアプローチは、細胞レベルでの治癒をサポートし、体自身の防御システムを再活性化する統合治療モデルを提供します。",
    aboutText2:
      "各患者のために個別化された治療計画が作成されます。この計画は、実験室の結果、生活習慣、病歴を考慮して慎重に準備されます。治療プロセスは、科学的分析と定期的な評価によって密接に監視されます。したがって、病気の再発リスクが最小化され、永続的な治癒が目標とされます。\n\nFitonovaでは、目標は治療するだけでなく、治癒を確実にし、個人の生活の質を最高レベルに引き上げることです。",
    valuesTitle: "私たちの価値観",
    value1: "倫理的、信頼性が高く、透明なサービスアプローチ",
    value2: "科学的知識と自然の力を融合する",
    value3: "個別化された総合的な治療アプローチ",
    value4: "継続的な開発と患者満足度重視の作業",
    philosophyTitle: "私たちの哲学",
    philosophyText:
      "私たちは、自然が提供する機会が現代医学と組み合わされたときにより効果的な結果を生み出すと信じています。したがって、私たちの各治療プロセスは、エビデンスに基づく医学原則に従って、安全で倫理的な基準で実施されます。",
    missionTitle: "私たちの使命",
    missionText:
      "患者に最高の生活の質を提供し、現代医学データと自然治療アプローチを組み合わせて希望に満ちた解決策を生み出すこと。",
    visionTitle: "私たちのビジョン",
    visionText:
      "自然と科学的方法を一緒に使用する革新的な治療モデルで、国内および国際レベルで模範的な健康センターになること。",

    // Services
    servicesTitle: "私たちが治療する病気",
    servicesIntro:
      "現代医学の診断力と自然の再生エネルギーを組み合わせて、多くの病気に対する永続的で決定的な解決策を提供します。",
    servicesGoal: "私たちの目標は、症状を和らげるだけでなく、病気の根本原因を排除し、体のバランスを回復することです。",
    servicesDiseases:
      "私たちの専門医は、主に腫瘍学（すべてのタイプの癌）、湿疹、乾癬、壊疽、脳腫瘍、慢性疼痛、ホルモン不均衡、不妊症など、さまざまな病気グループで包括的な治療プログラムを実施しています。",
    servicesProtocols:
      "各病気の個別化された治療プロトコルは、科学的分析によって決定され、細胞の再生をサポートするハーブ成分と現代医学のエビデンスに基づく方法とともに適用されます。",
    servicesBullet1:
      "癌治療では、免疫システムを強化し、腫瘍の発達を止め、治癒プロセスを加速するユニークなプロトコルが使用されます。",
    servicesBullet2:
      "皮膚疾患（乾癬、湿疹）の場合、体の毒素負荷を減らし、細胞の再生をサポートするハーブ成分で永続的な解決策が提供されます。",
    servicesBullet3:
      "循環障害や壊疽などの進行した状態では、組織修復を増加させる特別な製剤が失われた領域を活性化することを目指しています。",
    servicesBullet4:
      "不妊治療では、ホルモンバランスを自然に調整し、生殖機能を再活性化する補完的なアプリケーションが使用されます。",
    servicesBullet5:
      "背中、首、関節の痛みには、神経と筋肉組織を修復し、炎症を減らす自然療法方法によって最終的な解決策が達成されます。",
    servicesBullet6: "カッピング療法は体から毒素を除去し、血液循環を加速し、一般的なデトックス効果を提供します。",
    servicesBullet7:
      "ヒル療法（ヒルド療法）は、循環系のバランスを取り、痛みを軽減し、血管の健康をサポートすることを目指しています。",
    servicesConclusion:
      "Fitonovaでは、すべての病気は単なる医学的状態としてではなく、健康を取り戻す旅の始まりとして見られています。",
    servicesApproach: "私たちは、各患者のためにこの旅を科学的、自然的、結果志向のアプローチで管理しています。",

    // Doctors
    doctorsTitle: "私たちのチームメンバー",
    doctorsSubtitle: "あなたの健康と幸福に専念する専門の植物療法専門家",
    doctor1Name: "タラト・モラオール",
    doctor1Specialty: "アシスタント",
    doctor1Badge1: "30年以上",
    doctor1Badge2: "多数の成功",
    doctor1Bio:
      "植物療法とハーブ治療で30年以上の経験を持つ。私たちのクリニックの創設者であり、治療方法の設計者として、何千人もの患者に希望と健康をもたらしました。",
    doctor2Name: "アフメット・ムラット・ディギシュ",
    doctor2Specialty: "薬剤師薬理学者",
    doctor2Bio:
      "薬物-植物相互作用と薬物療法アプローチの専門家。患者の治療プロセスで安全で効果的な薬物使用を確保するために働いています。",
    doctor3Name: "アレイナ・ゼイネプ・トゥハン",
    doctor3Specialty: "看護師",
    doctor3Bio:
      "患者ケアと治療プロセス管理の専門看護師。患者の快適さと回復プロセスを密接に監視し、治療チームの不可欠な部分として機能します。",
    doctor4Name: "セルダル・エルカル",
    doctor4Specialty: "医学生化学専門家",
    doctor4Bio:
      "医学生化学と実験室診断方法の専門家。科学的分析で疾患の生化学的診断と治療プロセスをサポートするために働いています。",
    doctor5Name: "エルジャン・デミル",
    doctor5Specialty: "カッピング、ヒル療法、マッサージ専門家",
    doctor5Bio:
      "カッピング療法（ヒジャマ）、ヒル療法（ヒルド療法）、治療マッサージの専門医。伝統的な治療方法と現代の医学的アプローチを組み合わせて、患者の痛み管理、循環問題、全体的な健康状態を改善するために働いています。",

    // Gallery
    galleryTitle: "私たちのギャラリー",
    gallerySubtitle: "私たちのコミュニティから健康、変革、健康的な生活の瞬間を発見してください",
    testimonialsTitle: "奇跡のタッチ",
    // </CHANGE>

    // CTA
    ctaTitle: "予約する準備はできましたか？",
    ctaSubtitle: "植物療法専門家との相談をスケジュールするために私たちに電話してください。",
    callUs: "お電話ください：",
    workingHoursTitle: "営業時間",
    weekdays: "平日",
    saturday: "土曜日",
    sunday: "日曜日",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "フレキシブル時間治療",

    // Footer
    footerTagline: "総合的な健康と幸福における信頼できるパートナー。",
    footerAddress: "住所",
    footerAddressText: "ムラットレイスマハヌフクユカド255/2バーラルバシュ/ユスキュダル",
    footerContact: "お問い合わせ",
    footerSocialMedia: "ソーシャルメディア",
    footerCopyright: "© 2025 Fitonova健康サービスユニット。全著作権所有。",
    footerLegal: "法的テキストとポリシー",
    footerPrivacy: "プライバシーポリシー", // Added missing footer link translations
    footerTerms: "私たちの文書", // Added missing footer link translations
    footerKVKK: "GDPR開示テキスト", // Added missing footer link translations
    cookieBanner: {
      title: "Cookieの使用",
      description:
        "当社のウェブサイトでは、エクスペリエンスを向上させ、分析を実行するためにCookieを使用しています。続行することにより、Cookieの使用に同意したことになります。",
      acceptAll: "すべて承諾",
      rejectAll: "拒否",
      learnMore: "もっと詳しく",
    },
  },
  ru: {
    // Header
    brandName: "Жизненная сила",
    navServices: "Услуги",
    navAbout: "О нас",
    navContact: "Контакты",
    getStarted: "Начать",
    navHome: "Главная",
    navAboutUs: "О нас",
    navOurServices: "Наши услуги",
    navOurDoctor: "Наша команда",
    navGallery: "Галерея",
    navAppointment: "Записаться на прием",
    makeAppointment: "Записаться на прием",
    navDocuments: "Наши документы", // Added documents menu link

    // Hero
    heroTitle: "Название путешествия: Талат Моллаоглу",
    heroSlide1Title: "Формула исцеления природы в борьбе с раком",
    heroSlide1Alt: "Типы рака",
    heroSlide2Title: "Много случаев псориаза, одно лекарство в природе",
    heroSlide2Alt: "Лечение псориаза",
    heroSlide3Title: "Древнейшее лекарство природы, потребность современной жизни",
    heroSlide3Alt: "Банночная терапия",
    heroSlide4Title: "Пиявка терапия: Микро-чудо, которое исцеляет",
    heroSlide4Alt: "Пиявка терапия",
    heroSlide5Title: "Имя науки и открытий: Талат Моллаоглу",
    heroSlide5Alt: "Талат Моллаоглу",
    // </CHANGE>
    learnMoreButton: "Узнать больше",
    backToHome: "Вернуться на главную",
    cancerTreatmentTitle: "Лечение рака",
    cancerTreatmentIntro:
      "Рак — это сложное заболевание, которое развивается из-за неконтролируемого размножения клеток в организме и протекает у каждого человека по-разному. Это путешествие включает в себя не только физические, но и эмоциональные и психологические аспекты. Поэтому важно подходить к процессу лечения не только с точки зрения болезни, но и с целостным подходом, ориентированным на человека.",
    cancerFitonovaTitle: "Подход Fitonova к лечению рака",
    cancerFitonovaApproach:
      "Fitonova не отвергает современные методы лечения. Напротив, он стремится поддержать их силу дополнительным потенциалом природы. Растительные активные ингредиенты, участвующие в научных исследованиях, натуральные компоненты, укрепляющие иммунную систему, и протоколы, поддерживающие метаболический баланс, применяются индивидуально после оценки экспертов.",
    // </CHANGE>
    cancerHerbalSupportTitle: "Что обеспечивает растительная поддержка при лечении рака?",
    cancerHerbalBenefit1: "Может помочь укрепить иммунитет",
    cancerHerbalBenefit2:
      "Может способствовать облегчению слабости, потери аппетита и нарушений сна, вызванных побочными эффектами лечения",
    cancerHerbalBenefit3: "Может способствовать усилению клеточной защиты",
    cancerHerbalBenefit4: "Может укрепить физическую и умственную устойчивость в процессе лечения",
    cancerHerbalConclusion:
      "Основная цель этого подхода - поддержать процесс исцеления при сохранении качества жизни человека.",
    cancerSpiritualTitle: "Духовная и психологическая поддержка",
    cancerSpiritualIntro:
      "Рак - это не просто физическое заболевание. Этот процесс - человеческое путешествие, колеблющееся между надеждой, страхом, силой, усталостью и возрождением. Поэтому в Fitonova:",
    cancerSpiritualBenefit1: "Консультации, направленные на поддержание эмоциональной силы пациента",
    cancerSpiritualBenefit2: "Программы поддержки, повышающие мотивацию в процессе лечения",
    cancerSpiritualBenefit3: "Информация для семьи и окружения",
    cancerSpiritualBenefit4: "Подход, укрепляющий моральный дух и желание исцелиться",
    cancerSpiritualConclusion: "применяется. Потому что, по нашему мнению, каждый пациент - это не досье, а история.",
    psoriasisTitle: "Понимание псориаза",
    psoriasisIntro:
      "Псориаз — это хроническое кожное заболевание, вызванное чрезмерной реакцией иммунной системы, которая приводит к гораздо более быстрому размножению клеток кожи, чем обычно. Хотя классически он характеризуется покраснением, шелушением и зудом кожи, это многогранное состояние, которое может влиять не только на кожу, но и на психологию человека, его социальную жизнь и уверенность в себе. Поэтому важно подходить к процессу лечения не только с поверхности кожи, но и с механизмов баланса организма.",
    psoriasisFitonovaTitle: "Подход Fitonova к лечению псориаза",
    psoriasisFitonovaIntro:
      "Псориаз — это не просто кожное заболевание; иммунная система, стресс, диета, гормональный баланс и жизненно важные факторы играют важную роль в формировании этого состояния. В Fitonova цель состоит не в том, чтобы подавить проблему, а в том, чтобы поддержать баланс организма. Наш подход основан на следующих принципах:",
    psoriasisFitonovaBenefit1: "Натуральная поддержка для помощи в регуляции иммунной системы",
    psoriasisFitonovaBenefit2:
      "Растительные компоненты, направленные на балансировку клеточного воспалительного ответа",
    psoriasisFitonovaBenefit3: "Натуральные ингредиенты, поддерживающие кожный барьер и способствующие регенерации",
    psoriasisFitonovaBenefit4: "Индивидуальное определение факторов, провоцирующих псориаз",
    psoriasisFitonovaBenefit5: "Устойчивое качество жизни",
    psoriasisFitonovaConclusion:
      "Fitonova не отвергает современные методы лечения — оно играет дополнительную, поддерживающую и укрепляющую роль.",
    // </CHANGE>
    heroSubtitle: "Откройте для себя целостный подход к здоровью, который питает ваше тело, разум и душу",
    startJourney: "Начните свое путешествие",
    learnMore: "Узнать больше",

    // About
    aboutTitle: "О нас",
    aboutText1:
      "Fitonova - это целостный центр здоровья, который сочетает научную силу современной медицины с регенеративным потенциалом природы. Наша цель - не просто временно подавить болезнь, но достичь постоянного и окончательного решения, устранив ее причины. Мы стремимся восстановить целостность тела, разума и души каждого человека и сделать здоровье устойчивым.\n\nНаши врачи-специалисты сочетают научные методы диагностики и лечения с растительными и натуральными протоколами во многих группах заболеваний, в первую очередь в онкологии. Этот подход предлагает интегрированную модель лечения, которая поддерживает заживление на клеточном уровне и реактивирует собственную защитную систему организма.",
    aboutText2:
      "Для каждого из наших пациентов создается персонализированный план лечения; этот план тщательно подготовлен с учетом лабораторных результатов, привычек образа жизни и истории болезни. Процесс лечения тщательно контролируется с помощью научных анализов и регулярных оценок; таким образом, риск рецидива заболевания сводится к минимуму, и целью является постоянное заживление.\n\nВ Fitonova цель состоит не только в лечении, но и в обеспечении заживления и повышении качества жизни человека до самого высокого уровня.",
    valuesTitle: "Наши ценности",
    value1: "Этичный, надежный и прозрачный подход к обслуживанию",
    value2: "Сочетание научных знаний с силой природы",
    value3: "Персонализированный и целостный подход к лечению",
    value4: "Постоянное развитие и работа, ориентированная на удовлетворенность пациентов",
    philosophyTitle: "Наша философия",
    philosophyText:
      "Мы верим, что возможности, предлагаемые природой, дадут более эффективные результаты в сочетании с современной медициной. Поэтому каждый из наших процессов лечения проводится в соответствии с принципами доказательной медицины, в безопасных и этических стандартах.",
    missionTitle: "Наша миссия",
    missionText:
      "Предложить нашим пациентам высочайшее качество жизни, производить обнадеживающие решения, объединяя современные медицинские данные и подходы к естественному лечению.",
    visionTitle: "Наше видение",
    visionText:
      "Стать центром здоровья, который является образцовым на национальном и международном уровнях с инновационными моделями лечения, которые используют естественные и научные методы вместе.",

    // Services
    servicesTitle: "Болезни, которые мы лечим",
    servicesIntro:
      "сочетает диагностическую силу современной медицины с регенеративной энергией природы для обеспечения постоянных и окончательных решений для многих заболеваний.",
    servicesGoal:
      "Наша цель - не просто облегчить симптомы, но устранить первопричину заболевания и восстановить баланс организма.",
    servicesDiseases:
      "Наши врачи-специалисты реализуют комплексные программы лечения в различных группах заболеваний, в первую очередь онкологии (все виды рака), а также экземы, псориаза, гангрены, опухолей мозга, хронической боли, гормональных дисбалансов и бесплодия.",
    servicesProtocols:
      "Персонализированные протоколы лечения для каждого заболевания определяются с помощью научного анализа и применяются вместе с растительными компонентами, которые поддерживают клеточное обновление, и методами современной медицины, основанными на доказательствах.",
    servicesBullet1:
      "В лечении рака используются уникальные протоколы, которые укрепляют иммунную систему, останавливают развитие опухоли и ускоряют процесс заживления.",
    servicesBullet2:
      "При кожных заболеваниях (псориаз, экзема) предоставляются постоянные решения с растительными ингредиентами, которые уменьшают токсическую нагрузку на организм и поддерживают обновление клеток.",
    servicesBullet3:
      "В запущенных состояниях, таких как нарушения кровообращения и гангрена, специальные составы, которые увеличивают восстановление тканей, направлены на оживление потерянных областей.",
    servicesBullet4:
      "При лечении бесплодия используются дополнительные приложения, которые естественным образом регулируют гормональный баланс и реактивируют репродуктивные функции.",
    servicesBullet5:
      "При болях в спине, шее и суставах окончательные решения достигаются с помощью методов естественной терапии, которые восстанавливают нервные и мышечные ткани и уменьшают воспаление.",
    servicesBullet6:
      "Баночная терапия удаляет токсины из организма, ускоряет кровообращение и обеспечивает общий детокс-эффект.",
    servicesBullet7:
      "Гирудотерапия (лечение пиявками) направлена на балансировку системы кровообращения, уменьшение боли и поддержку здоровья сосудов.",
    servicesConclusion:
      "В Fitonova каждое заболевание рассматривается не только как медицинское состояние, но и как начало пути к восстановлению здоровья.",
    servicesApproach:
      "Мы управляем этим путешествием для каждого из наших пациентов с научным, естественным и ориентированным на результат подходом.",

    // Doctors
    doctorsTitle: "Члены нашей команды",
    doctorsSubtitle: "Эксперты по фитотерапии, посвященные вашему здоровью и благополучию",
    doctor1Name: "Талат Моллаоглу",
    doctor1Specialty: "Ассистент",
    doctor1Badge1: "30+ лет",
    doctor1Badge2: "Многочисленные успехи",
    doctor1Bio:
      "С более чем 30-летним опытом в фитотерапии и лечении травами. Как основатель нашей клиники и архитектор методов лечения, он принес надежду и здоровье тысячам пациентов.",
    doctor2Name: "Ахмет Мурат Дыгыш",
    doctor2Specialty: "Фармацевт-фармаколог",
    doctor2Bio:
      "Эксперт по взаимодействию лекарств и растений и фармакотерапевтическим подходам. Работает над обеспечением безопасного и эффективного использования лекарств в процессах лечения пациентов.",
    doctor3Name: "Алейна Зейнеп Тухан",
    doctor3Specialty: "Медсестра",
    doctor3Bio:
      "Опытная медсестра по уходу за пациентами и управлению процессами лечения. Тщательно следит за комфортом и процессами восстановления пациентов, служа незаменимой частью команды лечения.",
    doctor4Name: "Сердар Эркал",
    doctor4Specialty: "Специалист по медицинской биохимии",
    doctor4Bio:
      "Эксперт по медицинской биохимии и лабораторным методам диагностики. Работает над поддержкой биохимической диагностики заболеваний и процессов лечения с помощью научных анализов.",
    doctor5Name: "Эрджан Демир",
    doctor5Specialty: "Специалист по баночной терапии, гирудотерапии и массажу",
    doctor5Bio:
      "Врач-специалист по баночной терапии (хиджама), гирудотерапии (лечение пиявками) и терапевтическому массажу. Сочетает традиционные методы лечения с современными медицинскими подходами для улучшения управления болью, проблем с кровообращением и общего состояния здоровья пациентов.",

    // Gallery
    galleryTitle: "Наша галерея",
    gallerySubtitle: "Откройте для себя моменты здоровья, трансформации и здорового образа жизни из нашего сообщества",
    testimonialsTitle: "Чудесные Прикосновения",
    // </CHANGE>

    // CTA
    ctaTitle: "Готовы записаться на прием?",
    ctaSubtitle: "Позвоните нам, чтобы запланировать консультацию с нашими специалистами по фитотерапии.",
    callUs: "Позвоните нам:",
    workingHoursTitle: "Часы работы",
    weekdays: "Будние дни",
    saturday: "Суббота",
    sunday: "Воскресенье",
    weekdaysHours: "08:00 - 18:00",
    saturdayHours: "08:00 - 18:00",
    sundayHours: "Лечение в гибкие часы",

    // Footer
    footerTagline: "Ваш надежный партнер в целостном здоровье и благополучии.",
    footerAddress: "Адрес",
    footerAddressText: "Мурат Рейс Мах. Нухкую Кад. №255/2 Багларбаши/Ускюдар",
    footerContact: "Контакты",
    footerSocialMedia: "Социальные сети",
    footerCopyright: "© 2025 Подразделение здравоохранения Fitonova. Все права защищены.",
    footerLegal: "Юридические тексты и политики",
    footerPrivacy: "Политика конфиденциальности", // Added missing footer link translations
    footerTerms: "Наши документы", // Added missing footer link translations
    footerKVKK: "Текст раскрытия GDPR", // Added missing footer link translations
    cookieBanner: {
      title: "Использование файлов cookie",
      description:
        "Мы используем файлы cookie на нашем веб-сайте для улучшения вашего опыта и проведения аналитики. Продолжая, вы принимаете использование файлов cookie.",
      acceptAll: "Принять все",
      rejectAll: "Отклонить",
      learnMore: "Узнать больше",
    },
  },
} as const

export function useTranslation() {
  const { language } = useLanguage()
  return translations[language]
}

export { translations }
export default translations
