import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ServicesGrid from "@/components/ServicesGrid";
import EditorialGallery from "@/components/EditorialGallery";
import PricingPackages from "@/components/PricingPackages";
import LocationScheduleSection from "@/components/LocationScheduleSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080809] text-[#FAFAF9] selection:bg-[#D4AF37] selection:text-black">
      {/* 100% Transparent luxury navbar with GSAP scroll reactivity */}
      <Navbar />

      {/* Dobra 1: Impactful Hero Section inspired by Joshua Bell */}
      <HeroSection />

      {/* Dobra 2 & 3: Manifesto "Eu Conto a História do Tempo..." with 2x2 cards and couple vertical photo */}
      <ManifestoSection />

      {/* Dobra 3: Catálogo detalhado das 5 especialidades + pacote personalizado */}
      <ServicesGrid />

      {/* Dobra 4: Galeria Editorial de Obras com filtro dinâmico e modal lightbox */}
      <EditorialGallery />

      {/* Dobra de Investimento: Planos e Valores transparentes (R$ 350 - R$ 800) */}
      <PricingPackages />

      {/* Dobra 5: Horários de Atendimento, Endereço e Rota GPS no Google Maps */}
      <LocationScheduleSection />

      {/* Rodapé Minimalista Editorial */}
      <Footer />

      {/* Botão Flutuante de Alta Conversão no WhatsApp */}
      <FloatingWhatsApp />
    </main>
  );
}
