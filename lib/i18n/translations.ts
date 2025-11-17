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
    navDocuments: "Belgelerimiz", // Added documents menu link

    // Hero
    heroTitle: "Fitoterapi'de Bitkisel Yaşam Merkezi",
    heroSubtitle: "Bedeninizi, zihninizi ve ruhunuzu besleyen bütünsel bir sağlık yaklaşımını keşfedin",
    startJourney: "Yolculuğunuza Başlayın",
    learnMore: "Daha Fazla Bilgi",

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
    heroTitle: "Herbal Life Center in Phytotherapy",
    heroSubtitle: "Discover a holistic health approach that nourishes your body, mind, and spirit",
    startJourney: "Start Your Journey",
    learnMore: "Learn More",

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
    heroTitle: "مركز الحياة العشبية في العلاج النباتي",
    heroSubtitle: "اكتشف نهجًا صحيًا شاملاً يغذي جسمك وعقلك وروحك",
    startJourney: "ابدأ رحلتك",
    learnMore: "اعرف المزيد",

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
    doctor1Name: "طلعت مولا أوغلو",
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

    // About
    aboutTitle: "من نحن",
    aboutText1:
      "فيتونوفا هو مركز صحي شامل يجمع بين القوة العلمية للطب الحديث والإمكانات التجديدية للطبيعة. هدفنا ليس فقط قمع المرض مؤقتًا، ولكن تحقيق حل دائم ونهائي من خلال القضاء على أسبابه. نهدف إلى إعادة بناء سلامة الجسم والعقل والروح لكل فرد وجعل الصحة مستدامة.\n\nيجمع أطباؤنا المتخصصون بين طرق التشخيص والعلاج العلمية مع البروتوكولات العشبية والطبيعية في العديد من مجموعات الأمراض، في المقام الأول علم الأورام. يقدم هذا النهج نموذج علاج متكامل يدعم الشفاء على المستوى الخلوي ويعيد تنشيط نظام الدفاع الخاص بالجسم.",
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
    heroTitle: "Kräuterlebenszentrum in der Phytotherapie",
    heroSubtitle: "Entdecken Sie einen ganzheitlichen Gesundheitsansatz, der Ihren Körper, Geist und Seele nährt",
    startJourney: "Beginnen Sie Ihre Reise",
    learnMore: "Mehr erfahren",

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
      "Facharzt für Schröpftherapie (Hijama), Blutegeltherapie (Hirudotherapie) und therapeutische Massage. Kombiniert traditionelle Behandlungsmethoden mit modernen medizinischen Ansätzen zur Verbesserung des Schmerzmanagements, der Durchblutungsprobleme und des allgemeinen Gesundheitszustands der Patienten.",

    // Gallery
    galleryTitle: "Unsere Galerie",
    gallerySubtitle:
      "Entdecken Sie Momente der Gesundheit, Transformation und des gesunden Lebens aus unserer Gemeinschaft",

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
    heroTitle: "Centre de vie à base de plantes en phytothérapie",
    heroSubtitle: "Découvrez une approche de santé holistique qui nourrit votre corps, votre esprit et votre âme",
    startJourney: "Commencez votre voyage",
    learnMore: "En savoir plus",

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
      "Pour les douleurs au dos, au cou et aux articulations, des solutions définitives sont obtenues grâce à des méthodes de thérapie naturelle qui réparent les tissus nerveux et musculaires et réduisent l'inflammation.",
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
    heroTitle: "植物疗法中的草本生活中心",
    heroSubtitle: "发现滋养您的身体、思想和灵魂的整体健康方法",
    startJourney: "开始您的旅程",
    learnMore: "了解更多",

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
    servicesBullet7: "水蛭疗法（水蛭疗法）旨在平衡循环系统、减轻疼痛并支持血管健康。",
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
    doctor5Specialty: "拔罐、水蛭疗法和按摩专家",
    doctor5Bio:
      "拔罐疗法（拔罐）、水蛭疗法（水蛭疗法）和治疗性按摩专科医生。将传统治疗方法与现代医学方法相结合，以改善患者的疼痛管理、循环问题和整体健康状况。",

    // Gallery
    galleryTitle: "我们的画廊",
    gallerySubtitle: "从我们的社区中发现健康、转变和健康生活的时刻",

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
    footerAddressText: "穆拉特雷斯街努赫库尤街255/2号巴拉尔巴什/于斯屈达尔",
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
    heroTitle: "植物療法におけるハーブライフセンター",
    heroSubtitle: "あなたの体、心、魂を養う総合的な健康アプローチを発見してください",
    startJourney: "あなたの旅を始めましょう",
    learnMore: "もっと詳しく",

    // Services
    servicesTitle: "私たちが治療する病気",
    servicesIntro:
      "現代医学の診断力と自然の再生エネルギーを組み合わせて、多くの病気に対する永続的で決定的な解決策を提供します。",
    servicesGoal: "私たちの目標は、症状を和らげるだけでなく、病気の根本原因を排除し、体のバランスを回復することです。",
    servicesDiseases:
      "私たちの専門医は、主に腫瘍学（すべてのタイプの癌）、湿疹、乾癬、壊疽、脳腫瘍、慢性疼痛、ホルモンの不均衡、不妊症など、さまざまな病気グループで包括的な治療プログラムを実施しています。",
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
    doctor1Name: "タラット・モラオール",
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
    heroTitle: "Центр травяной жизни в фитотерапии",
    heroSubtitle: "Откройте для себя целостный подход к здоровью, который питает ваше тело, разум и душу",
    startJourney: "Начните свое путешествие",
    learnMore: "Узнать больше",

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

export default translations
