"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface InnerPageProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  children: React.ReactNode;
}

export default function InnerPage({ title, subtitle, breadcrumbs, children }: InnerPageProps) {
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
      <div className="pt-28 bg-gradient-to-br from-gray-900 to-gray-800" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-primary transition-colors">Beranda</a>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</a>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
        </div>
      </div>
      <div ref={contentRef} className="bg-gray-50 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
