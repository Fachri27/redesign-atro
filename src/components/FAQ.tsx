"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { question: "Bagaimana Cara Mendaftar Sebagai Mahasiswa ATRO DAS?", answer: "Untuk mendaftar sebagai mahasiswa ATRO DAS bisa melalui beberapa cara: Mendaftar secara online melalui website resmi PMB di pmb.atrodas.ac.id, atau datang langsung ke kampus ATRO DAS ke bagian penerimaan mahasiswa baru (PPMB)." },
  { question: "Di mana Lokasi Kampus ATRO DAS?", answer: "Akademi Teknik Radiologi Dr. Adji Saptogino (ATRO DAS) beralamat di: Jl. Berlian Raya Ciselang, Cikampek Utara, Kec. Kota Baru, Karawang, Jawa Barat 41374." },
  { question: "SMA/SMK Jurusan Apa Saja yang Bisa Mendaftar di ATRO DAS?", answer: "Semua jurusan SMA/SMK dapat mendaftar pada Program D4 TRP (Teknik Radiologi Pencitraan). Tidak ada batasan jurusan tertentu." },
  { question: "Apakah Tersedia Program RPL?", answer: "Tidak, ATRODAS Karawang tidak membuka program Rekognisi Pembelajaran Lampau (RPL). Untuk saat ini tidak memenuhi syarat kriteria untuk penerimaan Mahasiswa RPL dikarenakan kampus kami belum meluluskan Mahasiswa." },
  { question: "Bagaimana Peluang Karir Lulusan D4 TRP?", answer: "Peluang karir sebagai radiografer sangat luas, baik di rumah sakit, klinik, maupun pusat kesehatan, baik di Indonesia maupun luar negeri." },
  { question: "Apa Saja Rumah Sakit Jaringan ATRO DAS?", answer: "Ya, ATRODAS Karawang memiliki beberapa rumah sakit rekanan untuk praktik mahasiswa. Salah satunya adalah RS Izza Karawang." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-heading", start: "top 85%" } }
      );
      gsap.fromTo(".faq-item",
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".faq-list", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 faq-heading">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">FAQ Seputar<br /><span className="gradient-text">Akademi Teknik Radiologi Dr. Adji Saptogino</span></h2>
          <p className="mt-4 text-gray-500 text-lg">Temukan jawaban atas pertanyaan umum seputar ATRODAS Karawang</p>
        </div>
        <div className="space-y-3 faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item border transition-all duration-300 ${openIndex === index ? "border-primary/20 shadow-lg bg-primary/[0.02]" : "border-gray-200 hover:border-gray-300"}`}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`font-semibold pr-4 transition-colors ${openIndex === index ? "text-primary" : "text-gray-900"}`}>{faq.question}</span>
                <svg className={`w-5 h-5 shrink-0 transition-all duration-300 ${openIndex === index ? "text-primary rotate-180" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-60" : "max-h-0"}`}>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
