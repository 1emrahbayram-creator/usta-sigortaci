export type FieldType = "text" | "tel" | "email" | "date" | "select" | "plate" | "tckn";

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  hint?: string;
};

export type FormStep = {
  title: string;
  desc: string;
  fields: FormField[];
};

const iller = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Gaziantep",
  "Kocaeli", "Mersin", "Diyarbakır", "Kayseri", "Eskişehir", "Samsun", "Denizli", "Diğer",
];

const kisiselBilgiler: FormStep = {
  title: "Kişisel Bilgiler",
  desc: "Size özel fiyat hesaplayabilmemiz için bilgilerinizi girin.",
  fields: [
    { name: "tckn", label: "TC Kimlik No", type: "tckn", placeholder: "11 haneli kimlik numaranız" },
    { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
    { name: "adSoyad", label: "Ad Soyad", type: "text", placeholder: "Adınız ve soyadınız" },
    { name: "telefon", label: "Cep Telefonu", type: "tel", placeholder: "05xx xxx xx xx" },
    { name: "email", label: "E-posta", type: "email", placeholder: "ornek@eposta.com" },
  ],
};

const aracBilgileri: FormStep = {
  title: "Araç Bilgileri",
  desc: "Plaka ve ruhsat bilgilerinizle aracınızı saniyeler içinde buluruz.",
  fields: [
    { name: "plaka", label: "Araç Plakası", type: "plate", placeholder: "34 ABC 123" },
    {
      name: "modelYili", label: "Model Yılı", type: "select",
      options: Array.from({ length: 25 }, (_, i) => String(2026 - i)),
    },
    {
      name: "marka", label: "Marka", type: "select",
      options: ["Fiat", "Renault", "Volkswagen", "Toyota", "Ford", "Hyundai", "Opel", "Peugeot", "Honda", "BMW", "Mercedes-Benz", "Audi", "Tesla", "TOGG", "Diğer"],
    },
    { name: "ruhsatNo", label: "Ruhsat Seri No (opsiyonel)", type: "text", placeholder: "AA000000", hint: "Ruhsatın ön yüzünde yer alır" },
  ],
};

const adresBilgileri: FormStep = {
  title: "Konut Bilgileri",
  desc: "Sigortalanacak konutun bilgilerini girin.",
  fields: [
    { name: "il", label: "İl", type: "select", options: iller },
    { name: "metrekare", label: "Brüt Metrekare", type: "select", options: ["50-75 m²", "76-100 m²", "101-125 m²", "126-150 m²", "151-200 m²", "200 m² üzeri"] },
    { name: "binaYasi", label: "Bina Yaşı", type: "select", options: ["0-5 yıl", "6-10 yıl", "11-20 yıl", "21-30 yıl", "30 yıl üzeri"] },
    { name: "yapiTarzi", label: "Yapı Tarzı", type: "select", options: ["Betonarme", "Çelik", "Yığma", "Diğer"] },
    { name: "kullanim", label: "Kullanım Şekli", type: "select", options: ["Mal sahibi olarak oturuyorum", "Kiracıyım", "Kiraya verdim", "Boş / yazlık"] },
  ],
};

export const quoteForms: Record<string, FormStep[]> = {
  kasko: [aracBilgileri, kisiselBilgiler],
  "trafik-sigortasi": [aracBilgileri, kisiselBilgiler],
  "imm-sigortasi": [
    {
      ...aracBilgileri,
      fields: [
        ...aracBilgileri.fields.slice(0, 3),
        { name: "limit", label: "İMM Teminat Limiti", type: "select", options: ["5 Milyon TL", "10 Milyon TL", "20 Milyon TL", "Limitsiz"] },
      ],
    },
    kisiselBilgiler,
  ],
  "tamamlayici-saglik-sigortasi": [
    {
      title: "Sağlık Bilgileri",
      desc: "Sigortalanacak kişinin temel bilgilerini girin.",
      fields: [
        { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
        { name: "cinsiyet", label: "Cinsiyet", type: "select", options: ["Kadın", "Erkek"] },
        { name: "il", label: "Yaşadığınız İl", type: "select", options: iller },
        { name: "plan", label: "Plan Tercihi", type: "select", options: ["Yatarak + Ayakta Tedavi", "Sadece Yatarak Tedavi", "Doğum Paketli"] },
      ],
    },
    kisiselBilgiler,
  ],
  "ozel-saglik-sigortasi": [
    {
      title: "Sağlık Bilgileri",
      desc: "Sigortalanacak kişinin temel bilgilerini girin.",
      fields: [
        { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
        { name: "cinsiyet", label: "Cinsiyet", type: "select", options: ["Kadın", "Erkek"] },
        { name: "il", label: "Yaşadığınız İl", type: "select", options: iller },
        { name: "kapsam", label: "Teminat Kapsamı", type: "select", options: ["Yatarak + Ayakta", "Sadece Yatarak", "Yatarak + Ayakta + Doğum"] },
      ],
    },
    kisiselBilgiler,
  ],
  dask: [
    {
      ...adresBilgileri,
      title: "Bina Bilgileri",
      desc: "DASK primi bina bilgilerinize göre hesaplanır.",
      fields: [
        ...adresBilgileri.fields.slice(0, 4),
        { name: "katSayisi", label: "Bina Kat Sayısı", type: "select", options: ["1-3 kat", "4-7 kat", "8-18 kat", "19 kat ve üzeri"] },
      ],
    },
    kisiselBilgiler,
  ],
  "konut-sigortasi": [adresBilgileri, kisiselBilgiler],
  "isyeri-sigortasi": [
    {
      title: "İşyeri Bilgileri",
      desc: "İşyerinizin faaliyet ve bina bilgilerini girin.",
      fields: [
        { name: "il", label: "İl", type: "select", options: iller },
        { name: "faaliyet", label: "Faaliyet Konusu", type: "select", options: ["Ofis / Büro", "Mağaza / Perakende", "Restoran / Kafe", "Atölye / İmalat", "Depo", "Diğer"] },
        { name: "metrekare", label: "Kapalı Alan", type: "select", options: ["50 m² altı", "50-150 m²", "151-500 m²", "500 m² üzeri"] },
        { name: "emtia", label: "Yaklaşık Emtia + Demirbaş Bedeli", type: "select", options: ["500 bin TL altı", "500 bin - 2 Milyon TL", "2-10 Milyon TL", "10 Milyon TL üzeri"] },
      ],
    },
    kisiselBilgiler,
  ],
  "seyahat-saglik-sigortasi": [
    {
      title: "Seyahat Bilgileri",
      desc: "Seyahat planınıza uygun poliçeyi hazırlayalım.",
      fields: [
        { name: "bolge", label: "Gidilecek Bölge", type: "select", options: ["Schengen / Avrupa", "ABD ve Kanada", "Tüm Dünya", "Türkiye (yurt içi)"] },
        { name: "baslangic", label: "Gidiş Tarihi", type: "date" },
        { name: "bitis", label: "Dönüş Tarihi", type: "date" },
        { name: "kisiSayisi", label: "Kişi Sayısı", type: "select", options: ["1", "2", "3", "4", "5+"] },
      ],
    },
    kisiselBilgiler,
  ],
  "hayat-sigortasi": [
    {
      title: "Teminat Tercihleri",
      desc: "İhtiyacınıza uygun güvence tutarını belirleyin.",
      fields: [
        { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
        { name: "meslek", label: "Meslek Grubu", type: "select", options: ["Ofis çalışanı", "Serbest meslek", "Sağlık çalışanı", "Eğitimci", "Sanayi / saha", "Diğer"] },
        { name: "teminat", label: "Vefat Teminatı", type: "select", options: ["1 Milyon TL", "2 Milyon TL", "5 Milyon TL", "10 Milyon TL"] },
        { name: "kritikHastalik", label: "Kritik Hastalık Teminatı", type: "select", options: ["İstemiyorum", "500 bin TL", "1 Milyon TL"] },
      ],
    },
    kisiselBilgiler,
  ],
  "ferdi-kaza-sigortasi": [
    {
      title: "Teminat Tercihleri",
      desc: "Kişisel koruma planınızı oluşturun.",
      fields: [
        { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
        { name: "meslek", label: "Meslek Grubu", type: "select", options: ["Ofis çalışanı", "Serbest meslek", "Sağlık çalışanı", "Eğitimci", "Sanayi / saha", "Diğer"] },
        { name: "teminat", label: "Kaza Sonucu Vefat Teminatı", type: "select", options: ["500 bin TL", "1 Milyon TL", "2 Milyon TL", "5 Milyon TL"] },
      ],
    },
    kisiselBilgiler,
  ],
  "evcil-hayvan-sigortasi": [
    {
      title: "Pati Bilgileri",
      desc: "Sevimli dostunuzun bilgilerini girin.",
      fields: [
        { name: "tur", label: "Tür", type: "select", options: ["Kedi", "Köpek"] },
        { name: "yas", label: "Yaş", type: "select", options: ["3 ay - 1 yaş", "1-3 yaş", "4-6 yaş", "7-8 yaş"] },
        { name: "cipNo", label: "Mikroçip No (opsiyonel)", type: "text", placeholder: "15 haneli çip numarası" },
      ],
    },
    kisiselBilgiler,
  ],
  "cep-telefonu-sigortasi": [
    {
      title: "Cihaz Bilgileri",
      desc: "Sigortalanacak telefonun bilgilerini girin.",
      fields: [
        { name: "marka", label: "Marka", type: "select", options: ["Apple", "Samsung", "Xiaomi", "Huawei", "Oppo", "Diğer"] },
        { name: "bedel", label: "Cihaz Bedeli", type: "select", options: ["20 bin TL altı", "20-40 bin TL", "40-70 bin TL", "70 bin TL üzeri"] },
        { name: "faturaTarihi", label: "Fatura Tarihi", type: "date", hint: "Son 60 gün içinde alınan cihazlar sigortalanabilir" },
      ],
    },
    kisiselBilgiler,
  ],
  "yabanci-saglik-sigortasi": [
    {
      title: "Başvuru Bilgileri",
      desc: "İkamet izni başvurunuza uygun poliçeyi hazırlayalım.",
      fields: [
        { name: "dogumTarihi", label: "Doğum Tarihi", type: "date" },
        { name: "uyruk", label: "Uyruk", type: "select", options: ["Rusya", "Ukrayna", "İran", "Irak", "Suriye", "Azerbaycan", "Kazakistan", "Diğer"] },
        { name: "sure", label: "Poliçe Süresi", type: "select", options: ["1 Yıl", "2 Yıl"] },
        { name: "il", label: "İkamet Edilecek İl", type: "select", options: iller },
      ],
    },
    kisiselBilgiler,
  ],
};

export function getQuoteForm(slug: string): FormStep[] {
  return quoteForms[slug] ?? [kisiselBilgiler];
}
