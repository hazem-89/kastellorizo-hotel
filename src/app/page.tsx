import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import Rooms from "@/components/sections/Rooms";
import HowToGetHere from "@/components/sections/HowToGetHere";
import Gallery from "@/components/sections/Gallery";
import CarettaGiftShop from "@/components/sections/CarettaGiftShop";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Rooms />
        <Gallery />
        <CarettaGiftShop />
        <Contact />
        <HowToGetHere />
      </main>
      <Footer />
    </>
  );
}
