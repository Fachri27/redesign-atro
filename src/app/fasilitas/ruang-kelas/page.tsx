import InnerPage from "@/components/InnerPage";

export default function RuangKelas() {
  return (
    <InnerPage
      title="Ruang Kelas"
      subtitle="Fasilitas ruang kelas modern dan nyaman untuk kegiatan belajar mengajar."
      breadcrumbs={[{ label: "Fasilitas" }, { label: "Ruang Kelas" }]}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <img src="https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03534-scaled.jpg" alt="Ruang Kelas ATRO DAS" className="w-full h-64 object-cover" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Ruang Kuliah", desc: "Ruang kuliah berkapasitas 40-50 mahasiswa dengan pendingin udara, proyektor, dan sound system modern.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { title: "Ruang Diskusi", desc: "Ruang diskusi kelompok kecil untuk kegiatan tutorial, presentasi, dan diskusi antar mahasiswa.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
            { title: "Ruang Multimedia", desc: "Ruang khusus dengan fasilitas multimedia untuk praktik dan simulasi pencitraan radiologi.", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
            { title: "Ruang Perpustakaan", desc: "Area baca yang luas dengan koleksi buku radiologi, jurnal internasional, dan akses e-library.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-sm p-6">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
