"use client";

import React from "react";
import Image from "next/image";

export default function CiudadSolidaria() {
  return (
    <section
      id="ciudad-solidaria"
      className="w-full bg-[#fdfbfb] py-24 px-6 border-b-4 border-[#D4AF37]"
      aria-labelledby="ciudad-solidaria-title"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER ESTILO UPC */}
        <div className="flex flex-col gap-4 mb-14">
          <h2 className="text-[#800000] text-sm font-bold tracking-[0.4em] uppercase">
            Compromiso con los más humildes
          </h2>

          <h3
            id="ciudad-solidaria-title"
            className="text-4xl md:text-5xl font-black text-[#800000] uppercase italic"
          >
            La Paz sin mendicidad
          </h3>

          <p className="text-gray-600 max-w-2xl leading-relaxed">
            En nuestra gestión ninguna persona será invisible.  
            La alcaldía estará del lado de quien sufre, del niño sin abrigo,  
            de la madre sola y del adulto mayor abandonado.
          </p>
        </div>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN */}
          <div className="w-full rounded-sm overflow-hidden border-2 border-[#D4AF37]/30 shadow-xl group">
            <Image
              src="/assets/LuisEduardo3.webp"
              alt="Atención a personas en situación de calle"
              width={900}
              height={600}
              className="object-contain mt-8 w-full h-64 md:h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* TEXTO CENTRAL */}
          <div className="space-y-6">

            {/* PENSAMIENTO DEL CANDIDATO */}
            <div className="border-l-4 border-[#D4AF37] pl-5 py-3 bg-white shadow-sm">
              <p className="italic text-[#800000] font-bold">
                “Quiero recuperar la dignidad humana de nuestra gente.  
                Nadie nació para vivir en la calle. Mi vida ha sido servir  
                y sé que con voluntad se puede devolver esperanza.”
              </p>
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Con la experiencia del programa social <strong>“La Paz sin Hambre”</strong>,  
              que durante años llevó comida caliente a nuestros hermanos  
              en situación de calle, sabemos que la solidaridad real  
              cambia vidas.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Nuestra gestión les dara el apoyo justo y necesario a esas personas que lamentablemente han caído en condición de calle. Nuestra labor es darles ese apoyo, esa fuerza para que continúen adelante. <br />
               No pueden haber paceños abandonados por nuestra sociedad, seremos garantes de esta obligación que tendremos con la justicia social.
            </p>

            <p className="text-gray-600">
              Nos comprometemos con atender a todas las personas que hoy están  
              abandonadas: adultos mayores, familias vulnerables  
              y niños que no tienen recursos.  
              El municipio dará garantía de oportunidad  
              a todos los paceños por igual.
            </p>
          </div>
        </div>

        {/* ACCIONES CONCRETAS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white border border-[#D4AF37]/20 rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl">
            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Rescate humano
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3">
              Nadie dormirá en la calle
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Brigadas municipales recorrerán La Paz para brindar  
              refugio, abrigo y alimentación inmediata.
            </p>
          </div>

          <div className="bg-white border border-[#D4AF37]/20 rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-[#D4AF37]"></div>

            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Prioridad niños y familias
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3">
              Protección total
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Ningún niño volverá a pedir monedas en un semáforo  
              mientras exista una alcaldía con corazón.
            </p>
          </div>

          <div className="bg-white border border-[#D4AF37]/20 rounded-sm p-8 group hover:border-[#D4AF37] transition-all shadow-xl">
            <span className="text-[10px] font-black text-[#B8860B] uppercase tracking-widest mb-3 block">
              Oportunidades para todos
            </span>

            <h4 className="font-black text-[#800000] text-lg uppercase italic mb-3">
              Trabajo y dignidad
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              Programas de empleo municipal y capacitación  
              para empezar una nueva vida con respeto.
            </p>
          </div>

        </div>

        {/* CIERRE */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 italic mb-4">
            Una verdadera alcaldía no abandona a su pueblo.
          </p>

          <button className="text-[#800000] font-black uppercase tracking-widest text-sm inline-flex items-center gap-2 hover:translate-x-2 transition-transform">
            Plan La Paz sin mendicidad
          </button>
        </div>

      </div>
    </section>
  );
}
