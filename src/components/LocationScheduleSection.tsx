"use client";

import {
  Clock,
  MapPin,
  Navigation,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/Icons";

export default function LocationScheduleSection() {
  const address =
    "R. Santos Dumont, 2147 - Nossa Sra. Aparecida, Herval d'Oeste - SC, 89610-000";
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;

  const scheduleDays = [
    { day: "Domingo", hours: "09:00 às 19:00", active: true },
    { day: "Segunda-feira", hours: "17:00 às 19:00", active: true },
    { day: "Terça-feira", hours: "17:00 às 21:30", active: true },
    { day: "Quarta-feira", hours: "20:30 às 22:00", active: true },
    { day: "Quinta-feira", hours: "Fechado (Produções Externas)", active: false },
    { day: "Sexta-feira", hours: "Fechado (Pós-Produção & Edição)", active: false },
    { day: "Sábado", hours: "08:30 às 20:30", active: true },
  ];

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#09090B] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Atendimento &amp; Local</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            AGENDA &amp; <span className="gold-text-gradient">LOCALIZAÇÃO</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Atendimento exclusivo com hora marcada em Herval d&apos;Oeste e sessões externas em toda a
            região de Joaçaba e Meio-Oeste Catarinense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Horários & Agenda */}
          <div className="lg:col-span-6 editorial-card rounded-3xl p-7 sm:p-9 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  HORÁRIO DE SESSÕES
                </h3>
                <p className="text-xs text-stone-400">Atendimento sob agendamento prévio</p>
              </div>
            </div>

            <div className="space-y-3">
              {scheduleDays.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b border-white/[0.04] text-xs sm:text-sm"
                >
                  <span className="font-medium text-stone-300">{item.day}</span>
                  <span
                    className={`font-semibold ${
                      item.active ? "text-[#F5E6C8]" : "text-stone-500 italic"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <p className="text-xs text-stone-400 leading-relaxed">
                  <strong className="text-stone-200">Quinta e Sexta-feira:</strong> Dias dedicados
                  integralmente ao tratamento minucioso de cor, diagramação de álbuns e ensaios
                  externos em locações especiais.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Localização, Mapa e Contatos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="editorial-card rounded-3xl p-7 sm:p-9 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    HERVAL D&apos;OESTE &bull; JOAÇABA
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {address}
                  </p>
                  <p className="text-xs text-[#D4AF37] pt-1">
                    Atendimento em estúdio ou ensaio externo na locação dos seus sonhos
                  </p>
                </div>
              </div>

              {/* Action: Open GPS Route in Google Maps */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-capsule-gold py-3 px-6 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 flex-1 shadow-md"
                >
                  <Navigation className="w-4 h-4 text-black" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href="https://wa.me/554999363370?text=Ol%C3%A1%2C%20Laura%21%20Gostaria%20de%20conversar%20sobre%20um%20ensaio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-capsule-outline py-3 px-5 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>(49) 9936-3370</span>
                </a>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="editorial-card rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                  <InstagramIcon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-widest font-semibold">Siga no Instagram</p>
                  <p className="text-sm font-bold text-white">@lauraoliveirafotosjba</p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://www.instagram.com/lauraoliveirafotosjba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-capsule-outline text-xs px-5 py-2.5 flex-1 sm:flex-none text-center"
                >
                  Ver Instagram
                </a>
                <a
                  href="https://www.facebook.com/people/Laura-Oliveira-FotografiasJba/61584132696104/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="btn-capsule-outline text-xs px-4 py-2.5 flex-1 sm:flex-none text-center"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
