import InnerPage from "@/components/InnerPage";

export default function ArtikelRadiologi() {
  const artikel = [
    {
      title: "Pengenalan Radiografi Digital",
      desc: "Teknologi radiografi digital memungkinkan pencitraan medis dengan kualitas lebih baik dan dosis radiasi lebih rendah.",
      category: "Teknologi",
    },
    {
      title: "Proteksi Radiasi dalam Praktik Klinis",
      desc: "Prinsip ALARA (As Low As Reasonably Achievable) dalam proteksi radiasi untuk keselamatan pasien dan petugas.",
      category: "Keselamatan",
    },
    {
      title: "Peran CT Scan dalam Diagnosis Penyakit",
      desc: "Computed Tomography (CT) menjadi salah satu alat diagnostic imaging paling penting di era modern.",
      category: "Diagnostik",
    },
    {
      title: "MRI vs CT Scan: Mana yang Lebih Baik?",
      desc: "Perbandingan Magnetic Resonance Imaging (MRI) dan CT Scan dalam berbagai kondisi klinis.",
      category: "Diagnostik",
    },
    {
      title: "PACS: Sistem Manajemen Citra Radiologi",
      desc: "Picture Archiving and Communication System (PACS) merevolusi cara penyimpanan dan distribusi citra medis.",
      category: "Teknologi",
    },
    {
      title: "Radiologi Interventional: Prosedur Minimal Invasif",
      desc: "Teknik radiologi interventional memungkinkan prosedur medis minim invasif dengan bimbingan citra.",
      category: "Prosedur",
    },
  ];

  return (
    <InnerPage
      title="Artikel Radiologi"
      subtitle="Artikel dan edukasi seputar teknologi radiologi pencitraan."
      breadcrumbs={[{ label: "Informasi" }, { label: "Artikel Radiologi" }]}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artikel.map((item, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
            <div className="p-6">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1">{item.category}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
