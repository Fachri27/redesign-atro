import InnerPage from "@/components/InnerPage";

export default function Kurikulum() {
  const semesters = [
    {
      semester: "Semester 1",
      mataKuliah: ["Anatomi Tubuh Manusia", "Fisika Radiologi", "Pengantar Radiologi", "Bahasa Inggris", "Pendidikan Karakter", "Pengantar Teknologi Informasi"],
    },
    {
      semester: "Semester 2",
      mataKuliah: ["Anatomi Radiologi", "Fisika Radiologi Lanjut", "Teknologi Radiografi", "Kimia Dasar", "Matematika", "Pengembangan Diri"],
    },
    {
      semester: "Semester 3",
      mataKuliah: ["Radiografi Anestesi", "Radiografi Thorax", "Radiografi Abdomen", "Radiografi Extremitas", "Etika Profesi", "Biostatistik"],
    },
    {
      semester: "Semester 4",
      mataKuliah: ["Radiografi Kepala & Spine", "CT Scan", "Mammografi", "Angiografi", "Penulisan Ilmiah", "Manajemen Radiologi"],
    },
    {
      semester: "Semester 5",
      mataKuliah: ["Radioterapi", "USG", "Nuklir Kedokteran", "PACS & RIS", "Radiologi Interventional", "Metodologi Penelitian"],
    },
    {
      semester: "Semester 6",
      mataKuliah: ["Radiologi Forensik", "Pediatric Radiologi", "Emergency Radiologi", "Quality Assurance", "Kewirausahaan", "Penulisan Karya Ilmiah"],
    },
    {
      semester: "Semester 7",
      mataKuliah: ["Praktik Kerja Lapangan (PKL)", "Seminari Radiologi", "Manajemen Pelayanan Radiologi", "Komunikasi Efektif"],
    },
    {
      semester: "Semester 8",
      mataKuliah: ["Tugas Akhir", "Ujian Kompetensi", "Seminar Hasil"],
    },
  ];

  return (
    <InnerPage
      title="Kurikulum D4 Radiologi"
      subtitle="Kurikulum Program Studi D4 Teknologi Radiologi Pencitraan — 150 SKS, 4 tahun."
      breadcrumbs={[{ label: "Program Studi" }, { label: "Kurikulum" }]}
    >
      <div className="space-y-4">
        {semesters.map((s, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-sm">
            <div className="bg-gray-900 text-white px-6 py-3 font-bold">{s.semester}</div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {s.mataKuliah.map((mk, j) => (
                  <div key={j} className="flex items-center gap-3 p-3 bg-gray-50">
                    <div className="w-2 h-2 bg-primary shrink-0" />
                    <span className="text-gray-700 text-sm">{mk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
