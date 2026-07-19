import InnerPage from "@/components/InnerPage";

export default function GaleriKegiatan() {
  const galeri = [
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03421-scaled.jpg", alt: "Kegiatan Akademik" },
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03459-scaled.jpg", alt: "Praktikum Laboratorium" },
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03467-scaled.jpg", alt: "Seminar Radiologi" },
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03509-scaled.jpg", alt: "Kegiatan Mahasiswa" },
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03534-scaled.jpg", alt: "Wisuda ATRO DAS" },
    { src: "https://atrodas.ac.id/wp-content/uploads/2024/10/IMG-20241022-WA0012.jpg", alt: "Kegiatan Kampus" },
  ];

  return (
    <InnerPage
      title="Galeri Kegiatan"
      subtitle="Dokumentasi kegiatan akademik dan kemahasiswaan ATRO DAS."
      breadcrumbs={[{ label: "Profil" }, { label: "Galeri Kegiatan" }]}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galeri.map((item, i) => (
          <div key={i} className="group relative overflow-hidden bg-gray-200 aspect-[4/3]">
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm">{item.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
