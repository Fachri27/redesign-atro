"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Berita() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const berita = [
    { title: "Launching Kampus ATRO Dr. Adji Saptogino: Langkah Baru Menuju Pendidikan Radiologi Berkualitas", date: "20, February 2025", image: "https://atrodas.ac.id/wp-content/uploads/2025/02/IMG_20250215_104047_575-1024x768.jpg", url: "https://atrodas.ac.id/berita/launching-kampus-atro-dr-adji-saptogino-langkah-baru-menuju-pendidikan-radiologi-berkualitas/" },
    { title: "PKKMB Perdana ATRO Dr. Adji Saptogino Berjalan Sukses!", date: "24, January 2025", image: "https://atrodas.ac.id/wp-content/uploads/2025/01/foto-bersama-4-1024x768.jpg", url: "https://atrodas.ac.id/berita/pkkmb-perdana-atro-dr-adji-saptogino-berjalan-sukses/" },
    { title: "Kolaborasi ATRODAS dan RS Izza: Pelatihan Klinis Mahasiswa Radiologi", date: "19, October 2024", image: "https://atrodas.ac.id/wp-content/uploads/2024/10/Learn-Radiography.webp", url: "https://atrodas.ac.id/berita/kolaborasi-atrodas-dan-rsia-asyifaa-pelatihan-klinis-mahasiswa-radiologi/" },
    { title: "ATRODAS Karawang Menggelar Workshop Penyelenggaraan Perguruan Tinggi", date: "19, October 2024", image: "https://atrodas.ac.id/wp-content/uploads/2024/10/workshop-perguruan-tinggi-atrodas-1024x768.jpg", url: "https://atrodas.ac.id/berita/atrodas-karawang-menggelar-workshop-penyelenggaraan-perguruan-tinggi-untuk-peningkatan-kualitas-pendidikan/" },
    { title: "Pendirian Akademi Teknik Radiologi Dr. Adji Saptogino: Melahirkan Tenaga Radiografer Berkualitas", date: "19, October 2024", image: "https://atrodas.ac.id/wp-content/uploads/2024/10/banner-atrodas-pendirian-1024x522.webp", url: "https://atrodas.ac.id/berita/pendirian-akademi-teknik-radiologi-dr-adji-saptogino-melahirkan-tenaga-radiografer-berkualitas/" },
    { title: "Foto Thorax PA yang Ideal: Sekadar Gambar, atau Penentu Diagnosis?", date: "19, October 2024", image: "https://atrodas.ac.id/wp-content/uploads/2025/06/Pentingnya-Rontgen-Thorax-1024x576.webp", url: "https://atrodas.ac.id/artikel/foto-thorax-pa-yang-ideal-sekadar-gambar-atau-penentu-diagnosis/" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".berita-heading",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".berita-heading", start: "top 85%" } }
      );
      gsap.fromTo(".berita-card",
        { opacity: 0, y: 80, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".berita-grid", start: "top 85%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="berita" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 berita-heading">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">ATRODAS Hari INI</h2>
          <p className="mt-4 text-gray-500 text-lg">Berita hari ini dari ATRODAS</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 berita-grid">
          {berita.map((item) => (
            <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="berita-card group bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] card-hover border border-gray-100">
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-semibold">{item.date}</span>
                <h3 className="text-base font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{item.title}</h3>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
