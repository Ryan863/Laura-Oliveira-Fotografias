"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ArrowDown, Sparkles, MapPin, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waUrl =
    "https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20sess%C3%A3o%20de%20fotos.";

  useGSAP(
    () => {
      // Safe fromTo animation that clears inline props on completion to avoid React 19 remount bugs
      gsap.fromTo(
        ".hero-anim-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        ".hero-photo-wrapper",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-[#080809]"
    >
      {/* Subtle ambient luxury backdrop light */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center min-h-[82vh]">
          {/* Left Column: Portrait of Laura Oliveira with Camera (Joshua Bell reference style) */}
          <div className="relative flex justify-center lg:justify-start w-full order-1">
            <div className="hero-photo-wrapper relative w-full max-w-[460px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#080809] shadow-2xl border border-white/[0.04]">
              {/* Seamless feathering masks & ambient studio vignettes eliminating any white edges */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#080809] via-transparent to-[#080809]/50" />
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#080809]/60 via-transparent to-[#080809]/80" />
              <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,#080809_96%)]" />

              <div className="relative w-full h-full filter contrast-[1.04] brightness-95">
                <Image
                  src="/assets/laura/hero-laura.jpg"
                  alt="Laura Oliveira - Fotógrafa e Videógrafa Profissional com câmera Nikon"
                  fill
                  priority
                  className="object-cover object-top hero-image-mask"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating aesthetic camera badge */}
              <div className="absolute bottom-6 left-6 z-20 backdrop-blur-md bg-black/70 border border-white/15 px-4 py-2 rounded-full hidden sm:flex items-center gap-2.5 text-xs text-stone-300 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="tracking-widest uppercase text-[10px] font-medium text-stone-200">
                  Fotografia &amp; Direção Autoral
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Conversion Triggers */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8 w-full z-20 order-2">
            {/* Eyebrow Kicker */}
            <div className="hero-anim-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm self-start">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[11px] tracking-[0.25em] text-stone-300 uppercase font-semibold">
                Herval d&apos;Oeste &amp; Joaçaba — SC
              </span>
            </div>

            {/* Main Headline (Joshua Bell Style) */}
            <div className="space-y-1.5">
              <h2 className="hero-anim-item font-cinzel text-3xl sm:text-4xl md:text-5xl font-light text-stone-300 tracking-wider">
                OLÁ!
              </h2>
              <h1 className="hero-anim-item font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
                SOU <span className="gold-text-gradient">LAURA OLIVEIRA</span>
              </h1>
            </div>

            {/* Subtitle / Value Proposition */}
            <p className="hero-anim-item text-base sm:text-lg text-[#A8A29E] font-normal leading-relaxed max-w-xl">
              Registrando emoções e criando memórias que duram para sempre. Ensaios acolhedores de{" "}
              <strong className="text-stone-200 font-medium">gestante</strong>,{" "}
              <strong className="text-stone-200 font-medium">casamento civil</strong>,{" "}
              <strong className="text-stone-200 font-medium">infantil &amp; família</strong>,{" "}
              <strong className="text-stone-200 font-medium">feminino autoral</strong> e celebrações de vida.
            </p>

            {/* Action Buttons */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-capsule-gold px-8 py-3.5 text-sm uppercase tracking-wider font-semibold shadow-lg group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 mr-2.5 text-black" />
                <span>Agendar Sessão pelo WhatsApp</span>
              </a>

              <a
                href="#especialidades"
                className="btn-capsule-outline px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-center"
              >
                <span>Ver Especialidades</span>
                <ArrowDown className="w-3.5 h-3.5 ml-2 text-[#D4AF37] inline" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="hero-anim-item pt-4 border-t border-white/[0.08] grid grid-cols-3 gap-3 max-w-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>R$ 350 a R$ 800</span>
                </div>
                <p className="text-[11px] text-stone-400">Investimento acessível</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Direção Leve</span>
                </div>
                <p className="text-[11px] text-stone-400">Sem poses forçadas</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Alta Resolução</span>
                </div>
                <p className="text-[11px] text-stone-400">Galeria digital privada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
