"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Sparkles, Clock, Check } from "lucide-react";

interface SpecialtyItem {
  id: string;
  title: string;
  tagline: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  waMessage: string;
}

const specialties: SpecialtyItem[] = [
  {
    id: "gestante",
    title: "Gestante & Doce Espera",
    tagline: "Celebração acolhedora e intimista da maternidade com luz envolvente e elegância atemporal.",
    price: "A partir de R$ 350",
    duration: "1h a 1h30 de sessão",
    image: "/assets/laura/gestante-editorial.jpg",
    features: [
      "Direção cuidadosa e confortável",
      "Produção em estúdio ou externa",
      "Participação do companheiro(a) e família",
      "Galeria online em alta definição",
    ],
    waMessage:
      "Olá, Laura! Gostaria de saber mais e orçar o ensaio de Gestante.",
  },
  {
    id: "casamento",
    title: "Casamento Civil & A Dois",
    tagline: "Registros poéticos da assinatura do cartório e sessão externa para eternizar o 'sim'.",
    price: "A partir de R$ 400",
    duration: "2h a 3h de cobertura",
    image: "/assets/laura/casamento-civil-close.jpg",
    features: [
      "Cobertura da cerimônia no cartório",
      "Ensaio romântico em locação especial",
      "Fotos com padrinhos e familiares íntimos",
      "Tratamento de cor cinematográfico",
    ],
    waMessage:
      "Olá, Laura! Gostaria de um orçamento para a cobertura do nosso Casamento Civil.",
  },
  {
    id: "infantil",
    title: "Infantil & Conexão Familiar",
    tagline: "O afeto genuíno e a espontaneidade das crianças sem poses forçadas ou desconforto.",
    price: "A partir de R$ 350",
    duration: "1h a 1h30 de sessão",
    image: "/assets/laura/infantil-irmas.jpg",
    features: [
      "Ambiente tranquilo e respeitoso ao ritmo da criança",
      "Fotos individuais e do núcleo familiar",
      "Brincadeiras e interações reais registradas",
      "Entrega ágil para guardar com amor",
    ],
    waMessage:
      "Olá, Laura! Gostaria de agendar um ensaio Infantil e de Família.",
  },
  {
    id: "feminino",
    title: "Retrato Feminino Autoral",
    tagline: "Um momento de reconexão consigo mesma. Exalte sua autenticidade, poder e delicadeza.",
    price: "A partir de R$ 450",
    duration: "1h30 a 2h de sessão",
    image: "/assets/laura/feminino-sereia.jpg",
    features: [
      "Consultoria de figurino e referências",
      "Direção de poses pensada para valorizar você",
      "Ensaios conceituais ou lifestyle",
      "Edição editorial de pele refinada",
    ],
    waMessage:
      "Olá, Laura! Tenho interesse no ensaio Feminino Autoral.",
  },
  {
    id: "aniversarios",
    title: "Aniversários & Debutantes",
    tagline: "A vibração dos 15 anos ou celebrações especiais com cobertura fotográfica vibrante.",
    price: "A partir de R$ 500",
    duration: "2h a 4h de cobertura",
    image: "/assets/laura/debutante-15anos-pink.jpg",
    features: [
      "Sessão pré-evento (ensaio da debutante)",
      "Cobertura completa da festa e convidados",
      "Fotos protocolares e espontâneas na pista",
      "Opção de teaser em vídeo para redes sociais",
    ],
    waMessage:
      "Olá, Laura! Gostaria de consultar valores para a cobertura de Aniversário/15 Anos.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="especialidades" className="py-24 sm:py-32 bg-[#080809] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experiências Exclusivas</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
              CATÁLOGO DE <span className="gold-text-gradient">SESSÕES</span>
            </h2>
          </div>
          <p className="text-stone-400 text-sm sm:text-base max-w-md">
            Cada ensaio é planejado sob medida para que você se sinta à vontade, entregando fotografias
            profundas que contam a sua história.
          </p>
        </div>

        {/* Grid of 6 Cards (5 Specialties + 1 Bespoke Package Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((item) => (
            <div
              key={item.id}
              className="editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-[#F5E6C8]">
                  {item.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 uppercase tracking-widest mb-2 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{item.duration}</span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#F5E6C8] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-stone-400 text-sm leading-relaxed mb-5">
                    {item.tagline}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2 border-t border-white/[0.06] pt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp CTA Button */}
                <a
                  href={`https://wa.me/554999363370?text=${encodeURIComponent(item.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black text-stone-200 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37] group-hover/btn:text-black transition-colors" />
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* 6th Card: Pacote Personalizado Foto & Videografia */}
          <div className="editorial-card rounded-2xl p-7 flex flex-col justify-between border-[#D4AF37]/30 bg-gradient-to-b from-[#18181D] to-[#0F0F12] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F5E6C8] text-[10px] font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>Experiência Sob Medida</span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-3">
                PROJETO PERSONALIZADO
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Precisa de uma cobertura híbrida de <strong>Fotografia e Vídeo cinematográfico</strong>,
                locação externa exclusiva em Santa Catarina ou ensaio em estúdio privativo? Criamos a
                proposta exata para o seu momento.
              </p>

              <div className="space-y-3 border-t border-white/10 pt-5 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Fotografia + Teasers em Vídeo 4K</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Deslocamento para cidades da região</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37]" />
                  <span>Condições especiais de pagamento</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21%20Gostaria%20de%20montar%20um%20pacote%20personalizado%20de%20foto%20e%20v%C3%ADdeo."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-capsule-gold w-full py-3.5 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Conversar com a Laura</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
