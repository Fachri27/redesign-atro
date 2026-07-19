"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PMBPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(contentRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
    return () => { tl.kill(); };
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-28 bg-gradient-to-br from-primary to-primary-light" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Penerimaan Mahasiswa Baru</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Bergabunglah bersama kami dan jadilah jawaban dunia masa depan #disinisekarang
          </p>
        </div>
      </div>

      <div ref={contentRef} className="bg-gray-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

          <div className="bg-white border border-gray-100 shadow-sm p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Persyaratan Pendaftaran</h3>
            <div className="grid sm:grid-cols-2 gap-3">
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
                { step: "01", title: "Pendaftaran Online", desc: "Isi formulir pendaftaran secara online melalui website ini." },
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

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Program Studi</h3>
              <p className="text-gray-600 mb-4">D-IV Teknologi Radiologi Pencitraan (TRP) — 4 tahun, 150 SKS</p>
              <a href="/prodi/d4-trp" className="text-primary font-semibold text-sm hover:underline">Selengkapnya &rarr;</a>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biaya Kuliah</h3>
              <p className="text-gray-600 mb-4">Informasi lengkap mengenai biaya pendidikan dan cicilan.</p>
              <a href="https://pmb.atrodas.ac.id/informasipendaftaran/#informasibiayaperkuliahan" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">Lihat Rincian &rarr;</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://pmb.atrodas.ac.id/daftar" target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-white p-8 text-center font-bold text-xl hover:bg-primary-light transition-colors shadow-lg">
              Daftar Online Sekarang
            </a>
            <a href="https://pmb.atrodas.ac.id/informasipendaftaran/#alurpendaftaran" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-900 text-white p-8 text-center font-bold text-xl hover:bg-gray-800 transition-colors shadow-lg">
              Informasi Lengkap PMB
            </a>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-6">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <div>
                <p className="text-gray-700 font-semibold">Butuh Bantuan?</p>
                <p className="text-gray-600 text-sm">Hubungi Admin PMB di nomor <strong>0811-494-9003</strong> atau email <strong>info@atrodas.ac.id</strong></p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
