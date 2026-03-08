"use client";

import React from "react";
import Image from "next/image";

export default function Transparencia() {
  return (
    <section
      id="transparencia"
      className="w-full bg-[#fdfbfb] py-24 px-6 border-b-4 border-[#D4AF37]"
      aria-labelledby="transparencia-title"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER ESTILO NOTICIAS */}
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="text-[#800000] text-sm font-bold tracking-[0.4em] uppercase">
            Compromiso con la gente
          </h2>

          <h3
            id="transparencia-title"
            className="text-4xl md:text-5xl font-black text-[#800000] uppercase italic"
          >
            Transparencia Total
          </h3>

          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Un gobierno abierto donde cada boliviano pueda ver, entender y fiscalizar
            cómo se administra el dinero público.
          </p>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN - RESPETADA COMO PEDISTE */}
          <div className="w-full flex justify-center">
            <div className="w-full rounded-sm overflow-hidden border-4 border-[#D4AF37] shadow-xl group">
              <Image
                src="/assets/LuisEduardo4.webp"
                alt="Transparencia"
                width={900}
                height={900}
                className="object-contain w-full h-64 md:h-[420px] transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
            </div>
          </div>

          {/* TEXTO PRINCIPAL */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Nos comprometemos a una gestión pública abierta y responsable.
              Implementaremos mecanismos de rendición de cuentas, acceso a la información
              y procesos participativos para que la ciudadanía conozca y pueda fiscalizar
              cada decisión del Estado.
            </p>

            <p className="text-gray-600">
              Políticas claras, contratos consultables y plataformas de seguimiento
              permitirán que cada inversión sea trazable y entendible para tod@s.
            </p>

            <div className="border-l-4 border-[#D4AF37] pl-5 py-2 bg-white shadow-sm">
              <p className="italic text-[#800000] font-bold">
                “El dinero público es sagrado y pertenece al pueblo.”
              </p>
            </div>
          </div>
        </div>

        {/* BLOQUES TIPO CARDS COMO EN NOTICIAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {/* CARD 1 */}
          <div className="bg-white border border-[#D4AF37] rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl">
            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Plataforma Abierta
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3 group-hover:text-[#B8860B] transition-colors">
              Datos Públicos en Línea
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Portal único donde se publiquen contratos, presupuestos,
              sueldos de autoridades, licitaciones y ejecución de obras en tiempo real.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-[#D4AF37]/20 rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#D4AF37]"></div>

            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Control Ciudadano
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3 group-hover:text-[#B8860B] transition-colors">
              Auditorías Sociales
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Comités vecinales y universidades podrán fiscalizar obras,
              compras y programas con acceso directo a la información oficial.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-[#D4AF37]/20 rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl">
            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Cero Corrupción
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3 group-hover:text-[#B8860B] transition-colors">
              Justicia Real
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Ningún funcionario por encima de la ley.
              Sanciones ejemplares, protección al denunciante
              y fiscalías especializadas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
