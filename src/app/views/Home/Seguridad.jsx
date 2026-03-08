"use client";

import React from "react";
import Image from "next/image";

export default function Seguridad() {
  return (
    <section
      id="seguridad"
      className="w-full border-b-4 border-[#D4AF37]"
      style={{ background: "linear-gradient(135deg, #800000 0%, #4a0000 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto py-24 px-6">

        {/* HEADER */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">
              Compromiso con La Paz
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-white">
            Seguridad que se vea y se sienta en La Paz
          </h2>

          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Las calles paceñas no pueden seguir siendo territorio del miedo.  
            Vamos a recuperar plazas, mercados, parques y avenidas con presencia real,  
            tecnología y una alcaldía que cuide a su gente.
          </p>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div className="flex flex-col gap-8">

            <div className="bg-black/20 p-6 rounded-sm border-l-4 border-[#D4AF37]">
              <p className="text-white/90 text-lg italic">
                “En La Paz habrá ojos cuidando al vecino: cámaras en los puntos más críticos,  
                en lugares de esparcimiento y en cada zona de alta concurrencia.”
              </p>
            </div>

            <p className="text-white/80">
              Realizaremos un estudio técnico independiente para determinar  
              cuántas cámaras necesita realmente la ciudad y dónde deben estar.  
              No será un número al azar: será un sistema pensado para observar,  
              prevenir y facilitar el trabajo de la justicia.
            </p>

            <p className="text-white/80">
              Parques como el Urbano Central, plazas barriales, terminales,  
              mercados, entradas folklóricas y ejes comerciales contarán con  
              videovigilancia moderna, conectada a un centro de monitoreo  
              que responda en minutos, no en discursos.
            </p>

            {/* ESTADÍSTICAS */}
            <div className="grid grid-cols-2 gap-6">

              <div className="p-6 rounded-sm bg-black/20 border border-[#D4AF37]/30">
                <h4 className="font-black text-3xl text-[#D4AF37]">La Paz</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest font-bold">
                  100% Zonas críticas
                </p>
              </div>

              <div className="p-6 rounded-sm bg-black/20 border border-[#D4AF37]/30">
                <h4 className="font-black text-3xl text-[#D4AF37]">24/7</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest font-bold">
                  Monitoreo real
                </p>
              </div>

            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#D4AF37]"></div>

            <div className="rounded-sm overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl">
              <Image
                src="/assets/LuisEduardo2.webp"
                alt="Plan de Seguridad La Paz"
                width={900}
                height={900}
                className="object-cover w-full h-[560px]"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#D4AF37]"></div>
          </div>
        </div>

        {/* PILARES */}
        <div className="grid md:grid-cols-4 gap-6 mt-20">

          {[
            {
              t: "Cámaras donde importa",
              d: "Instalación prioritaria en puntos críticos, plazas, zonas escolares, mercados y espacios de esparcimiento de La Paz.",
            },
            {
              t: "Apoyo a la justicia",
              d: "Imágenes certificadas para flagrancia, identificación y persecución real del delito.",
            },
            {
              t: "Respuesta inmediata",
              d: "Centro de monitoreo municipal conectado con policía, bomberos y ambulancias.",
            },
            {
              t: "Barrios protegidos",
              d: "Vecinos organizados con botones de pánico y alertas directas al sistema.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-black/30 p-6 rounded-sm border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all group"
            >
              <h4 className="font-black text-[#D4AF37] uppercase italic mb-2">
                {p.t}
              </h4>
              <p className="text-white/70 text-sm">{p.d}</p>
            </div>
          ))}

        </div>

        {/* LLAMADO A ACCIÓN */}
        <div className="mt-16 bg-black/30 border-2 border-[#D4AF37] p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[#D4AF37] font-black uppercase italic text-xl">
              La Paz vigilada para cuidar, no para perseguir
            </h4>
            <p className="text-white/70 text-sm">
              La tecnología al servicio del vecino honesto y de la justicia.
            </p>
          </div>

          <button
            className="h-14 px-8 rounded-sm font-black uppercase tracking-[0.3em]"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37 0%, #F1D279 50%, #B8860B 100%)",
              color: "#800000",
            }}
          >
            Proteger mi zona
          </button>
        </div>

      </div>
    </section>
  );
}
