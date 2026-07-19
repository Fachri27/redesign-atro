import InnerPage from "@/components/InnerPage";

export default function Perpustakaan() {
  return (
    <InnerPage
      title="Perpustakaan"
      subtitle="Koleksi referensi radiologi dan akses e-library untuk mendukung pembelajaran."
      breadcrumbs={[{ label: "Fasilitas" }, { label: "Perpustakaan" }]}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <img src="https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03509-scaled.jpg" alt="Perpustakaan ATRO DAS" className="w-full h-64 object-cover" />
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tentang Perpustakaan</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Perpustakaan ATRO DAS menyediakan koleksi literatur yang komprehensif di bidang radiologi dan kesehatan untuk mendukung kegiatan akademik mahasiswa dan dosen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Koleksi Buku", desc: "Buku referensi radiologi, anatomi, fisika kedokteran, dan ilmu kesehatan lainnya dari penerbit dalam dan luar negeri.", count: "500+" },
            { title: "Jurnal Internasional", desc: "Akses ke jurnal radiologi internasional termasuk Radiology, European Radiology, dan AJR.", count: "50+" },
            { title: "E-Library", desc: "Akses digital ke database publikasi ilmiah dan e-book untuk riset dan tugas akhir.", count: "24/7" },
            { title: "Ruang Baca", desc: "Area baca yang luas dan nyaman dengan pendingin udara, wifi, dan stop kontak untuk laptop.", count: "60 Kursi" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-sm p-6 flex gap-4">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-lg">{item.count}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white p-8">
          <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex justify-between p-3 bg-white/5">
              <span className="text-gray-400">Senin - Jumat</span>
              <span className="font-semibold">08:00 - 16:00 WIB</span>
            </div>
            <div className="flex justify-between p-3 bg-white/5">
              <span className="text-gray-400">Sabtu</span>
              <span className="font-semibold">08:00 - 12:00 WIB</span>
            </div>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
