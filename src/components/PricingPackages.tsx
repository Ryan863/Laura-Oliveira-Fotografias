"use client";

import { Check, Sparkles, MessageCircle, Star } from "lucide-react";

interface PackagePlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  waMessage: string;
}

const packages: PackagePlan[] = [
  {
    id: "essencia",
    name: "PACOTE ESSÊNCIA",
    tagline: "Para quem deseja eternizar um momento íntimo com extrema sensibilidade.",
    price: "R$ 350",
    features: [
      "1 hora de sessão (estúdio ou externa)",
      "Direção afetuosa e sem poses engessadas",
      "20 fotos em altíssima resolução com tratamento fino",
      "Galeria online privativa para download",
      "Ideal para: Gestante, Infantil ou Feminino",
    ],
    waMessage: "Olá, Laura! Gostaria de agendar o Pacote Essência (R$ 350).",
  },
  {
    id: "memoria",
    name: "PACOTE MEMÓRIA",
    tagline: "O mais escolhido para casais, famílias e aniversários marcantes.",
    price: "R$ 550",
    isPopular: true,
    features: [
      "Até 2 horas de sessão fotográfica",
      "Mais trocas de figurino e cenários",
      "40 fotos com tratamento editorial minucioso",
      "Todas as fotos em alta definição em galeria privativa",
      "Teaser em carrossel curado para redes sociais",
      "Ideal para: Casamento Civil, Família ou Debutantes",
    ],
    waMessage:
      "Olá, Laura! Gostaria de reservar uma data para o Pacote Memória (R$ 550).",
  },
  {
    id: "exclusivo",
    name: "FOTO & VÍDEO EXCLUSIVO",
    tagline: "A cobertura definitiva com fotografia e vídeo cinematográfico em alta definição.",
    price: "R$ 800",
    features: [
      "Até 3h30 de cobertura fotográfica e videográfica",
      "Fotografias tratadas sem limite de quantidade",
      "Teaser / Reel Cinematográfico em 4K para redes sociais",
      "Tratamento de cor e áudio refinado",
      "Entrega prioritária em até 5 dias úteis",
      "Ideal para: Casamento Civil Completo ou Eventos",
    ],
    waMessage:
      "Olá, Laura! Gostaria de solicitar o Pacote Foto & Vídeo Exclusivo (R$ 800).",
  },
];

export default function PricingPackages() {
  return (
    <section id="valores" className="py-24 sm:py-32 bg-[#080809] border-t border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investimento Transparente</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            PLANOS &amp; <span className="gold-text-gradient">VALORES</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Sessões planejadas com cuidado e entrega sem surpresas. Escolha a experiência que melhor
            se adapta à sua história.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? "bg-[#141418] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/15 lg:-translate-y-3"
                  : "bg-[#101013] border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-black text-black" />
                  <span>Mais Escolhido</span>
                </div>
              )}

              <div>
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wider mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed mb-6">
                  {pkg.tagline}
                </p>

                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-white/[0.08]">
                  <span className="font-cinzel text-4xl sm:text-5xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-stone-400 text-xs">/ sessão</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#D4AF37]" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/554999363370?text=${encodeURIComponent(pkg.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    pkg.isPopular
                      ? "btn-capsule-gold"
                      : "btn-capsule-outline hover:border-[#D4AF37]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Garantir Vaga no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
