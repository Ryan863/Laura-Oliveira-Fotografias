"use client";

import { ArrowUp, Heart, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050506] border-t border-white/[0.06] text-stone-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col tracking-widest">
              <span className="font-serif-editorial text-2xl font-light text-white tracking-[0.22em]">
                LAURA OLIVEIRA
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
                Fotografia &amp; Videografia
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Registrando emoções e criando memórias que duram para sempre. Ensaios afetuosos,
              edição artística e atendimento de alto padrão em Herval d&apos;Oeste, Joaçaba e região.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Navegação
            </p>
            <ul className="space-y-2 text-xs tracking-wider uppercase">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#D4AF37] transition-colors">
                  História &amp; Manifesto
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#D4AF37] transition-colors">
                  Catálogo de Sessões
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">
                  Galeria de Obras
                </a>
              </li>
              <li>
                <a href="#valores" className="hover:text-[#D4AF37] transition-colors">
                  Planos &amp; Valores
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#D4AF37] transition-colors">
                  Horários &amp; Endereço
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Back to Top */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Conexões
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lauraoliveirafotosjba/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Laura-Oliveira-FotografiasJba/61584132696104/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Laura Oliveira Fotografias. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
            <span>para eternizar histórias</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
