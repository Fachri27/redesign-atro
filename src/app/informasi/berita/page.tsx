import InnerPage from "@/components/InnerPage";

export default function BeritaKampus() {
  const berita = [
    {
      title: "ATRO DAS Raih Akreditasi BAIK dari LAM-PTKes",
      date: "Maret 2025",
      desc: "Program Studi Teknologi Radiologi Pencitraan D4 resmi mendapatkan peringkat Akreditasi BAIK dari LAM-PTKes.",
      image: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03421-scaled.jpg",
    },
    {
      title: "Kerjasama ATRO DAS dengan RS IZZA Cikampek",
      date: "2024",
      desc: "Penandatanganan kerjasama tripartik antara ATRO DAS, RS IZZA, dan mitra lainnya untuk praktik kerja lapangan mahasiswa.",
      image: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03467-scaled.jpg",
    },
    {
      title: "Kuliah Umum Teknologi Radiologi Terkini",
      date: "2024",
      desc: "Nasihat dari pakar radiologi nasional mengenai perkembangan terbaru dalam bidang pencitraan medis.",
      image: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03534-scaled.jpg",
    },
  ];

  return (
    <InnerPage
      title="Berita Seputar Kampus"
      subtitle="Informasi dan berita terkini dari ATRO DAS Karawang."
      breadcrumbs={[{ label: "Informasi" }, { label: "Berita Kampus" }]}
    >
      <div className="space-y-6">
        {berita.map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-sm flex flex-col sm:flex-row overflow-hidden">
            <div className="sm:w-64 shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-48 sm:h-full object-cover" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <span className="text-xs text-gray-400 font-semibold mb-2">{item.date}</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
