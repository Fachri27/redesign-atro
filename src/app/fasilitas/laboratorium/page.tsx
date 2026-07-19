import InnerPage from "@/components/InnerPage";

export default function Laboratorium() {
  return (
    <InnerPage
      title="Laboratorium Radiologi"
      subtitle="Fasilitas laboratorium radiologi lengkap dengan peralatan modern."
      breadcrumbs={[{ label: "Fasilitas" }, { label: "Laboratorium Radiologi" }]}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <img src="https://atrodas.ac.id/wp-content/uploads/2024/10/DSC03459-scaled.jpg" alt="Laboratorium Radiologi ATRO DAS" className="w-full h-64 object-cover" />
        </div>

        <div className="bg-primary text-white p-8">
          <p className="leading-relaxed">
            Laboratorium radiologi ATRO DAS dilengkapi dengan peralatan terkini dari berbagai vendor, memungkinkan mahasiswa berlatih menggunakan teknologi yang sesungguhnya sebelum terjun ke lapangan kerja.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Ruang Radiografi", desc: "Unit radiografi konvensional dengan generator X-ray digital untuk praktik pencitraan dasar." },
            { title: "Ruang CT Scan", desc: "Simulator dan peralatan CT Scan untuk pembelajaran pencitraan tomografi terkomputerisasi." },
            { title: "Ruang USG", desc: "Unit ultrasonografi untuk praktik pencitraan dengan gelombang suara." },
            { title: "Ruang Darkroom Digital", desc: "Pengolahan citra digital dan PACS (Picture Archiving and Communication System)." },
            { title: "Laboratorium Komputer", desc: "Komputer dengan software radiologi terbaru untuk simulasi dan analisis citra." },
            { title: "Ruang Proteksi Radiasi", desc: "Pembelajaran dosimetri dan proteksi radiasi dengan alat ukur dosis radiasi." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-sm p-6">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
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
