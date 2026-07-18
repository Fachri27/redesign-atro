"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramStudi() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const curriculum = [
    "Anatomy & Positioning",
    "Radiographic Physics",
    "Digital Imaging Technology",
    "Computed Tomography (CT)",
    "Magnetic Resonance Imaging (MRI)",
    "Radiation Protection",
    "Clinical Practice",
  ];

  const infoCards = [
    { label: "Jenjang", value: "D4 (Sarjana Terapan)", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { label: "Durasi", value: "4 Tahun (8 Semester)", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { label: "Gelar", value: "S.Tr.Rad", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    { label: "Akreditasi", value: "Baik", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".prodi-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".prodi-heading", start: "top 85%" } }
      );
      gsap.fromTo(".prodi-left",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".prodi-grid", start: "top 80%" } }
      );
      gsap.fromTo(".prodi-right",
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: ".prodi-grid", start: "top 80%" } }
      );
      gsap.fromTo(".curriculum-item",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power3.out", delay: 0.5,
          scrollTrigger: { trigger: ".prodi-right", start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="prodi" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 prodi-heading">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold mb-4">Program Studi</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            D4 Radiologi<br />
            <span className="gradient-text">Pencitraan (TRP)</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Menghasilkan tenaga radiografer profesional yang kompeten dalam mengoperasikan peralatan pencitraan medis modern</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch prodi-grid">
          {/* Left - Info */}
          <div className="prodi-left flex flex-col">
            <div className="bg-gradient-to-br from-primary to-primary-light p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Program Unggulan</p>
                    <h3 className="text-2xl font-bold">D4 Teknik Radiologi Pencitraan</h3>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-8">Program studi ini dirancang untuk menghasilkan lulusan yang kompeten dalam mengoperasikan peralatan pencitraan medis modern seperti CT Scan, MRI, dan Rontgen dengan standar profesional tinggi.</p>
                <div className="grid grid-cols-2 gap-4">
                  {infoCards.map((item) => (
                    <div key={item.label} className="bg-white/10 backdrop-blur-sm p-4 hover:bg-white/15 transition-colors">
                      <div className="flex items-center gap-2 mb-2 text-white/60">
                        {item.icon}
                        <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
                      </div>
                      <p className="font-bold text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="https://atrodas.ac.id/prodi-d4-sarjana-terapan-radiologi-trp/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold hover:bg-primary-light hover:shadow-lg transition-all duration-300">
              Lihat Kurikulum Lengkap
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>

          {/* Right - Curriculum */}
          <div className="prodi-right bg-gray-900 p-8 sm:p-10 text-white shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold">Mata Kuliah Utama</h4>
                <p className="text-gray-400 text-sm">Kurikulum berstandar nasional</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              {curriculum.map((item, index) => (
                <div key={item} className="curriculum-item flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-primary/20 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white font-bold text-xs shrink-0 transition-all duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                + Mata kuliah umum dan pilihan lainnya sesuai kurikulum nasional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
