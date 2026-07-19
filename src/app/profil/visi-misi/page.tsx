import InnerPage from "@/components/InnerPage";

export default function VisiMisi() {
  return (
    <InnerPage
      title="Visi & Misi"
      subtitle="Target capaian yang akan kami raih."
      breadcrumbs={[{ label: "Profil" }, { label: "Visi & Misi" }]}
    >
      <div className="space-y-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
          </div>
          <p className="text-gray-600 leading-relaxed bg-white p-6 border border-gray-100 shadow-sm">
            Pada tahun 2029, ATRO DAS menjadi institusi pendidikan radiografer yang menghasilkan lulusan dengan kemampuan unggul tingkat nasional, berkarakter, dan menguasai teknologi informasi di bidang radiologi.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Misi</h2>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm divide-y divide-gray-100">
            {[
              "Memberikan layanan pendidikan bermutu, profesional, dan terpadu melalui sistem manajemen yang diperbaiki secara terus menerus dan dukungan teknologi informasi.",
              "Mengembangkan penelitian di bidang radiologi dan meningkatkan kualitas publikasi penelitian dan pengabdian kepada masyarakat.",
              "Memberikan pelayanan dan pengabdian pada masyarakat yang berkualitas untuk memenuhi kebutuhan program pembangunan di bidang kesehatan.",
              "Mengadakan program inovasi dengan dukungan sumber daya internal dan kerjasama eksternal.",
            ].map((misi, i) => (
              <div key={i} className="flex items-start gap-4 p-6">
                <div className="w-8 h-8 bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-600 leading-relaxed">{misi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InnerPage>
  );
}
