import InnerPage from "@/components/InnerPage";

export default function LokasiKampus() {
  return (
    <InnerPage
      title="Lokasi Kampus"
      subtitle="Jl. Berlian Raya Ciselang, Cikampek Utara, Kecamatan Kota Baru, Karawang, Jawa Barat."
      breadcrumbs={[{ label: "Profil" }, { label: "Lokasi Kampus" }]}
    >
      <div className="space-y-8">
        <div className="bg-white border border-gray-100 shadow-sm p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kampus Cikampek ATRO DAS</h3>
              <p className="text-gray-600 leading-relaxed">
                Jl. Berlian Raya Ciselang, Cikampek Utara, Kecamatan Kota Baru, Karawang, Jawa Barat.
              </p>
              <p className="text-gray-500 text-sm mt-2 italic">
                (Area Parkir Motor RS Izza Cikampek)
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-gray-600 text-sm">0821-1498-9003</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-gray-600 text-sm">info@atrodas.ac.id</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5!2d107.4!3d-6.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCikampek+Utara+Karawang!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </InnerPage>
  );
}
