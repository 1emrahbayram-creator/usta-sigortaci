export type Insurer = {
  id: string;
  name: string;
  short: string;
  color: string;
  rating: number;
  founded: number;
  desc: string;
};

export const insurers: Insurer[] = [
  { id: "anadolu", name: "Anadolu Sigorta", short: "AS", color: "#005baa", rating: 4.7, founded: 1925, desc: "Türkiye'nin ilk ulusal sigorta şirketi; kasko ve yangın branşlarında geniş servis ağı." },
  { id: "allianz", name: "Allianz Sigorta", short: "AZ", color: "#003781", rating: 4.8, founded: 1890, desc: "Dünyanın önde gelen sigorta gruplarından; sağlık branşında Türkiye lideri." },
  { id: "axa", name: "AXA Sigorta", short: "AX", color: "#00008f", rating: 4.6, founded: 1817, desc: "Global deneyimiyle araç ve konut sigortalarında güçlü hasar yönetimi." },
  { id: "aksigorta", name: "Aksigorta", short: "AK", color: "#e30613", rating: 4.5, founded: 1960, desc: "Sabancı ortaklığıyla dijital sigortacılıkta öncü şirketlerden." },
  { id: "sompo", name: "Sompo Sigorta", short: "SO", color: "#c8102e", rating: 4.6, founded: 1888, desc: "Japon köklü; kasko ve trafik sigortasında rekabetçi fiyat lideri." },
  { id: "hdi", name: "HDI Sigorta", short: "HD", color: "#006540", rating: 4.4, founded: 1903, desc: "Alman güvencesiyle araç dışı branşlarda geniş teminat seçenekleri." },
  { id: "mapfre", name: "MAPFRE Sigorta", short: "MP", color: "#d81e05", rating: 4.5, founded: 1933, desc: "İspanyol kökenli; sağlık ve seyahat sigortalarında uzman." },
  { id: "zurich", name: "Zurich Sigorta", short: "ZH", color: "#2167ae", rating: 4.6, founded: 1872, desc: "İsviçre merkezli; konut ve işyeri paketlerinde esnek teminatlar." },
  { id: "turkiye", name: "Türkiye Sigorta", short: "TS", color: "#e4002b", rating: 4.5, founded: 2020, desc: "Kamu güvencesiyle Türkiye'nin en büyük sigorta şirketi." },
  { id: "ray", name: "Ray Sigorta", short: "RS", color: "#f39200", rating: 4.3, founded: 1958, desc: "Vienna Insurance Group üyesi; hızlı poliçeleşme süreçleri." },
  { id: "quick", name: "Quick Sigorta", short: "QS", color: "#6f2c91", rating: 4.4, founded: 2017, desc: "Yeni nesil dijital sigortacılık; tamamen online süreçler." },
  { id: "neova", name: "Neova Sigorta", short: "NV", color: "#00a19a", rating: 4.3, founded: 2009, desc: "Katılım sigortacılığı prensipleriyle çalışan öncü şirket." },
];

export function getInsurer(id: string): Insurer | undefined {
  return insurers.find((i) => i.id === id);
}
