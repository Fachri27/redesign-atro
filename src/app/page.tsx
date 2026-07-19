import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PmbBanner from "@/components/PmbBanner";
import About from "@/components/About";
import ProgramStudi from "@/components/ProgramStudi";
import Fasilitas from "@/components/Fasilitas";
import Berita from "@/components/Berita";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BumperLoading from "@/components/BumperLoading";

export default function Home() {
  return (
    <main className="flex-1">
      <BumperLoading />
      <Navbar />
      <Hero />
      <Berita />
      <PmbBanner />
      <About />
      <ProgramStudi />
      <Fasilitas />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
