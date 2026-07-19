import InnerPage from "@/components/InnerPage";

export default function TentangPMB() {
  return (
    <InnerPage
      title="Tentang PMB"
      subtitle="Penerimaan Mahasiswa Baru ATRO DAS — persyaratan, alur pendaftaran, dan informasi penting."
      breadcrumbs={[{ label: "Informasi" }, { label: "Tentang PMB" }]}
    >
      <div className="space-y-8">
        <div className="bg-primary text-white p-8">
          <h3 className="text-2xl font-bold mb-4">Penerimaan Mahasiswa Baru 2025</h3>
          <p className="leading-relaxed">
            Bergabunglah bersama kami dan jadilah jawaban dunia masa depan. Pendaftaran PMB ATRO DAS dibuka untuk lulusan SMA/SMK/MA jurusan IPA.
          </p>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Persyaratan Pendaftaran</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Fotocopy Ijazah SMA/SMK/MA (2 lembar)",
              "Fotocopy SKHUN (2 lembar)",
              "Fotocopy Kartu Keluarga (2 lembar)",
              "Fotocopy KTP orang tua (2 lembar)",
              "Pas foto 3x4 (6 lembar)",
              "Pas foto 2x3 (6 lembar)",
              "Surat Kesehatan dari Dokter",
              "Surat Pernyataan tidak buta warna",
              "Akta Kelahiran (fotocopy 2 lembar)",
              "Surat Keterangan Lulus / Ijazah Digital",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50">
                <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Alur Pendaftaran</h3>
          <div className="space-y-4">
            {[
              { step: "01", title: "Pendaftaran Online", desc: "Akses pmb.atrodas.ac.id dan isi formulir pendaftaran secara online." },
              { step: "02", title: "Verifikasi Berkas", desc: "Kirim berkas persyaratan dan lakukan verifikasi di kampus atau via online." },
              { step: "03", title: "Seleksi", desc: "Mengikuti seleksi sesuai jadwal yang telah ditentukan." },
              { step: "04", title: "Pengumuman", desc: "Pengumuman hasil seleksi melalui website dan WhatsApp." },
              { step: "05", title: "Daftar Ulang", desc: "Melakukan daftar ulang dan pembayaran biaya pendidikan." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold shrink-0">{item.step}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a href="https://pmb.atrodas.ac.id/daftar" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-6 text-center font-bold text-lg hover:bg-primary-light transition-colors">
            Daftar Online Sekarang
          </a>
          <a href="https://pmb.atrodas.ac.id/informasipendaftaran/#informasibiayaperkuliahan" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white p-6 text-center font-bold text-lg hover:bg-gray-800 transition-colors">
            Lihat Biaya Kuliah
          </a>
        </div>
      </div>
    </InnerPage>
  );
}
