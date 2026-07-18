"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Fasilitas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const facilities = [
    { title: "Ruang Kelas Modern", description: "Ruang belajar nyaman dengan perangkat multimedia dan AC untuk mendukung proses pembelajaran optimal.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { title: "Laboratorium Radiologi", description: "Laboratorium lengkap dengan peralatan radiografi, CT Scan simulator, dan MRI phantom untuk praktik.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
    { title: "Perpustakaan Digital", description: "Koleksi jurnal internasional, buku referensi radiologi, dan akses database medis online.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { title: "Ruang Praktik Klinik", description: "Area praktik simulasi dengan phantom dan peralatan imaging terkini sesuai standar rumah sakit.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
    { title: "Aula & Auditorium", description: "Fasilitas untuk seminar, workshop, dan acara akademik dengan kapasitas besar.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg> },
    { title: "Area Komputer", description: "Lab komputer dengan software DICOM viewer dan aplikasi pencitraan medis terbaru.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fasil-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".fasil-heading", start: "top 85%" } }
      );
      gsap.fromTo(".fasil-card",
        { opacity: 0, y: 60, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".fasil-grid", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="fasilitas" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fasil-heading">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Fasilitas<span className="gradient-text"> Modern & Lengkap</span></h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Didukung oleh fasilitas terbaik untuk memastikan pengalaman belajar yang optimal.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fasil-grid">
          {facilities.map((f) => (
            <div key={f.title} className="fasil-card group bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] card-hover border border-gray-100">
              <div className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
