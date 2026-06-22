import { Navbar } from "@/components/Navbar";
import { FloralSides } from "@/components/FloralSides";
import { Hero } from "@/components/Hero";
import { Mirror } from "@/components/Mirror";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FloralSides />
      <Navbar />
      <main>
        <Hero />
        <Mirror />
        <About />
        <Services />
        <Process />
        <Trust />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
