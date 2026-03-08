"use client";

import React from "react";
import Image from "next/image";

const Candidato = () => {
  return (
    <section
      className="w-full bg-[#800000] py-24 px-6 border-y-4 border-[#D4AF37]"
      id="about"
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Imagen del candidato */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-[#D4AF37]"></div>

          <div className="w-full aspect-[4/4] relative rounded-sm shadow-2xl border-2 border-[#D4AF37] overflow-hidden">
            <Image
              src="/assets/LuisEduardo3.webp"
              alt='Luis Eduardo "Chichi" Siles'
              fill
              className="object-contain md:object-contain mt-8"
              priority
            />
          </div>

          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-[#D4AF37]"></div>
        </div>

        {/* Información del candidato */}
        <div className="flex flex-col gap-8">
          <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
            Conozca al Candidato
          </h2>

          <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Luis Eduardo "Chichi" Siles
          </h3>

          <p className="text-white/90 leading-relaxed text-lg font-light">
            Luis Eduardo Siles es cientista político de profesión, con postgrados en ciencias políticas, gestión pública y desarrollo urbano.  
            Fue diputado nacional en tres ocasiones y jefe nacional del MNR, acumulando experiencia directa en la toma de decisiones de alto nivel dentro del Estado.
          </p>

          <p className="text-white/80 leading-relaxed text-lg font-light">
            Su formación académica, sumada a su trayectoria pública y conocimiento del funcionamiento institucional, le permite comprender los problemas estructurales de La Paz y plantear soluciones técnicas y viables.  
            Es el único candidato que cuenta con la formación y la experiencia necesarias para gobernar la ciudad con orden, planificación y resultados.
          </p>

          {/* Info adicional */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-sm bg-black/20 border-l-4 border-[#D4AF37]">
              <h4 className="font-black text-2xl text-[#D4AF37]">Ciencista Politico</h4>
              <p className="text-xs text-white/60 uppercase tracking-widest font-bold">
                Formación Profesional
              </p>
            </div>

            <div className="p-6 rounded-sm bg-black/20 border-l-4 border-[#D4AF37]">
              <h4 className="font-black text-2xl text-[#D4AF37]">3 Veces</h4>
              <p className="text-xs text-white/60 uppercase tracking-widest font-bold">
                Diputado Nacional
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-row items-center justify-center my-3 md:mt-26 mb-6 w-full">
  <div className="mx-4 md:mt-4 text-center md:mx-20">
      <h3 className=" text-center text-5xl text-[#D4AF37]  font-bold mb-8">Como decia mi abuela</h3>
    
    <p className="text-gray-100 text-sm md:text-4xl italic leading-relaxed mb-8">
      ... "va a salir algo bueno, algo realmente, con conciencia,  
      con los pies firmes en la tierra" ...
    </p>

    <p className="text-gray-100 text-lg md:text-4xl font-bold mb-4 underline">
      Lidia Gueiler Tejada 
    </p>

    <p className="text-white/60 text-[10px] md:text-base uppercase tracking-widest">
      Primera Presidenta Mujer Constitucional de Bolivia y Abuela materna de Luis Eduardo Siles
    </p>

  </div>
  </div>
    </section>
  );
};

export default Candidato;
