"use client";

import IconCheck from "@/app/icons/IconCheck";
import IconInstagram from "@/app/icons/IconInstagram";
import React from "react";

const CompromisoDeCambio = () => {
  return (
    <section
      id="compromisos"
      className="w-full bg-[#800000] py-16 px-6 relative overflow-hidden flex items-center  border-t-4 border-[#D4AF37]"
    >
      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-xs block">
              La Paz merece resultados
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
              Compromisos <span className="text-[#D4AF37]">de Cambio</span>
            </h2>
          </div>

          <div className="hidden md:block w-24 h-[1px] bg-[#D4AF37] mb-4"></div>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-start">

          {/* 01 */}
          <div className="md:col-span-2 p-8 transition-all duration-300 relative overflow-hidden cursor-default border border-[#D4AF37]/20 bg-black/20 hover:border-[#D4AF37]">
            <span className="text-[#D4AF37]/20 text-5xl font-black italic absolute top-4 left-6">
              01
            </span>

            <div className="relative pt-10">
              <span
                className="material-symbols-outlined text-4xl mb-4 inline-block"
                style={{ color: "#D4AF37" }}
              >
                <IconCheck className="size-12" />
              </span>

              <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">
                Juventud con futuro
              </h3>

              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Estudiar, trabajar y prosperar en La Paz.
              </p>

              <p className="text-[#F5DEB3] text-base leading-relaxed mt-4">
                Creamos el ecosistema para que el talento paceño no tenga que emigrar.
                Inversión en hubs tecnológicos y primer empleo.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="md:col-span-2 p-8 transition-all duration-300 relative overflow-hidden cursor-default border border-[#D4AF37]/20 bg-black/20 hover:border-[#D4AF37]">
            <span className="text-[#D4AF37]/20 text-5xl font-black italic absolute top-4 left-6">
              02
            </span>

            <div className="relative pt-10">
              <span
                className="material-symbols-outlined text-4xl mb-4 inline-block"
                style={{ color: "#D4AF37" }}
              >
                <IconCheck className="size-12" />
              </span>

              <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">
                Transparencia real
              </h3>

              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Decisiones a la vista del ciudadano.
              </p>

              <p className="text-[#F5DEB3] text-base leading-relaxed mt-4">
                Cada contrato y cada gasto público disponible en tiempo real.
                Cero tolerancia a la corrupción con auditoría ciudadana abierta.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="md:col-span-2 p-8 transition-all duration-300 relative overflow-hidden cursor-default border border-[#D4AF37]/20 bg-black/20 hover:border-[#D4AF37]">
            <span className="text-[#D4AF37]/20 text-5xl font-black italic absolute top-4 left-6">
              03
            </span>

            <div className="relative pt-10">
              <span
                className="material-symbols-outlined text-4xl mb-4 inline-block"
                style={{ color: "#D4AF37" }}
              >
                <IconCheck className="size-12" />
              </span>

              <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">
                La Paz que produce
              </h3>

              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Gestión ambiental y economía circular.
              </p>

              <p className="text-[#F5DEB3] text-base leading-relaxed mt-4">
                Barrios más verdes y desarrollo sostenible.
                Impulsamos la producción local con responsabilidad ecológica.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="md:col-start-2 md:col-span-2 p-8 transition-all duration-300 relative overflow-hidden cursor-default border border-[#D4AF37]/20 bg-black/20 hover:border-[#D4AF37]">
            <span className="text-[#D4AF37]/20 text-5xl font-black italic absolute top-4 left-6">
              04
            </span>

            <div className="relative pt-10">
              <span
                className="material-symbols-outlined text-4xl mb-4 inline-block"
                style={{ color: "#D4AF37" }}
              >
                <IconCheck className="size-12" />
              </span>

              <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">
                Barrios seguros
              </h3>

              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Patrullaje real y cámaras operativas.
              </p>

              <p className="text-[#F5DEB3] text-base leading-relaxed mt-4">
                Iluminación LED en cada calle y servicios de proximidad.
                Seguridad con tecnología y presencia efectiva.
              </p>
            </div>
          </div>

          {/* 05 */}
          <div className="md:col-span-2 p-8 transition-all duration-300 relative overflow-hidden cursor-default border border-[#D4AF37]/20 bg-black/20 hover:border-[#D4AF37]">
            <span className="text-[#D4AF37]/20 text-5xl font-black italic absolute top-4 left-6">
              05
            </span>

            <div className="relative pt-10">
              <span
                className="material-symbols-outlined text-4xl mb-4 inline-block"
                style={{ color: "#D4AF37" }}
              >
                <IconCheck className="size-12" />
              </span>

              <h3 className="text-2xl font-black text-white uppercase italic mb-2 tracking-tight">
                Alerta temprana
              </h3>

              <p className="text-white/60 text-sm font-medium uppercase tracking-wide">
                Coordinación integral ante emergencias.
              </p>

              <p className="text-[#F5DEB3] text-base leading-relaxed mt-4">
                Planificación estratégica y respuesta inmediata
                para proteger a las familias paceñas.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-[#D4AF37]/40 text-[10px] font-black uppercase tracking-[0.3em]">
            <div className="w-8 h-[1px] bg-[#D4AF37]/20"></div>
            Propuestas reales para La Paz
            <div className="w-8 h-[1px] bg-[#D4AF37]/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompromisoDeCambio;
