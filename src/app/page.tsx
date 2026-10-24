import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ServicesBento from "@/components/ServicesBento";
import AboutSophia from "@/components/AboutSophia";
import Testimonials from "@/components/Testimonials";
import ProcessFaq from "@/components/ProcessFaq";
import ContactLocation from "@/components/ContactLocation";
import CtaFooter from "@/components/CtaFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F11] text-[#F5F5F7] selection:bg-[#D4AF37] selection:text-[#0F0F11] overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <ServicesBento />
      <AboutSophia />
      <Testimonials />
      <ProcessFaq />
      <ContactLocation />
      <CtaFooter />
      <FloatingWhatsApp />
    </main>
  );
}
