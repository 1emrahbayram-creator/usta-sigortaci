export type ProductCategory = "arac" | "saglik" | "konut" | "yasam";

export const categoryLabels: Record<ProductCategory, string> = {
  arac: "Araç Sigortaları",
  saglik: "Sağlık Sigortaları",
  konut: "Konut ve İşyeri",
  yasam: "Yaşam ve Diğer",
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  icon: string;
  popular: boolean;
  priceFrom: number;
  tagline: string;
  heroDesc: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  coverages: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  sections: { h: string; p: string[] }[];
};

export const products: Product[] = [
  {
    slug: "kasko",
    name: "Kasko Sigortası",
    shortName: "Kasko",
    category: "arac",
    icon: "car",
    popular: true,
    priceFrom: 8450,
    tagline: "Aracınız her senaryoda güvende",
    heroDesc:
      "Çarpma, çalınma, yanma, doğal afet ve daha fazlasına karşı aracınızı güvence altına alın. 20'den fazla sigorta şirketinin kasko tekliflerini 2 dakikada karşılaştırın.",
    metaTitle: "Kasko Sigortası Fiyatları 2026 | En Uygun Kasko Teklifleri",
    metaDescription:
      "Kasko sigortası fiyatlarını 20+ şirketten anında karşılaştırın. En uygun kasko teklifini 2 dakikada alın, online satın alın. Hasarsızlık indirimi korunur.",
    keywords: ["kasko", "kasko sigortası", "kasko fiyatları", "en uygun kasko", "kasko teklifi", "kasko hesaplama"],
    coverages: [
      { title: "Çarpma ve Çarpışma", desc: "Sabit veya hareketli cisimlerle çarpışma sonucu oluşan hasarlar" },
      { title: "Çalınma", desc: "Aracın veya araç parçalarının çalınması ve çalınmaya teşebbüs" },
      { title: "Yanma", desc: "Yangın, yıldırım ve patlama kaynaklı hasarlar" },
      { title: "Doğal Afetler", desc: "Sel, dolu, fırtına, deprem ve yer kayması teminatları" },
      { title: "Cam Kırılması", desc: "Ön, yan ve arka camlarda muafiyetsiz onarım seçeneği" },
      { title: "Yedek Araç", desc: "Onarım süresince ikame araç hizmeti" },
      { title: "Mini Onarım", desc: "Küçük çizik ve göçüklerde hasarsızlık indirimini bozmayan onarım" },
      { title: "Yol Yardım", desc: "7/24 çekici, lastik değişimi ve yakıt ikmali desteği" },
    ],
    faqs: [
      {
        q: "Kasko sigortası zorunlu mu?",
        a: "Hayır, kasko isteğe bağlı bir sigortadır. Zorunlu trafik sigortası karşı tarafın zararını karşılarken, kasko kendi aracınızın hasarlarını güvence altına alır. Kredili araçlarda bankalar genellikle kasko şartı arar.",
      },
      {
        q: "Kasko fiyatları neye göre belirlenir?",
        a: "Aracın marka, model ve yaşı; sürücünün yaşı ve hasar geçmişi; aracın kullanıldığı il; seçilen teminatlar ve hasarsızlık indirim kademesi fiyatı belirleyen ana etkenlerdir. Aynı araç için şirketler arasında %40'a varan fiyat farkı olabilir.",
      },
      {
        q: "Hasarsızlık indirimi nedir, nasıl korunur?",
        a: "Poliçe dönemi boyunca hasar talebinde bulunmazsanız bir sonraki yıl priminizde kademeli indirim uygulanır. 4. kademede indirim %60'a ulaşır. Mini onarım hizmeti ve cam hasarlarında bazı şirketler indirimi bozmaz.",
      },
      {
        q: "Kaskom başka birinin kullanımında geçerli mi?",
        a: "Evet, poliçede aksine bir hüküm yoksa ehliyetli herhangi bir sürücünün kullanımında kasko geçerlidir. Ancak bazı şirketler genç sürücü kullanımında ek muafiyet uygular; poliçe özel şartlarını kontrol etmenizi öneririz.",
      },
      {
        q: "Deprem ve sel kaskoya dahil mi?",
        a: "Standart pakette olmayabilir; genişletilmiş kasko paketlerinde doğal afet teminatları yer alır. Teklif karşılaştırma ekranımızda hangi şirketin bu teminatları dahil ettiğini tek bakışta görebilirsiniz.",
      },
    ],
    sections: [
      {
        h: "Kasko Sigortası Nedir?",
        p: [
          "Kasko sigortası, aracınızın çarpma, çarpışma, çalınma, yanma ve doğal afet gibi risklere karşı uğrayabileceği zararları karşılayan isteğe bağlı bir araç sigortasıdır. Zorunlu trafik sigortasından farklı olarak kasko, karşı tarafın değil kendi aracınızın hasarlarını güvence altına alır.",
          "Kasko poliçeleri şirketten şirkete büyük farklılık gösterir: ikame araç süresi, cam muafiyeti, mini onarım hakkı, anahtar kaybı teminatı ve servis ağı gibi detaylar toplam değeri belirler. Bu yüzden yalnızca fiyata değil, teminat içeriğine bakarak karşılaştırma yapmak gerekir.",
        ],
      },
      {
        h: "En Uygun Kasko Fiyatı Nasıl Bulunur?",
        p: [
          "Aynı araç ve aynı sürücü profili için sigorta şirketlerinin kasko fiyatları arasında %40'a varan fark oluşabilir. Bunun nedeni her şirketin risk değerlendirme modelinin, hasar/prim dengesinin ve hedef portföyünün farklı olmasıdır.",
          "Usta Sigortacı'da plaka ve ruhsat bilgilerinizi girerek 20'den fazla şirketin gerçek zamanlı tekliflerini tek ekranda görürsünüz. Teminat detaylarını yan yana karşılaştırır, dilerseniz uzman danışmanlarımızdan telefonla destek alırsınız. Poliçenizi online tamamladığınızda belgeleriniz anında e-postanıza gönderilir.",
        ],
      },
    ],
  },
  {
    slug: "trafik-sigortasi",
    name: "Zorunlu Trafik Sigortası",
    shortName: "Trafik",
    category: "arac",
    icon: "traffic",
    popular: true,
    priceFrom: 3120,
    tagline: "Yasal zorunluluğunuz en uygun fiyata",
    heroDesc:
      "Zorunlu trafik sigortanızı yenilemek 2 dakikanızı alır. Tüm şirketlerin tekliflerini karşılaştırın, poliçeniz anında e-postanızda olsun.",
    metaTitle: "Zorunlu Trafik Sigortası Fiyatları 2026 | Anında Teklif Al",
    metaDescription:
      "Zorunlu trafik sigortası fiyatlarını tüm şirketlerden anında sorgulayın. En ucuz trafik sigortası teklifini karşılaştırın, 2 dakikada online yaptırın.",
    keywords: ["trafik sigortası", "zorunlu trafik sigortası", "trafik sigortası fiyatları", "trafik sigortası sorgulama", "en ucuz trafik sigortası"],
    coverages: [
      { title: "Maddi Hasar", desc: "Karşı tarafın aracında ve eşyalarında oluşan zararlar" },
      { title: "Sakatlanma ve Tedavi", desc: "Üçüncü şahısların yaralanma ve tedavi giderleri" },
      { title: "Vefat Teminatı", desc: "Kaza sonucu vefat durumunda destekten yoksun kalanlara tazminat" },
      { title: "Araç Başına Limit", desc: "SEDDK tarafından belirlenen güncel limitlerle güvence" },
    ],
    faqs: [
      {
        q: "Trafik sigortası yaptırmazsam ne olur?",
        a: "Trafik sigortasız araç kullanmak yasaktır. Denetimlerde aracınız trafikten men edilir, idari para cezası uygulanır ve sigortasız dönemde karışılan kazalarda tüm zarar şahsi mal varlığınızdan tahsil edilir.",
      },
      {
        q: "Trafik sigortası fiyatları neden şirketten şirkete değişiyor?",
        a: "Prim tavanları SEDDK tarafından belirlense de şirketler basamak sistemine göre tavan altında serbestçe fiyat verebilir. Hasar geçmişiniz, aracınızın türü ve iliniz fiyatı etkiler; karşılaştırma yaparak aynı basamakta bile daha uygun prim bulabilirsiniz.",
      },
      {
        q: "Basamak sistemi nedir?",
        a: "Trafik sigortasında 0'dan 8'e uzanan basamak sistemi uygulanır. Hasarsız her yıl basamağınızı yükseltir ve prim indirimlerinizi artırır; kusurlu hasarlar basamağınızı düşürür. Basamak bilgisi şirket değişse bile sizinle taşınır.",
      },
      {
        q: "Trafik sigortam kendi aracımın hasarını karşılar mı?",
        a: "Hayır. Zorunlu trafik sigortası yalnızca kusurunuz oranında karşı tarafa verdiğiniz zararları karşılar. Kendi aracınızın hasarları için kasko sigortası yaptırmanız gerekir.",
      },
    ],
    sections: [
      {
        h: "Zorunlu Trafik Sigortası Nedir?",
        p: [
          "Zorunlu trafik sigortası (Karayolları Motorlu Araçlar Zorunlu Mali Sorumluluk Sigortası), trafiğe çıkan her aracın yaptırmak zorunda olduğu, kaza durumunda üçüncü şahıslara verilen bedeni ve maddi zararları teminat altına alan sigortadır.",
          "Poliçe primleri sürücünün basamak kademesine, aracın tür ve yaşına, kayıtlı olduğu ile göre değişir. Yenileme tarihini kaçırmak hem ceza riskine hem de basamak kaybına yol açabileceği için poliçenizi bitiş tarihinden önce yenilemeniz önemlidir.",
        ],
      },
      {
        h: "Trafik Sigortası Nasıl Sorgulanır?",
        p: [
          "Aracınızın plakası ve TC kimlik numaranızla mevcut poliçenizi ve basamak bilginizi anında sorgulayabilirsiniz. Usta Sigortacı teklif ekranında bilgilerinizi girdiğinizde tüm şirketlerin güncel primleri saniyeler içinde listelenir; dilediğinizi seçip kredi kartıyla ödeyerek poliçenizi anında başlatabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "tamamlayici-saglik-sigortasi",
    name: "Tamamlayıcı Sağlık Sigortası",
    shortName: "Tamamlayıcı Sağlık",
    category: "saglik",
    icon: "healthPlus",
    popular: true,
    priceFrom: 4890,
    tagline: "Özel hastane konforu, SGK avantajıyla",
    heroDesc:
      "SGK anlaşmalı özel hastanelerde fark ücreti ödemeden muayene ve tedavi olun. Aylık bir yemek parasına özel hastane konforu.",
    metaTitle: "Tamamlayıcı Sağlık Sigortası Fiyatları 2026 | TSS Teklifi Al",
    metaDescription:
      "Tamamlayıcı sağlık sigortası (TSS) ile SGK anlaşmalı özel hastanelerde fark ücreti ödemeyin. En uygun TSS fiyatlarını karşılaştırın, anında satın alın.",
    keywords: ["tamamlayıcı sağlık sigortası", "TSS", "tamamlayıcı sağlık sigortası fiyatları", "özel hastane sigortası"],
    coverages: [
      { title: "Ayakta Tedavi", desc: "Muayene, tahlil, görüntüleme ve fizik tedavi giderleri" },
      { title: "Yatarak Tedavi", desc: "Ameliyat, yoğun bakım, oda-yemek-refakatçi giderleri" },
      { title: "Doğum Paketi", desc: "İsteğe bağlı doğum ve gebelik takibi teminatı" },
      { title: "Check-up", desc: "Yılda bir ücretsiz genel sağlık taraması" },
      { title: "Diş Paketi", desc: "Anlaşmalı kurumlarda diş tedavisi indirimleri" },
      { title: "Online Doktor", desc: "7/24 görüntülü doktor danışmanlığı" },
    ],
    faqs: [
      {
        q: "Tamamlayıcı sağlık sigortası nasıl çalışır?",
        a: "SGK'lı iseniz, SGK ile anlaşmalı özel hastanelerde tedavi olurken normalde ödemeniz gereken fark ücretini TSS poliçeniz karşılar. Muayene başına yalnızca 15 TL katılım payı ödersiniz.",
      },
      {
        q: "TSS ile özel sağlık sigortası arasındaki fark nedir?",
        a: "TSS yalnızca SGK anlaşmalı özel hastanelerde ve SGK'nın karşıladığı işlemlerde geçerlidir; bu sayede primler çok daha uygundur. Özel sağlık sigortası ise SGK anlaşması aranmaksızın daha geniş hastane ağı ve teminat sunar.",
      },
      {
        q: "Kimler tamamlayıcı sağlık sigortası yaptırabilir?",
        a: "Aktif SGK'sı olan (4A, 4B, 4C veya bakmakla yükümlü statüsünde) 0-60 yaş arası herkes yaptırabilir. Bazı şirketler 65 yaşına kadar kabul eder.",
      },
      {
        q: "Mevcut hastalıklarım kapsama girer mi?",
        a: "Poliçe başlangıcından önce var olan hastalıklar genellikle kapsam dışıdır veya bekleme süresine tabidir. Beyan formunu eksiksiz doldurmak, ileride tazminat sorunu yaşamamak için kritik önem taşır.",
      },
    ],
    sections: [
      {
        h: "Tamamlayıcı Sağlık Sigortası Nedir?",
        p: [
          "Tamamlayıcı sağlık sigortası (TSS), Sosyal Güvenlik Kurumu ile anlaşmalı özel hastanelerde tedavi görürken hastanenin talep ettiği fark ücretlerini karşılayan sigorta ürünüdür. SGK güvenceniz devam ederken özel hastane konforundan yararlanmanızı sağlar.",
          "Türkiye'de 500'den fazla özel hastane SGK anlaşmalıdır ve bu hastanelerin büyük bölümü TSS kapsamındadır. Poliçenizle muayene, tahlil, görüntüleme, ameliyat ve yatış giderleriniz için fark ücreti ödemezsiniz.",
        ],
      },
      {
        h: "TSS Fiyatlarını Etkileyen Faktörler",
        p: [
          "Yaş en belirleyici etkendir; genç yaşta poliçe başlatmak hem primi düşürür hem de ömür boyu yenileme garantisi kazanma şansı verir. Bunun yanında yaşadığınız il, seçtiğiniz hastane ağı (tüm ağ veya dar ağ) ve ayakta tedavi limitleri fiyatı etkiler.",
          "Doğum teminatı, diş paketi gibi ek teminatlar primi artırır. Karşılaştırma ekranımızda her şirketin ağını ve limitlerini yan yana görebilir, bütçenize en uygun planı seçebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "ozel-saglik-sigortasi",
    name: "Özel Sağlık Sigortası",
    shortName: "Özel Sağlık",
    category: "saglik",
    icon: "heartPulse",
    popular: false,
    priceFrom: 14500,
    tagline: "Sağlığınız için en geniş güvence",
    heroDesc:
      "Türkiye'nin önde gelen özel hastanelerinde SGK şartı olmadan tedavi olun. Yatarak ve ayakta tedavide geniş limitli teminatlar.",
    metaTitle: "Özel Sağlık Sigortası Fiyatları 2026 | Anında Teklif Karşılaştır",
    metaDescription:
      "Özel sağlık sigortası fiyatlarını önde gelen şirketlerden karşılaştırın. Geniş hastane ağı, yüksek limitler ve ömür boyu yenileme garantisi seçenekleri.",
    keywords: ["özel sağlık sigortası", "sağlık sigortası fiyatları", "özel sağlık sigortası teklif", "yenileme garantisi"],
    coverages: [
      { title: "Yatarak Tedavi", desc: "Ameliyat, kemoterapi, radyoterapi, diyaliz ve yoğun bakım" },
      { title: "Ayakta Tedavi", desc: "Muayene, ilaç, tahlil, röntgen ve ileri tanı yöntemleri" },
      { title: "Yurt Dışı Tedavi", desc: "İsteğe bağlı yurt dışı sağlık kuruluşu teminatı" },
      { title: "Doğum", desc: "Normal ve sezaryen doğum, gebelik komplikasyonları" },
      { title: "Yenileme Garantisi", desc: "Şartları sağlayanlara ömür boyu yenileme güvencesi" },
      { title: "Ambulans", desc: "Kara ve hava ambulansı hizmetleri" },
    ],
    faqs: [
      {
        q: "Özel sağlık sigortası neleri kapsar?",
        a: "Plana bağlı olarak yatarak tedavi (ameliyat, yoğun bakım), ayakta tedavi (muayene, tahlil, ilaç), doğum, fizik tedavi, psikolog desteği ve yurt dışı tedavi giderlerini kapsar. Teminat limitleri ve katılım oranları şirkete göre değişir.",
      },
      {
        q: "Ömür boyu yenileme garantisi nedir?",
        a: "Belirli bir süre (genellikle 3-4 yıl) kesintisiz sigortalı kalan ve hasar/prim oranı uygun olan sigortalılara verilen, şirketin poliçeyi yaşam boyu yenileme taahhüdüdür. Bu garantiyi kazanmak için erken yaşta poliçe başlatmak avantajlıdır.",
      },
      {
        q: "SGK'm yoksa özel sağlık sigortası yaptırabilir miyim?",
        a: "Evet. Özel sağlık sigortası SGK şartı aramaz; bu yönüyle tamamlayıcı sağlık sigortasından ayrılır.",
      },
    ],
    sections: [
      {
        h: "Özel Sağlık Sigortası Nedir?",
        p: [
          "Özel sağlık sigortası, hastalık ve kaza durumlarında özel sağlık kuruluşlarındaki tanı ve tedavi giderlerinizi poliçe limitleri dahilinde karşılayan sigortadır. SGK anlaşması şartı olmadığı için Türkiye'nin en seçkin hastanelerinde geçerlidir.",
          "Planlar; hastane ağı genişliği, yıllık limitler, katılım payı oranları ve ek teminatlara göre çeşitlenir. İhtiyacınıza uygun planı seçmek için teklif karşılaştırması yapmak ciddi tasarruf sağlar.",
        ],
      },
    ],
  },
  {
    slug: "dask",
    name: "DASK (Zorunlu Deprem Sigortası)",
    shortName: "DASK",
    category: "konut",
    icon: "quake",
    popular: true,
    priceFrom: 1650,
    tagline: "Eviniz depreme karşı devlet güvencesinde",
    heroDesc:
      "Zorunlu Deprem Sigortası'nı 2 dakikada yaptırın veya yenileyin. Tapu ve elektrik aboneliği işlemleriniz için DASK poliçeniz anında hazır.",
    metaTitle: "DASK Sigortası 2026 | Zorunlu Deprem Sigortası Anında Yaptır",
    metaDescription:
      "DASK (Zorunlu Deprem Sigortası) fiyatı hesaplayın, poliçenizi 2 dakikada online yaptırın. DASK sorgulama ve yenileme işlemleri anında tamamlanır.",
    keywords: ["DASK", "zorunlu deprem sigortası", "DASK fiyatı", "DASK hesaplama", "DASK sorgulama", "DASK yenileme"],
    coverages: [
      { title: "Bina Hasarı", desc: "Deprem ve deprem kaynaklı yangın, infilak, tsunami, yer kayması" },
      { title: "Temeller ve Taşıyıcı Sistem", desc: "Binanın ana yapısal unsurları" },
      { title: "Ortak Alanlar", desc: "Merdiven, asansör, çatı ve bacalar" },
      { title: "Güncel Teminat Limiti", desc: "DASK tarafından her yıl güncellenen azami teminat tutarı" },
    ],
    faqs: [
      {
        q: "DASK zorunlu mu?",
        a: "Evet. 6305 sayılı kanun gereği belediye sınırları içindeki tüm konutlar için DASK zorunludur. Tapu devri, elektrik ve su aboneliği işlemlerinde DASK poliçesi ibraz edilmesi gerekir.",
      },
      {
        q: "DASK primi nasıl hesaplanır?",
        a: "Binanın bulunduğu deprem risk bölgesi, yapı tarzı (betonarme/diğer), inşa yılı, kat sayısı ve dairenin brüt yüzölçümüne göre hesaplanır. Prim, DASK tarifesine göre tüm şirketlerde aynıdır; aracı kurum farkı yoktur.",
      },
      {
        q: "DASK eşyalarımı da karşılar mı?",
        a: "Hayır. DASK yalnızca binanın kendisini teminat altına alır. Eşyalarınız ve DASK limitini aşan bina değeri için konut sigortası yaptırmanız gerekir.",
      },
      {
        q: "DASK poliçemi nasıl sorgularım?",
        a: "Alo DASK 125 hattından veya e-Devlet üzerinden TC kimlik numaranızla mevcut poliçenizi sorgulayabilirsiniz. Usta Sigortacı hesabınızda da poliçeleriniz ve yenileme tarihleri takip edilir.",
      },
    ],
    sections: [
      {
        h: "DASK Nedir ve Neden Zorunludur?",
        p: [
          "Zorunlu Deprem Sigortası (DASK), deprem ve depremin yol açtığı yangın, infilak, tsunami ve yer kayması risklerine karşı konutları güvence altına alan, devlet destekli zorunlu bir sigortadır. Doğal Afet Sigortaları Kurumu tarafından yönetilir.",
          "Türkiye'nin aktif deprem kuşağında yer alması nedeniyle DASK, konut sahiplerinin en temel güvencesidir. Poliçesiz konutlarda tapu işlemleri ve yeni abonelik açılışları yapılamaz.",
        ],
      },
      {
        h: "DASK Yenileme Neden Önemli?",
        p: [
          "DASK poliçesi bir yıllıktır ve her yıl yenilenmesi gerekir. Poliçesi sona eren konutlar deprem anında teminatsız kalır. Usta Sigortacı'da poliçenizin bitiş tarihi yaklaştığında size SMS ve e-posta ile hatırlatma yaparız; tek tıkla yenileyebilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "konut-sigortasi",
    name: "Konut Sigortası",
    shortName: "Konut",
    category: "konut",
    icon: "home",
    popular: false,
    priceFrom: 2340,
    tagline: "Eviniz ve eşyalarınız tam güvende",
    heroDesc:
      "Yangından hırsızlığa, su baskınından cam kırılmasına eviniz ve içindeki her şey güvence altında. Paket seçenekleriyle ihtiyacınıza göre teminat.",
    metaTitle: "Konut Sigortası Fiyatları 2026 | Ev Sigortası Teklifi Al",
    metaDescription:
      "Konut sigortası ile eviniz ve eşyalarınız yangın, hırsızlık, su baskını ve doğal afetlere karşı güvende. En uygun ev sigortası tekliflerini karşılaştırın.",
    keywords: ["konut sigortası", "ev sigortası", "konut sigortası fiyatları", "eşya sigortası"],
    coverages: [
      { title: "Yangın ve Yıldırım", desc: "Bina ve eşyalarda yangın kaynaklı tüm hasarlar" },
      { title: "Hırsızlık", desc: "Eşya çalınması ve hırsızlık kaynaklı zararlar" },
      { title: "Su Baskını", desc: "Dahili su hasarları ve sel/su baskını teminatı" },
      { title: "Doğal Afetler", desc: "Fırtına, dolu, kar ağırlığı, yer kayması" },
      { title: "Cam Kırılması", desc: "Kapı ve pencere camları" },
      { title: "Üçüncü Şahıs Sorumluluk", desc: "Komşulara verilen zararlar (ör. su sızıntısı)" },
      { title: "Asistans Hizmetleri", desc: "7/24 çilingir, tesisatçı, elektrikçi desteği" },
    ],
    faqs: [
      {
        q: "Konut sigortası ile DASK arasındaki fark nedir?",
        a: "DASK yalnızca deprem kaynaklı bina hasarlarını, üstelik belirli bir limite kadar karşılar. Konut sigortası ise yangın, hırsızlık, su baskını gibi çok daha geniş riskleri ve eşyalarınızı da kapsar. İkisi birbirini tamamlar.",
      },
      {
        q: "Kiracıyım, konut sigortası yaptırabilir miyim?",
        a: "Evet. Kiracılar bina teminatı olmadan yalnızca eşya teminatlı poliçe yaptırabilir. Böylece eşyalarınız hırsızlık, yangın ve su baskınına karşı güvence altına alınır.",
      },
      {
        q: "Eşya bedelini nasıl belirlemeliyim?",
        a: "Evinizdeki mobilya, beyaz eşya, elektronik ve kişisel eşyaların yeniden alım değerini baz alın. Eksik bedel beyanı hasar anında eksik ödemeye yol açar.",
      },
    ],
    sections: [
      {
        h: "Konut Sigortası Neleri Kapsar?",
        p: [
          "Konut sigortası; binanızı, eşyalarınızı veya her ikisini yangın, hırsızlık, su baskını, fırtına, kara ve hava taşıtı çarpması gibi risklere karşı güvence altına alan paket sigortadır. Poliçeye deprem, enflasyondan korunma ve aile ferdi kaza gibi ek teminatlar eklenebilir.",
          "Asistans hizmetleri sayesinde evinizde ani tesisat arızası, çilingir ihtiyacı gibi durumlarda 7/24 ücretsiz destek alırsınız. Şirketlerin paket içerikleri farklılık gösterdiği için karşılaştırma yapmak önemlidir.",
        ],
      },
    ],
  },
  {
    slug: "seyahat-saglik-sigortasi",
    name: "Seyahat Sağlık Sigortası",
    shortName: "Seyahat",
    category: "yasam",
    icon: "plane",
    popular: true,
    priceFrom: 480,
    tagline: "Yurt dışında sağlığınız güvende",
    heroDesc:
      "Vize başvurularında geçerli, Schengen onaylı seyahat sağlık sigortanızı dakikalar içinde yaptırın. Bagaj kaybından tedavi masraflarına tam koruma.",
    metaTitle: "Seyahat Sağlık Sigortası 2026 | Schengen Vize Sigortası Anında Al",
    metaDescription:
      "Schengen vizesi için geçerli seyahat sağlık sigortanızı anında yaptırın. 30.000 € teminatlı, konsolosluk onaylı poliçeniz 2 dakikada e-postanızda.",
    keywords: ["seyahat sağlık sigortası", "schengen vize sigortası", "yurt dışı seyahat sigortası", "vize sigortası"],
    coverages: [
      { title: "Tıbbi Tedavi", desc: "Yurt dışında ani hastalık ve kaza tedavi giderleri (30.000 € - 100.000 €)" },
      { title: "Tıbbi Nakil", desc: "Ambulans ve ülkeye geri dönüş masrafları" },
      { title: "Bagaj Kaybı", desc: "Kaybolan veya geciken bagaj tazminatı" },
      { title: "Uçuş İptali", desc: "Seyahat iptali ve gecikme giderleri (pakete bağlı)" },
      { title: "Covid-19 Teminatı", desc: "Pandemi kaynaklı tedavi giderleri" },
      { title: "Hukuki Destek", desc: "Yurt dışında acil hukuki danışmanlık" },
    ],
    faqs: [
      {
        q: "Schengen vizesi için hangi sigorta gerekli?",
        a: "Schengen ülkeleri, en az 30.000 € tıbbi teminatlı, seyahat süresinin tamamını kapsayan seyahat sağlık sigortası şartı arar. Poliçelerimiz tüm Schengen konsolosluklarınca kabul edilir.",
      },
      {
        q: "Poliçemi vize başvurusundan önce mi almalıyım?",
        a: "Evet, vize başvuru dosyanıza sigorta poliçenizi eklemeniz gerekir. Vize reddi durumunda kullanılmamış poliçenizi ücretsiz iptal edebilirsiniz.",
      },
      {
        q: "Yıllık seyahat sigortası var mı?",
        a: "Sık seyahat edenler için yıl boyunca tüm yurt dışı seyahatlerini kapsayan (her seyahatte azami kalış süreli) yıllık poliçeler daha ekonomiktir.",
      },
    ],
    sections: [
      {
        h: "Seyahat Sağlık Sigortası Neden Gerekli?",
        p: [
          "Yurt dışında oluşabilecek ani hastalık veya kaza durumunda tedavi maliyetleri ciddi tutarlara ulaşabilir; örneğin ABD'de basit bir acil servis ziyareti binlerce dolar tutabilir. Seyahat sağlık sigortası bu giderleri poliçe limitinize kadar karşılar.",
          "Schengen bölgesine yapılan vize başvurularında sigorta zorunludur. Ayrıca bagaj kaybı, uçuş iptali ve pasaport kaybı gibi seyahat aksiliklerine karşı ek teminatlar sunulur.",
        ],
      },
    ],
  },
  {
    slug: "hayat-sigortasi",
    name: "Hayat Sigortası",
    shortName: "Hayat",
    category: "yasam",
    icon: "shieldHeart",
    popular: false,
    priceFrom: 1980,
    tagline: "Sevdikleriniz her koşulda güvende",
    heroDesc:
      "Beklenmedik durumlarda ailenizin geleceğini güvence altına alın. Vefat, maluliyet ve kritik hastalık teminatlarıyla tam koruma.",
    metaTitle: "Hayat Sigortası Fiyatları 2026 | Ailenizi Güvenceye Alın",
    metaDescription:
      "Hayat sigortası ile sevdiklerinizin geleceğini güvence altına alın. Vefat, maluliyet ve kritik hastalık teminatlı planları karşılaştırın.",
    keywords: ["hayat sigortası", "hayat sigortası fiyatları", "kredi hayat sigortası", "vefat teminatı"],
    coverages: [
      { title: "Vefat Teminatı", desc: "Her türlü vefat durumunda lehtarlara toplu ödeme" },
      { title: "Kaza Sonucu Vefat", desc: "Kaza kaynaklı vefatta ek tazminat" },
      { title: "Tam ve Kalıcı Maluliyet", desc: "Çalışma gücü kaybında tazminat" },
      { title: "Kritik Hastalık", desc: "Kanser, kalp krizi gibi ağır hastalıklarda erken ödeme" },
      { title: "İşsizlik Teminatı", desc: "İstem dışı işsizlikte kredi taksit desteği (pakete bağlı)" },
    ],
    faqs: [
      {
        q: "Hayat sigortası primi neye göre belirlenir?",
        a: "Yaş, cinsiyet, sağlık durumu, meslek riski ve seçilen teminat tutarı primi belirler. Genç yaşta başlanan poliçelerde primler belirgin şekilde düşüktür.",
      },
      {
        q: "Kredi çekerken hayat sigortası zorunlu mu?",
        a: "Yasal olarak zorunlu değildir ancak bankalar kredi hayat sigortasını şart koşabilir. Bankanın sunduğu poliçeyi kabul etmek zorunda değilsiniz; dışarıdan daha uygun primli poliçe yaptırıp bankaya ibraz edebilirsiniz.",
      },
      {
        q: "Birikimli hayat sigortası nedir?",
        a: "Koruma teminatlarının yanında düzenli tasarruf da içeren üründür. Poliçe süresi sonunda birikiminizi toplu veya maaş şeklinde alabilirsiniz.",
      },
    ],
    sections: [
      {
        h: "Hayat Sigortası Neden Önemli?",
        p: [
          "Hayat sigortası, vefat veya maluliyet gibi beklenmedik durumlarda ailenizin yaşam standardını korumasını sağlayan finansal güvencedir. Özellikle kredi borcu olan veya ailesinin geçimini tek başına üstlenen kişiler için kritik önem taşır.",
          "Kritik hastalık teminatı, tanı anında toplu ödeme yaparak tedavi sürecinde maddi kaygıları ortadan kaldırır. Teminat tutarını yıllık gelirinizin en az 5 katı olacak şekilde planlamak yaygın bir yaklaşımdır.",
        ],
      },
    ],
  },
  {
    slug: "ferdi-kaza-sigortasi",
    name: "Ferdi Kaza Sigortası",
    shortName: "Ferdi Kaza",
    category: "yasam",
    icon: "bandage",
    popular: false,
    priceFrom: 720,
    tagline: "Kazalara karşı 7/24 kişisel koruma",
    heroDesc:
      "Ani ve beklenmedik kazaların sonuçlarına karşı kendinizi ve ailenizi güvence altına alın. Uygun primlerle yüksek teminatlar.",
    metaTitle: "Ferdi Kaza Sigortası 2026 | Uygun Primle Yüksek Teminat",
    metaDescription:
      "Ferdi kaza sigortası ile kaza sonucu vefat, maluliyet ve tedavi giderlerine karşı güvence altında olun. Fiyatları karşılaştırın, anında satın alın.",
    keywords: ["ferdi kaza sigortası", "kaza sigortası", "ferdi kaza teminatları"],
    coverages: [
      { title: "Kaza Sonucu Vefat", desc: "Lehtarlara toplu tazminat ödemesi" },
      { title: "Sürekli Sakatlık", desc: "Kalıcı maluliyet oranına göre tazminat" },
      { title: "Tedavi Giderleri", desc: "Kaza kaynaklı hastane ve ilaç masrafları" },
      { title: "Gündelik Tazminat", desc: "Çalışılamayan günler için günlük ödeme" },
      { title: "Deprem Ek Teminatı", desc: "Deprem kaynaklı kazalar (pakete bağlı)" },
    ],
    faqs: [
      {
        q: "Ferdi kaza sigortası hastalıkları kapsar mı?",
        a: "Hayır. Ferdi kaza sigortası yalnızca ani ve harici bir olayın (kaza) yol açtığı bedensel zararları kapsar. Hastalıklar için sağlık veya hayat sigortası gerekir.",
      },
      {
        q: "Hangi meslekler için uygundur?",
        a: "Her meslek grubuna uygundur; ancak riskli mesleklerde (inşaat, madencilik vb.) prim daha yüksek olabilir. Poliçe 7/24, iş ve özel yaşamın tamamında geçerlidir.",
      },
    ],
    sections: [
      {
        h: "Ferdi Kaza Sigortası Nedir?",
        p: [
          "Ferdi kaza sigortası; ani, harici ve istem dışı bir olay sonucu oluşan vefat, kalıcı sakatlık ve tedavi giderlerini teminat altına alan kişisel koruma ürünüdür. Düşük primlerle yüksek teminat sunması nedeniyle hayat sigortasının ekonomik alternatifi olarak tercih edilir.",
        ],
      },
    ],
  },
  {
    slug: "evcil-hayvan-sigortasi",
    name: "Evcil Hayvan Sigortası",
    shortName: "Evcil Hayvan",
    category: "yasam",
    icon: "paw",
    popular: false,
    priceFrom: 1450,
    tagline: "Patili dostlarınız için tam güvence",
    heroDesc:
      "Kedi ve köpeğinizin veteriner masrafları, ameliyatları ve tedavileri güvence altında. Türkiye'nin en kapsamlı pati sigortası.",
    metaTitle: "Evcil Hayvan Sigortası 2026 | Kedi ve Köpek Sağlık Sigortası",
    metaDescription:
      "Evcil hayvan sigortası ile kedi ve köpeğinizin veteriner, ameliyat ve tedavi masrafları güvende. Pati dostu planları karşılaştırın.",
    keywords: ["evcil hayvan sigortası", "kedi sigortası", "köpek sigortası", "pet sigortası", "veteriner masrafları"],
    coverages: [
      { title: "Veteriner Tedavi", desc: "Hastalık ve kaza kaynaklı muayene ve tedavi giderleri" },
      { title: "Cerrahi Operasyon", desc: "Ameliyat ve anestezi masrafları" },
      { title: "İlaç Giderleri", desc: "Reçeteli ilaç ve aşı destekleri" },
      { title: "Sorumluluk Teminatı", desc: "Evcil hayvanınızın üçüncü şahıslara verdiği zararlar" },
      { title: "Kayıp İlan Desteği", desc: "Kaybolma durumunda ilan ve arama masrafları" },
    ],
    faqs: [
      {
        q: "Hangi hayvanlar sigortalanabilir?",
        a: "Mikroçipli ve aşı karnesi güncel kedi ve köpekler sigortalanabilir. Yaş sınırı genellikle 3 ay - 8 yaş arasıdır.",
      },
      {
        q: "Mevcut hastalıklar kapsanır mı?",
        a: "Poliçe öncesi teşhis edilmiş hastalıklar kapsam dışıdır. Bazı kalıtsal hastalıklar için bekleme süreleri uygulanır.",
      },
    ],
    sections: [
      {
        h: "Evcil Hayvan Sigortası Neleri Kapsar?",
        p: [
          "Evcil hayvan sigortası, kedi ve köpeğinizin kaza ve hastalık durumlarındaki veteriner giderlerini poliçe limitleri dahilinde karşılar. Ameliyat, yatış, ilaç ve tanı testleri temel teminatlar arasındadır; sorumluluk teminatı ile dostunuzun üçüncü kişilere verebileceği zararlar da güvence altına alınır.",
        ],
      },
    ],
  },
  {
    slug: "cep-telefonu-sigortasi",
    name: "Cep Telefonu Sigortası",
    shortName: "Cep Telefonu",
    category: "yasam",
    icon: "phone",
    popular: false,
    priceFrom: 890,
    tagline: "Telefonunuz kırılmaya ve çalınmaya karşı korumada",
    heroDesc:
      "Ekran kırılması, sıvı teması ve çalınmaya karşı telefonunuzu güvence altına alın. Onarım anlaşmalı servislerde, değişim orijinal ürünle.",
    metaTitle: "Cep Telefonu Sigortası 2026 | Ekran Kırılması ve Çalınma Güvencesi",
    metaDescription:
      "Cep telefonu sigortası ile ekran kırılması, sıvı teması ve çalınmaya karşı güvence altında olun. Telefon sigortası fiyatlarını karşılaştırın.",
    keywords: ["cep telefonu sigortası", "telefon sigortası", "ekran kırılması sigortası"],
    coverages: [
      { title: "Kaza Sonucu Kırılma", desc: "Ekran ve gövde hasarları" },
      { title: "Sıvı Teması", desc: "Su ve sıvı kaynaklı arızalar" },
      { title: "Çalınma", desc: "Kapkaç ve hırsızlık durumunda cihaz bedeli" },
      { title: "Voltaj Hasarı", desc: "Elektrik dalgalanması kaynaklı arızalar" },
    ],
    faqs: [
      {
        q: "Hangi telefonlar sigortalanabilir?",
        a: "Türkiye'de faturalı satın alınmış, genellikle son 30-60 gün içinde alınmış veya IMEI kontrolünden geçen cihazlar sigortalanabilir.",
      },
      {
        q: "Hasar durumunda ne yapmalıyım?",
        a: "Hasarınızı uygulama veya çağrı merkezi üzerinden bildirin; cihazınız anlaşmalı servise yönlendirilir. Onarılamayan cihazlar muadili ile değiştirilir.",
      },
    ],
    sections: [
      {
        h: "Cep Telefonu Sigortası Mantıklı mı?",
        p: [
          "Akıllı telefon fiyatlarının geldiği seviyede, bir ekran değişimi bile ciddi maliyet oluşturuyor. Cep telefonu sigortası, yıllık küçük bir primle kırılma, sıvı teması ve çalınma risklerini güvence altına alır; özellikle üst segment cihazlarda kendini fazlasıyla amorti eder.",
        ],
      },
    ],
  },
  {
    slug: "isyeri-sigortasi",
    name: "İşyeri Sigortası",
    shortName: "İşyeri",
    category: "konut",
    icon: "store",
    popular: false,
    priceFrom: 3980,
    tagline: "İşiniz ve emeğiniz güvence altında",
    heroDesc:
      "Dükkanınız, ofisiniz veya deponuz; demirbaş ve emtianızla birlikte yangın, hırsızlık ve doğal afetlere karşı güvende.",
    metaTitle: "İşyeri Sigortası 2026 | KOBİ ve Esnaf Paketleri",
    metaDescription:
      "İşyeri sigortası ile dükkan, ofis ve deponuz yangın, hırsızlık, su baskını risklerine karşı güvende. KOBİ paketlerini karşılaştırın.",
    keywords: ["işyeri sigortası", "dükkan sigortası", "kobi sigortası", "esnaf sigortası"],
    coverages: [
      { title: "Yangın ve Doğal Afet", desc: "Bina, demirbaş ve emtia hasarları" },
      { title: "Hırsızlık", desc: "Emtia, demirbaş ve kasa içeriği" },
      { title: "İş Durması", desc: "Hasar sonrası kâr kaybı teminatı" },
      { title: "Üçüncü Şahıs Sorumluluk", desc: "Müşteri ve ziyaretçilere karşı sorumluluklar" },
      { title: "Elektronik Cihaz", desc: "Kasa, pos ve bilgisayar sistemleri" },
      { title: "Cam Kırılması", desc: "Vitrin ve cam yüzeyler" },
    ],
    faqs: [
      {
        q: "İş durması teminatı nedir?",
        a: "Yangın gibi büyük bir hasar sonrası işyerinizin faaliyetine ara vermek zorunda kalması durumunda, kaybedilen kârı ve sabit giderleri belirli süre boyunca karşılayan teminattır.",
      },
      {
        q: "Kiracı olarak işyeri sigortası yaptırabilir miyim?",
        a: "Evet. Bina teminatını mal sahibi, demirbaş ve emtia teminatını kiracı yaptırabilir; dekorasyon harcamalarınızı da teminata ekleyebilirsiniz.",
      },
    ],
    sections: [
      {
        h: "İşyeri Sigortası Neleri Kapsar?",
        p: [
          "İşyeri sigortası; binanızı, demirbaşlarınızı, emtianızı ve cirodan doğan kâr beklentinizi yangın, hırsızlık, su baskını, fırtına ve benzeri risklere karşı paket halinde güvence altına alır. Sektörünüze göre teminatlar özelleştirilebilir.",
        ],
      },
    ],
  },
  {
    slug: "imm-sigortasi",
    name: "İhtiyari Mali Mesuliyet (İMM)",
    shortName: "İMM",
    category: "arac",
    icon: "shieldPlus",
    popular: false,
    priceFrom: 950,
    tagline: "Trafik sigortası limitlerinin ötesinde koruma",
    heroDesc:
      "Trafik sigortası limitlerini aşan hasarlarda devreye giren İMM ile milyonluk araçlara karşı kendinizi güvence altına alın.",
    metaTitle: "İMM Sigortası 2026 | İhtiyari Mali Mesuliyet Teklifi Al",
    metaDescription:
      "İMM (İhtiyari Mali Mesuliyet) sigortası ile trafik sigortası limitini aşan hasarlara karşı güvende olun. Limitsiz İMM fiyatlarını karşılaştırın.",
    keywords: ["imm", "ihtiyari mali mesuliyet", "limitsiz imm", "imm sigortası fiyatları"],
    coverages: [
      { title: "Maddi Hasar Ek Limiti", desc: "Trafik sigortası limitini aşan araç ve eşya hasarları" },
      { title: "Bedeni Zarar Ek Limiti", desc: "Tedavi, maluliyet ve vefat tazminatlarında ek güvence" },
      { title: "Limitsiz Seçenek", desc: "Üst sınırsız teminat imkânı" },
      { title: "Manevi Tazminat", desc: "Mahkeme kararlı manevi tazminat talepleri (pakete bağlı)" },
    ],
    faqs: [
      {
        q: "İMM sigortası neden gerekli?",
        a: "Lüks bir araca çarptığınızda hasar, zorunlu trafik sigortası limitini kolayca aşabilir. Aşan kısım şahsi mal varlığınızdan tahsil edilir. İMM bu farkı kapatır; limitsiz seçenekle tam koruma sağlar.",
      },
      {
        q: "İMM kasko yerine geçer mi?",
        a: "Hayır. İMM karşı tarafa verdiğiniz zararların trafik sigortasını aşan kısmını öder; kendi aracınızın hasarını karşılamaz. Kasko poliçenize ek teminat olarak da eklenebilir.",
      },
    ],
    sections: [
      {
        h: "İMM (İhtiyari Mali Mesuliyet) Nedir?",
        p: [
          "İhtiyari Mali Mesuliyet sigortası, karıştığınız kazada karşı tarafa verdiğiniz zararın zorunlu trafik sigortası limitlerini aşması durumunda devreye giren ek sorumluluk sigortasıdır. Yıllık düşük primlerle limitsiz teminat seçeneği sunması nedeniyle her sürücüye önerilir.",
        ],
      },
    ],
  },
  {
    slug: "yabanci-saglik-sigortasi",
    name: "Yabancı Sağlık Sigortası",
    shortName: "Yabancı Sağlık",
    category: "saglik",
    icon: "globeHealth",
    popular: false,
    priceFrom: 2750,
    tagline: "İkamet izni için uygun fiyatlı sağlık güvencesi",
    heroDesc:
      "Türkiye'de ikamet izni başvurusu için gerekli, Göç İdaresi onaylı yabancı sağlık sigortanızı dakikalar içinde yaptırın.",
    metaTitle: "Yabancı Sağlık Sigortası 2026 | İkamet İzni Sigortası",
    metaDescription:
      "İkamet izni başvurusu için Göç İdaresi kriterlerine uygun yabancı sağlık sigortası. Uygun fiyatlı planları karşılaştırın, poliçeniz anında hazır.",
    keywords: ["yabancı sağlık sigortası", "ikamet izni sigortası", "yabancılar için sağlık sigortası", "residence permit insurance"],
    coverages: [
      { title: "Yatarak Tedavi", desc: "Ameliyat ve hastane yatış giderleri" },
      { title: "Ayakta Tedavi", desc: "Muayene, tahlil ve görüntüleme (limitli)" },
      { title: "Acil Tedavi", desc: "Acil servis müdahaleleri" },
      { title: "Göç İdaresi Uyumu", desc: "İkamet izni başvuru kriterlerine tam uyum" },
    ],
    faqs: [
      {
        q: "İkamet izni için hangi sigorta gerekli?",
        a: "Göç İdaresi, ikamet izni başvurularında asgari teminat yapısı belirlenmiş özel sağlık sigortası şartı arar. Poliçelerimiz ilgili genelgeye tam uyumludur ve başvurularda kabul edilir.",
      },
      {
        q: "Poliçe süresi ne kadar olmalı?",
        a: "Talep ettiğiniz ikamet izni süresini kapsayacak şekilde 1 veya 2 yıllık poliçe düzenlenir.",
      },
    ],
    sections: [
      {
        h: "Yabancı Sağlık Sigortası Nedir?",
        p: [
          "Yabancı sağlık sigortası, Türkiye'de ikamet izni almak isteyen yabancı uyruklu kişiler için zorunlu tutulan, Göç İdaresi kriterlerine uygun teminatlar içeren özel sağlık sigortasıdır. Poliçe, ikamet süresi boyunca yatarak ve ayakta tedavi giderlerini belirlenen limitler dahilinde karşılar.",
        ],
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(cat: ProductCategory): Product[] {
  return products.filter((p) => p.category === cat);
}

export const popularProducts = products.filter((p) => p.popular);
