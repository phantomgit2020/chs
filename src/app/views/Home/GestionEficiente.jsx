"use client";

import React from "react";
import Image from "next/image";

const GestionEficiente = () => {
  return (
    <section
      id="gestion-eficiente-v2"
      className="w-full bg-[#800000] py-24 px-6 border-t border-[#D4AF37]/20"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER DIFERENTE */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <div>
            <h2 className="text-[#D4AF37] text-sm font-bold tracking-[0.4em] uppercase mb-3">
              Administración con resultados
            </h2>

            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic">
              Gestión Eficiente
            </h3>
          </div>

          <p className="text-white/80 md:text-right max-w-xl">
            La plata del pueblo debe volver al pueblo en obras, servicios  
            y soluciones reales. Menos burocracia, más acción.
          </p>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN CON OTRO ESTILO */}
          <div className="relative order-2 md:order-1">
            <div className="rounded-sm overflow-hidden border border-[#D4AF37] shadow-2xl">
              <Image
                src="/assets/LuisEduardoHero.webp"
                alt="Gestión municipal eficiente"
                width={900}
                height={600}
                className="object-contain w-full h-[400px]"
              />
            </div>

            <div className="absolute -right-4 -bottom-4 bg-[#D4AF37] text-[#800000] p-4 shadow-xl">
              <span className="text-xs uppercase tracking-widest font-bold">
                Alcaldía que sí funciona
              </span>
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6 order-1 md:order-2">

            <div className="bg-black/20 p-6 border-l-4 border-[#D4AF37]">
              <p className="italic text-white font-bold">
                “Cada boliviano del municipio será cuidado como dinero sagrado.”
              </p>
            </div>

            <p className="text-white/90 leading-relaxed">
              Vamos a terminar con la alcaldía lenta, llena de trámites y excusas.  
              Implementaremos una gestión moderna, digital y cercana al vecino,  
              donde los problemas se resuelvan sin vueltas ni favoritismos.
            </p>

          </div>
        </div>

        {/* BLOQUE DE SOLUCIONES */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Solución 1 */}
          <div className="bg-black/20 border border-[#D4AF37]/30 p-6 rounded-sm shadow hover:border-[#D4AF37] transition-all group">
            <h4 className="font-black text-[#D4AF37] uppercase italic mb-2">
              Trámites en un día
            </h4>
            <p className="text-white/80 text-sm">
              Todos los trámites municipales se resolverán en menos de 24 horas,  
              sin excusas ni papeles innecesarios.  
              <span className="block mt-2 italic text-white">
                “Llega, tramita y resuelve en un solo día.”
              </span>
            </p>
          </div>

          {/* Solución 2 */}
          <div className="bg-black/20 border border-[#D4AF37]/30 p-6 rounded-sm shadow hover:border-[#D4AF37] transition-all group">
            <h4 className="font-black text-[#D4AF37] uppercase italic mb-2">
              Alcaldía móvil en tu barrio
            </h4>
            <p className="text-white/80 text-sm">
              Un equipo municipal visitará cada barrio semanalmente,  
              resolviendo problemas reales.  
              <span className="block mt-2 italic text-white">
                “El alcalde llega a tu puerta, no te deja en ventanilla.”
              </span>
            </p>
          </div>

          {/* Solución 3 */}
          <div className="bg-black/20 border border-[#D4AF37]/30 p-6 rounded-sm shadow hover:border-[#D4AF37] transition-all group">
            <h4 className="font-black text-[#D4AF37] uppercase italic mb-2">
              Cero favoritismos
            </h4>
            <p className="text-white/80 text-sm">
              Publicación online de contratos y obras en tiempo real.  
              <span className="block mt-2 italic text-white">
                “Cada peso visible, cada obra con nombre y apellido.”
              </span>
            </p>
          </div>

        </div>

        {/* CIERRE */}
        <div className="mt-14 text-center">
          <p className="text-white/70 italic mb-4">
            Una alcaldía ordenada y cercana al vecino es la base de una ciudad con futuro.
          </p>

          <button className="text-[#D4AF37] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
            Conoce el plan de gestión
          </button>
        </div>

      </div>
    </section>
  );
};

export default GestionEficiente;
