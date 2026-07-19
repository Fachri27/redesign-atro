import InnerPage from "@/components/InnerPage";

export default function StrukturOrganisasi() {
  return (
    <InnerPage
      title="Struktur Organisasi"
      subtitle="Susunan organisasi Akademi Teknik Radiologi Dr. Adji Saptogino."
      breadcrumbs={[{ label: "Profil" }, { label: "Struktur Organisasi" }]}
    >
      <div className="bg-white border border-gray-100 shadow-sm p-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Struktur Organisasi</h3>
          <p className="text-gray-500">Susunan kepengurusan ATRO DAS</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-primary text-white px-8 py-4 text-center shadow-lg">
            <p className="font-bold text-lg">Pembina</p>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="bg-primary text-white px-8 py-4 text-center shadow-lg">
            <p className="font-bold text-lg">Ketua Yayasan</p>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="bg-primary text-white px-8 py-4 text-center shadow-lg">
            <p className="font-bold text-lg">Direktur</p>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 border border-gray-200 px-6 py-3 text-center">
              <p className="font-semibold text-gray-700">Wakil Direktur I</p>
              <p className="text-sm text-gray-500">Akademik</p>
            </div>
            <div className="bg-gray-100 border border-gray-200 px-6 py-3 text-center">
              <p className="font-semibold text-gray-700">Wakil Direktur II</p>
              <p className="text-sm text-gray-500">Umum & Keuangan</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-12 text-center italic">
          Struktur organisasi dapat berubah sewaktu-waktu sesuai kebutuhan.
        </p>
      </div>
    </InnerPage>
  );
}
