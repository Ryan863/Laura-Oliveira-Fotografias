"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#manifesto" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Valores", href: "#valores" },
    { label: "Atendimento & Local", href: "#localizacao" },
  ];

  const waUrl =
    "https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20sess%C3%A3o%20de%20fotos.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080809]/90 backdrop-blur-md py-3.5 border-b border-white/[0.07] shadow-2xl"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="group flex flex-col tracking-widest">
          <span className="font-serif-editorial text-xl sm:text-2xl font-light text-white tracking-[0.22em] group-hover:text-[#E5C378] transition-colors duration-300">
            LAURA OLIVEIRA
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#A8A29E] uppercase font-light -mt-1 group-hover:text-white transition-colors duration-300">
            Fotografia &amp; Vídeo
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium text-[#A8A29E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Social */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/lauraoliveirafotosjba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Laura Oliveira"
            className="p-2 text-[#A8A29E] hover:text-[#E5C378] transition-colors duration-200"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-capsule-outline text-xs px-5 py-2.5 flex items-center gap-2 group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-widest uppercase text-[11px] font-semibold text-white group-hover:text-[#F5E6C8]">
              Agendar Ensaio
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#D4AF37] border border-[#D4AF37]/30 rounded-full bg-white/5"
            aria-label="Agendar via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FAFAF9] hover:text-[#D4AF37] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0c0e] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-stone-300 hover:text-[#D4AF37] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lauraoliveirafotosjba/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-[#D4AF37]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Laura-Oliveira-FotografiasJba/61584132696104/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-[#D4AF37]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-capsule-gold text-xs px-5 py-2.5 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
