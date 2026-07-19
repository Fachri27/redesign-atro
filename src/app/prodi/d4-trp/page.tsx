import InnerPage from "@/components/InnerPage";

export default function ProdiD4TRP() {
  return (
    <InnerPage
      title="Program Studi D4 TRP"
      subtitle="D-IV Teknologi Radiologi Pencitraan — mencetak tenaga ahli radiografer yang kompeten dan profesional."
      breadcrumbs={[{ label: "Program Studi" }, { label: "Prodi D4 TRP" }]}
    >
      <div className="space-y-10">
        <div className="bg-primary text-white p-8">
          <p className="leading-relaxed">
            Akademi Teknik Radiologi Dr. Adji Saptogino (ATRO DAS) dengan bangga mempersembahkan Program Studi D-IV Teknologi Radiologi Pencitraan. Program studi berdiri pada tahun 2024, yakni berdasarkan SK. Kemendikbudristek RI No.239/D/O/2024 dirancang khusus untuk mencetak tenaga ahli radiografer yang kompeten dan profesional, guna memenuhi kebutuhan akan tenaga kesehatan di bidang radiologi yang semakin meningkat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "Program yang Ditawarkan", desc: "Pendidikan teori dan praktik di bidang radiologi, serta pengembangan kemampuan karakter dan kompetensi teknologi informasi." },
            { icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", title: "Ciri Khas", desc: "Pendidikan karakter mahasiswa melalui mata kuliah khusus dan laboratorium komputer dengan sistem radiologi terbaru dari berbagai vendor." },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Keunggulan", desc: "Kerjasama luas dengan rumah sakit dan vendor alat kesehatan, kurikulum merdeka, berafiliasi dengan RS IZZA Cikampek." },
            { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Akreditasi", desc: "Peringkat Akreditasi BAIK dari LAM-PTKes berdasarkan SK Nomor: 0031/LAM-PTKes/Akr.PB/Dip/III/2025." },
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

        <div className="bg-white border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Profil Lulusan</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Pelaksana Teknologi Radiologi Pencitraan", "Pengelola Teknologi Radiologi Pencitraan (Manager Radiodiagnostik dan Radioterapi)", "Penyuluh/Trainer Teknologi Radiologi Pencitraan", "Peneliti Teknologi Radiologi Pencitraan"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50">
                <div className="w-2 h-2 bg-primary shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Kurikulum</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Program studi berlangsung selama <strong>4 tahun</strong> dengan <strong>150 SKS</strong>, minimal 8 semester hingga maksimal 10 semester. Proses pembelajaran meliputi pemberian teori, ceramah, diskusi, seminar/workshop, praktik laboratorium, praktik kerja lapangan, dan penyusunan tugas akhir.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Praktik Kerja Lapangan dilakukan melalui kerja sama dengan rumah sakit (PKL dan KKN) di wilayah <strong>Jabodetabek</strong> serta di luar Jabodetabek.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
