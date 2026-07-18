import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ATRO DAS - Akademi Teknik Radiologi Dr. Adji Saptogino",
    template: "%s | ATRO DAS",
  },
  description: "Akademi Teknik Radiologi Dr. Adji Saptogino (ATRODAS) Karawang - Pendidikan D4 Teknik Radiologi Pencitraan (TRP) berkualitas dengan fasilitas modern dan laboratorium radiologi lengkap.",
  keywords: [
    "akademi radiologi",
    "D4 radiologi pencitraan",
    "TRP",
    "teknik radiologi pencitraan",
    "ATRODAS",
    "ATRO DAS",
    "akademi teknik radiologi dr adji saptogino",
    "pendidikan radiologi",
    "radiografer",
    "Karawang",
    "kuliah radiologi",
    "PMB radiologi",
    "D4 kesehatan",
    "radiologi medis",
    "CT Scan",
    "MRI",
    "rontgen",
  ],
  authors: [{ name: "ATRODAS Karawang" }],
  creator: "ATRODAS Karawang",
  publisher: "Akademi Teknik Radiologi Dr. Adji Saptogino",
  metadataBase: new URL("https://atrodas.ac.id"),
  alternates: {
    canonical: "https://atrodas.ac.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "ATRO DAS - Akademi Teknik Radiologi Dr. Adji Saptogino",
    title: "ATRO DAS - Akademi Teknik Radiologi Dr. Adji Saptogino",
    description: "Pendidikan D4 Teknik Radiologi Pencitraan (TRP) berkualitas dengan fasilitas modern dan laboratorium radiologi lengkap di Karawang, Jawa Barat.",
    images: [
      {
        url: "https://atrodas.ac.id/wp-content/uploads/2024/10/logo-atrodege.png",
        width: 5000,
        height: 1500,
        alt: "Logo ATRO DAS - Akademi Teknik Radiologi Dr. Adji Saptogino",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATRO DAS - Akademi Teknik Radiologi Dr. Adji Saptogino",
    description: "Pendidikan D4 Teknik Radiologi Pencitraan (TRP) berkualitas dengan fasilitas modern dan laboratorium radiologi lengkap di Karawang, Jawa Barat.",
    images: ["https://atrodas.ac.id/wp-content/uploads/2024/10/logo-atrodege.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://atrodas.ac.id/wp-content/uploads/2024/10/logo-atro.png",
    shortcut: "https://atrodas.ac.id/wp-content/uploads/2024/10/logo-atro.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
