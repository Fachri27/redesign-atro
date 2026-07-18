"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PmbBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pmb-text",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".pmb-content", start: "top 80%" } }
      );
      gsap.fromTo(".pmb-logo",
        { opacity: 0, x: 60, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: ".pmb-content", start: "top 80%" } }
      );

      gsap.fromTo(".pmb-bg",
        { backgroundPositionY: "0%" },
        { backgroundPositionY: "30%", ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden" ref={sectionRef}>
      <div
        className="pmb-bg absolute inset-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1600&q=80')", backgroundSize: "100% 150%" }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pmb-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 pmb-text">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Informasi Pendaftaran<br /><span className="text-yellow-300">Mahasiswa Baru</span></h2>
            <p className="text-white/80 text-lg leading-relaxed">Pendaftaran Mahasiswa Baru Akademi Teknik Radiologi Dr. Adji Saptogino (ATRODAS) Karawang Tahun Ajaran 2025/2026 telah dibuka. Anda dapat melakukan pendaftaran secara online pada website resmi kami di <a href="https://pmb.atrodas.ac.id" target="_blank" rel="noopener noreferrer" className="text-yellow-300 font-semibold hover:underline">pmb.atrodas.ac.id</a></p>
            <p className="text-white/80">Anda juga dapat menghubungi kami di nomor <strong className="text-yellow-300">08114949003</strong> (Whatsapp).</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://pmb.atrodas.ac.id/daftar" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-primary text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Daftar Kuliah Sekarang
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="https://wa.me/+6282114989003" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300">Hubungi Kami</a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center pmb-logo">
            <div className="w-72 h-72 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-8">
              <img src="https://atrodas.ac.id/wp-content/uploads/2025/01/logo-atrodege-puith.png" alt="Logo ATRO DAS" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
