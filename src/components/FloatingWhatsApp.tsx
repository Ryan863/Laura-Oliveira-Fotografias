"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20uma%20sess%C3%A3o%20de%20fotos.";

  return (
    <aside
      aria-label="Atendimento WhatsApp Laura Oliveira"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-in fade-in duration-500"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-6 sm:h-13 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/30"
      >
        {/* Pulsing Attention Beacon */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#080809]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 fill-white/10 stroke-[2.2]" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-white">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
