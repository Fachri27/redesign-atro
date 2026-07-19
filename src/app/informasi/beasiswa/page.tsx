import InnerPage from "@/components/InnerPage";

export default function Beasiswa() {
  return (
    <InnerPage
      title="Beasiswa"
      subtitle="Informasi beasiswa dan bantuan finansial untuk mahasiswa ATRO DAS."
      breadcrumbs={[{ label: "Informasi" }, { label: "Beasiswa" }]}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Program Beasiswa ATRO DAS</h3>
          <p className="text-gray-600 leading-relaxed">
            ATRO DAS berkomitmen untuk memberikan akses pendidikan yang berkualitas bagi seluruh calon mahasiswa. Berbagai program beasiswa tersedia untuk mendukung mahasiswa berprestasi dan kurang mampu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Beasiswa Prestasi Akademik", desc: "Diberikan kepada mahasiswa dengan IPK tertinggi di setiap semester. Potongan biaya kuliah hingga 50%.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
            { title: "Beasiswa Ketidakmampuan", desc: "Diberikan kepada mahasiswa dari keluarga kurang mampu yang dibuktikan dengan surat keterangan.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { title: "Beasiswa BIDIKMISI", desc: "Program beasiswa pemerintah untuk mahasiswa dari keluarga tidak mampu (mengikuti ketentuan Kementerian Dikbudristek).", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
            { title: "Beasiswa Kerjasama Industri", desc: "Beasiswa dari mitra industri/rumah sakit yang bekerja sama dengan ATRO DAS, termasuk ikatan dinas.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
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

        <div className="bg-primary/5 border border-primary/20 p-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <div>
              <p className="text-gray-700 font-semibold">Informasi Lebih Lanjut</p>
              <p className="text-gray-600 text-sm">Hubungi bagian akademik ATRO DAS di nomor 0821-1498-9003 atau email info@atrodas.ac.id untuk informasi pendaftaran beasiswa.</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
