"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Baby,
  Sparkles,
  Camera,
  Video,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".manifesto-reveal",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      gsap.fromTo(
        ".manifesto-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".manifesto-grid",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    },
    { scope: containerRef }
  );

  const services = [
    {
      icon: Heart,
      title: "CASAMENTO CIVIL",
      category: "A partir de R$ 400",
      description:
        "Registros espontâneos, olhares sinceros e a celebração íntima do amor no cartório e ensaio externo a dois.",
      link: "#especialidades",
    },
    {
      icon: Baby,
      title: "GESTANTE & MATERNIDADE",
      category: "A partir de R$ 350",
      description:
        "A sensibilidade e o acolhimento inigualável da doce espera da vida, com poses suaves e luz envolvente.",
      link: "#especialidades",
    },
    {
      icon: Camera,
      title: "INFANTIL & FAMÍLIA",
      category: "A partir de R$ 350",
      description:
        "A espontaneidade e pureza dos pequenos e o aconchego do núcleo familiar, eternizados com verdade.",
      link: "#especialidades",
    },
    {
      icon: Video,
      title: "VÍDEO & CELEBRAÇÕES",
      category: "A partir de R$ 500",
      description:
        "Aniversários de 15 anos, batizados e coberturas completas com movimento e emoção em alta definição.",
      link: "#especialidades",
    },
  ];

  return (
    <section
      id="manifesto"
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#09090B] border-t border-white/[0.04] relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Joshua Bell Layout (Headline + Narrative + Vertical Couple Photo) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="manifesto-reveal font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                EU CONTO A <span className="gold-text-gradient">HISTÓRIA</span> DO TEMPO.
              </h2>
              <p className="manifesto-reveal text-[#A8A29E] text-base leading-relaxed">
                A fotografia não é apenas sobre apertar um botão, mas sobre traduzir em luz o que as
                palavras não conseguem expressar. Meu compromisso é acolher cada pessoa com sensibilidade,
                conduzindo sessões leves, sem poses desconfortáveis, para que a sua essência brilhe naturalmente.
              </p>
            </div>

            {/* Vertical Authentic Image (Casamento Civil no Mirante - matches Joshua Bell composition) */}
            <div className="manifesto-reveal relative aspect-[3/4] w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/assets/laura/casamento-civil-full.jpg"
                alt="Ensaio de Casamento Civil por Laura Oliveira"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-xs text-stone-300">
                <div>
                  <p className="font-semibold text-white tracking-wider text-sm">Casamento Civil &amp; Ensaio Externo</p>
                  <p className="text-[#D4AF37] text-[11px] font-medium">Herval d&apos;Oeste &bull; Mirante</p>
                </div>
                <span className="p-2 rounded-full bg-black/60 border border-white/15 text-white">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid of Service Cards + View All Button */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div className="manifesto-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="manifesto-card editorial-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between min-h-[260px] group cursor-pointer"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300 mb-5">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37] mb-1">
                        {service.category}
                      </div>

                      <h3 className="font-cinzel text-lg font-bold text-white tracking-wider mb-2 group-hover:text-[#F5E6C8] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#A8A29E] leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href={service.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-300 group-hover:text-[#D4AF37] transition-colors pt-4 mt-2"
                    >
                      <span>Ver detalhes</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Bottom Full-width View All Services Button */}
            <div className="manifesto-reveal pt-2">
              <a
                href="#especialidades"
                className="w-full py-4 px-6 rounded-xl border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[#D4AF37]/50 text-white font-medium text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 group"
              >
                <span>Ver Catálogo Completo de Sessões</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
