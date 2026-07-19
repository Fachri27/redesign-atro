import InnerPage from "@/components/InnerPage";

export default function InformasiAkademik() {
  return (
    <InnerPage
      title="Informasi Akademik"
      subtitle="Jadwal perkuliahan, kalender akademik, dan informasi penting lainnya."
      breadcrumbs={[{ label: "Informasi" }, { label: "Akademik" }]}
    >
      <div className="space-y-8">
        {[
          {
            title: "Tahun Akademik 2024/2025",
            items: [
              { label: "Ganjil", value: "September 2024 - Februari 2025" },
              { label: "Genap", value: "Maret 2025 - Agustus 2025" },
            ],
          },
          {
            title: "Jadwal Penting",
            items: [
              { label: "Registrasi Ulang", value: "1 - 15 September 2024" },
              { label: "Masa Orientasi", value: "16 - 18 September 2024" },
              { label: "Kuliah Perdana", value: "19 September 2024" },
              { label: "Ujian Tengah Semester", value: "21 - 31 Oktober 2024" },
              { label: "Ujian Akhir Semester", value: "13 - 24 Januari 2025" },
              { label: "Wisuda", value: "Maret 2025" },
            ],
          },
        ].map((section, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-sm">
            <div className="bg-gray-900 text-white px-6 py-3 font-bold">{section.title}</div>
            <div className="divide-y divide-gray-100">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-center justify-between px-6 py-4">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-primary/5 border border-primary/20 p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <p className="text-gray-700 font-semibold">Catatan</p>
              <p className="text-gray-600 text-sm">Jadwal dapat berubah sewaktu-waktu. Pantau pengumuman resmi dari kampus untuk informasi terkini.</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
