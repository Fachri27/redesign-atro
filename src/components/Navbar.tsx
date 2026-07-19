"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navLinks = [
  {
    label: "Profil",
    href: "#tentang",
    children: [
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Struktur Organisasi", href: "/profil/struktur-organisasi" },
      { label: "Lokasi Kampus", href: "/profil/lokasi-kampus" },
      { label: "Galeri Kegiatan", href: "/profil/galeri-kegiatan" },
    ],
  },
  {
    label: "Program Studi",
    href: "#prodi",
    children: [
      { label: "Prodi D4 TRP", href: "/prodi/d4-trp" },
      { label: "Kurikulum D4 Radiologi", href: "/prodi/kurikulum" },
      { label: "Profil Lulusan", href: "/prodi/profil-lulusan" },
    ],
  },
  {
    label: "Fasilitas",
    href: "#fasilitas",
    children: [
      { label: "Ruang Kelas", href: "/fasilitas/ruang-kelas" },
      { label: "Laboratorium Radiologi", href: "/fasilitas/laboratorium" },
      { label: "Perpustakaan", href: "/fasilitas/perpustakaan" },
    ],
  },
  {
    label: "Informasi",
    href: "#berita",
    children: [
      { label: "Informasi Akademik", href: "/informasi/akademik" },
      { label: "Artikel Radiologi", href: "/informasi/artikel" },
      { label: "Berita Seputar Kampus", href: "/informasi/berita" },
      { label: "Beasiswa", href: "/informasi/beasiswa" },
      { label: "Tentang PMB", href: "/informasi/pmb" },
    ],
  },
  { label: "Kontak", href: "#kontak" },
];

function smoothScrollTo(href: string) {
  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }
  const target = document.querySelector(href);
  if (!target) return;
  gsap.to(window, {
    duration: 1.2,
    scrollTo: { y: target, offsetY: 80 },
    ease: "power3.inOut",
  });
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50" style={{ width: "100vw", maxWidth: "100%", overflow: "hidden" }}>
      {/* TopBar */}
      <div className={`bg-gray-900 text-white text-sm overflow-hidden transition-all duration-500 ${isScrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="mailto:info@atrodas.ac.id" className="hidden md:flex items-center gap-2 hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@atrodas.ac.id
              </a>
              <a href="https://wa.me/+6282114989003" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors min-w-0">
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp: +62 82114989003</span>
                <span className="sm:hidden truncate">082114989003</span>
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://www.instagram.com/atro.das" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://pmb.atrodas.ac.id/" target="_blank" rel="noopener noreferrer" className="px-3 sm:px-4 py-1 bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors">
                <span className="hidden sm:inline">Penerimaan Mahasiswa Baru</span>
                <span className="sm:hidden">PMB</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white/95 backdrop-blur-md transition-all duration-500 ${isScrolled ? "shadow-xl py-3" : "py-3"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#beranda" onClick={(e) => { e.preventDefault(); smoothScrollTo("#beranda"); }}>
                <img src="https://atrodas.ac.id/wp-content/uploads/2024/10/logo-atro.png" alt="Logo ATRO DAS" className="h-14 w-auto object-contain" />
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link, i) => (
                <div key={link.href} className="relative">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                        onMouseEnter={() => setOpenDropdown(i)}
                        className="px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary flex items-center gap-1"
                      >
                        {link.label}
                        <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      <div
                        onMouseLeave={() => setOpenDropdown(null)}
                        className={`absolute top-full left-0 mt-1 bg-white shadow-2xl border border-gray-100 min-w-[240px] transition-all duration-200 ${openDropdown === i ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                      >
                        {link.children.map((child) => (
                          <a key={child.href} href={child.href} className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); }}
                      className="px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <a href="https://pmb.atrodas.ac.id/" target="_blank" rel="noopener noreferrer" className="ml-4 px-6 py-2.5 bg-primary text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                Daftar Sekarang
              </a>
            </div>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden p-2 text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileOpen ? "max-h-[600px] mt-4" : "max-h-0"}`}>
            <div className="bg-white shadow-2xl p-4 space-y-1 border">
              {navLinks.map((link, i) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === i ? null : i)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-all font-semibold"
                      >
                        {link.label}
                        <svg className={`w-4 h-4 transition-transform duration-200 ${openMobileDropdown === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === i ? "max-h-[400px]" : "max-h-0"}`}>
                        {link.children.map((child) => (
                          <a key={child.href} href={child.href} onClick={() => setIsMobileOpen(false)} className="block pl-8 pr-4 py-2.5 text-sm text-gray-500 hover:text-primary transition-colors">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); setIsMobileOpen(false); }}
                      className="block px-4 py-3 text-gray-700 hover:bg-primary/5 hover:text-primary transition-all font-semibold"
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
              <a href="https://pmb.atrodas.ac.id/" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 bg-primary text-white text-center font-semibold mt-2">
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
