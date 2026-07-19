"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function BumperLoading() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setVisible(false),
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.6, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        "-=0.2"
      )
      .to(logoRef.current, { opacity: 0, y: -20, duration: 0.4, ease: "power2.in" }, "+=0.3")
      .to(textRef.current, { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" }, "-=0.3")
      .to(containerRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.7,
        ease: "power3.inOut",
      }, "-=0.1");

    return () => { tl.kill(); };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900"
    >
      <div ref={logoRef} className="mb-6">
        <img
          src="https://atrodas.ac.id/wp-content/uploads/2025/01/logo-atrodege-puith.png"
          alt="ATRO DAS"
          className="h-20 w-auto object-contain drop-shadow-lg"
        />
      </div>
      <div ref={textRef} className="text-center">
        <h1 className="text-white text-xl font-bold tracking-wide">
          ATRO DAS
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Akademi Teknik Radiologi Dr. Adji Saptogino
        </p>
      </div>
      <div
        ref={lineRef}
        className="mt-8 h-1 w-40 bg-primary origin-left"
      />
    </div>
  );
}
