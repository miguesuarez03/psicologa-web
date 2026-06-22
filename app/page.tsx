import { Navbar } from "@/components/Navbar";
import { FloralSides } from "@/components/FloralSides";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloralSides />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Trust />
        <Contact />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
