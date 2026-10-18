"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, X, Camera } from "lucide-react";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: "casamento" | "gestante" | "infantil" | "feminino" | "aniversario";
  categoryLabel: string;
  tag: string;
  aspect: string;
}

const galleryData: GalleryPhoto[] = [
  {
    id: 1,
    src: "/assets/laura/gestante-editorial.jpg",
    title: "A Doce Espera da Vida",
    category: "gestante",
    categoryLabel: "Gestante",
    tag: "Estúdio & Luz Natural",
    aspect: "aspect-[4/5]",
  },
  {
    id: 2,
    src: "/assets/laura/casamento-civil-full.jpg",
    title: "O Início do 'Para Sempre'",
    category: "casamento",
    categoryLabel: "Casamento Civil",
    tag: "Mirante & Ensaio Externo",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    src: "/assets/laura/debutante-15anos-fogos.jpg",
    title: "Noite Mágica de 15 Anos",
    category: "aniversario",
    categoryLabel: "15 Anos",
    tag: "Celebração com Fogos",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    src: "/assets/laura/infantil-irmas.jpg",
    title: "Pureza & Conexão de Irmãs",
    category: "infantil",
    categoryLabel: "Infantil & Família",
    tag: "Ensaio Afetivo",
    aspect: "aspect-[4/4]",
  },
  {
    id: 5,
    src: "/assets/laura/casamento-civil-close.jpg",
    title: "Cumplicidade e Afeto",
    category: "casamento",
    categoryLabel: "Casamento Civil",
    tag: "Retrato a Dois",
    aspect: "aspect-[4/5]",
  },
  {
    id: 6,
    src: "/assets/laura/feminino-sereia.jpg",
    title: "Sereia • Retrato Artístico Autoral",
    category: "feminino",
    categoryLabel: "Feminino",
    tag: "Conceito & Produção",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    src: "/assets/laura/debutante-15anos-pink.jpg",
    title: "Elegância Clássica Debutante",
    category: "aniversario",
    categoryLabel: "15 Anos",
    tag: "Vestido Rosa & Coroa",
    aspect: "aspect-[3/4]",
  },
  {
    id: 8,
    src: "/assets/laura/familia-batizado.jpg",
    title: "Celebração do Santo Batismo",
    category: "infantil",
    categoryLabel: "Infantil & Família",
    tag: "Família na Igreja",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    src: "/assets/laura/infantil-3anos-vela.jpg",
    title: "3 Aninhos com Alegria e Borboleta",
    category: "aniversario",
    categoryLabel: "Aniversário",
    tag: "Bolo & Espontaneidade",
    aspect: "aspect-[4/4]",
  },
  {
    id: 10,
    src: "/assets/laura/infantil-1ano-familia.jpg",
    title: "1º Aninho da Princesa em Família",
    category: "infantil",
    categoryLabel: "Infantil & Família",
    tag: "Núcleo Familiar Completo",
    aspect: "aspect-[16/10]",
  },
  {
    id: 11,
    src: "/assets/laura/aniversario-futebol-amigos.jpg",
    title: "Festa do Francisco com os Amigos",
    category: "aniversario",
    categoryLabel: "Aniversário",
    tag: "Turma do Futebol",
    aspect: "aspect-[4/4]",
  },
  {
    id: 12,
    src: "/assets/laura/aniversario-futebol-familia.jpg",
    title: "Comemoração Especial dos 9 Anos",
    category: "aniversario",
    categoryLabel: "Aniversário",
    tag: "Amor em Família",
    aspect: "aspect-[4/5]",
  },
];

export default function EditorialGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("todos");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: "todos", label: "Todas as Obras" },
    { id: "casamento", label: "Casamento Civil" },
    { id: "gestante", label: "Gestante" },
    { id: "infantil", label: "Infantil & Família" },
    { id: "feminino", label: "Feminino" },
    { id: "aniversario", label: "Celebrações & 15 Anos" },
  ];

  const filteredPhotos =
    activeFilter === "todos"
      ? galleryData
      : galleryData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#09090B] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Portfólio Editorial</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-4">
            MEMÓRIAS <span className="gold-text-gradient">ETERNIZADAS</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Uma seleção de olhares reais, abraços sinceros e celebrações capturadas sob a ótica
            artística de Laura Oliveira.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20"
                  : "bg-white/[0.03] text-stone-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-black/60 cursor-pointer shadow-lg hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              <div className={`relative w-full ${photo.aspect} overflow-hidden`}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Subtle vignette & dark fade on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
                    {photo.categoryLabel} &bull; {photo.tag}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#F5E6C8] transition-colors">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 text-stone-300 hover:text-white transition-colors"
                aria-label="Fechar visualização"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="relative w-full aspect-[4/5] sm:aspect-[3/2] max-h-[75vh] rounded-xl overflow-hidden border border-white/20">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {selectedPhoto.categoryLabel}
                </span>
                <h4 className="font-cinzel text-xl text-white font-bold mt-1">
                  {selectedPhoto.title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
