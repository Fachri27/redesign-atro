import InnerPage from "@/components/InnerPage";

export default function ProfilLulusan() {
  return (
    <InnerPage
      title="Profil Lulusan"
      subtitle="Kompetensi dan prospek karir lulusan D4 Teknologi Radiologi Pencitraan."
      breadcrumbs={[{ label: "Program Studi" }, { label: "Profil Lulusan" }]}
    >
      <div className="space-y-10">
        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Profil Lulusan</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Prodi Sarjana Terapan Teknologi Radiologi Pencitraan di ATRO DAS Karawang menghasilkan <strong>Radiografer Ahli/Advance</strong> yang kompeten di bidangnya.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Pelaksana", desc: "Melaksanakan prosedur pencitraan radiologi sesuai standar operasional" },
              { title: "Pengelola", desc: "Manager Radiodiagnostik dan Radioterapi di fasilitas kesehatan" },
              { title: "Penyuluh/Trainer", desc: "Melatih dan menyuluhkan teknologi radiologi kepada tenaga kesehatan lain" },
              { title: "Peneliti", desc: "Melakukan penelitian di bidang teknologi radiologi pencitraan" },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Kompetensi Utama</h3>
          <div className="space-y-4">
            {[
              "Menguasai teknik pencitraan radiologi (radiografi konvensional, CT Scan, MRI, USG)",
              "Mampu mengoperasikan dan mengelola peralatan radiologi dengan benar",
              "Memahami prinsip proteksi radiasi dan keselamatan kerja",
              "Mampu melakukan analisis dan interpretasi citra radiologi",
              "Menguasai sistem informasi radiologi (RIS) dan picture archiving (PACS)",
              "Memiliki kemampuan komunikasi profesional dengan pasien dan tim medis",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gray-50">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</div>
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Prospek Karir</h3>
          <p className="text-gray-600 leading-relaxed">
            Lulusan D4 Teknologi Radiologi Pencitraan dapat bekerja di rumah sakit, klinik, puskesmas, industri farmasi/kedokteran, lembaga pendidikan, dan penelitian. Kebutuhan tenaga radiografer profesional terus meningkat seiring perkembangan teknologi pencitraan medis di Indonesia.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
