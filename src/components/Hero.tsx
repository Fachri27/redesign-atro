"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";

const slides = [
  {
    image: "https://atrodas.ac.id/wp-content/uploads/slider/cache/f010c58bd6bbd8b1519b49c4255c99a6/IMG_20250215_104047_575-scaled.jpg",
    title: "Launching Kampus ATRO Dr. Adji Saptogino",
    subtitle: "Langkah Baru Menuju Pendidikan Radiologi Berkualitas",
  },
  {
    image: "https://atrodas.ac.id/wp-content/uploads/slider/cache/18d9052e4d8f61a172842376e39ff9ae/foto-bersama-4-scaled.jpg",
    title: "PKKMB Perdana ATRO Dr. Adji Saptogino",
    subtitle: "Berjalan Sukses! Angkatan Pertama Memulai Perjalanan",
  },
  {
    image: "https://atrodas.ac.id/wp-content/uploads/slider/cache/7ed4262adba3fdb4eb55e2d56b3d805a/slide-mangapa@3x-scaled.jpg",
    title: "Mengapa Harus Kuliah di ATRODAS?",
    subtitle: "Raih Karir Cemerlang di Bidang Kesehatan",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const animateText = useCallback(() => {
    if (!textRef.current) return;
    const els = textRef.current.querySelectorAll(".hero-animate");
    gsap.fromTo(els,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => {
      setIsAnimating(false);
      animateText();
    }, 100);
  }, [isAnimating, animateText]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
  }, []);

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetInterval]);

  useEffect(() => {
    animateText();
  }, [current, animateText]);

  return (
    <section id="beranda" className="relative h-[800px] sm:h-[800px] lg:h-[990px] overflow-hidden pt-40">
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
        </div>
      ))}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div ref={textRef} className="max-w-2xl text-white space-y-6">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">PMB 2025/2026 Telah Dibuka</span>
          </div>
          <h1 className="hero-animate text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{slides[current].title}</h1>
          <p className="hero-animate text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">{slides[current].subtitle}</p>
          <div className="hero-animate flex flex-wrap gap-4 pt-2">
            <a href="https://pmb.atrodas.ac.id/" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-primary text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Daftar Sekarang
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#tentang" className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => { goToSlide(i); resetInterval(); }} className={`h-2.5 transition-all duration-300 ${i === current ? "bg-accent w-8" : "bg-white/50 hover:bg-white/80 w-2.5"}`} />
        ))}
      </div>
      <button onClick={() => { goToSlide((current - 1 + slides.length) % slides.length); resetInterval(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={() => { goToSlide((current + 1) % slides.length); resetInterval(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
}
