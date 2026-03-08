"use client";

import React from "react";
import Image from "next/image";

const ObrasBienHechas = () => {
  return (
    <section
      id="obras-bien-hechas"
      className="w-full bg-white py-24 px-6 border-t-4 border-[#D4AF37]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <h2 className="text-[#800000] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Infraestructura con propósito
          </h2>

          <h3 className="text-4xl md:text-5xl font-black text-[#800000] uppercase italic">
            Obras Bien Hechas
          </h3>

          <p className="text-gray-600 max-w-2xl mt-4">
            La Paz necesita obras que protejan la vida, que cuiden los barrios  
            y que devuelvan dignidad a los espacios públicos.  
            No más cemento improvisado: planificación, prevención y resultados.
          </p>
        </div>

        {/* MENSAJE FUERTE */}
        <div className="mb-16 bg-[#800000]/5 border-l-4 border-[#800000] p-6">
          <h4 className="text-[#800000] font-black text-2xl md:text-3xl italic uppercase">
            NO MÁS DESLIZAMIENTOS EN LA PAZ
          </h4>
          <p className="text-gray-700 mt-2">
            Plan integral de estabilización de suelos, drenajes reales,
            muros de contención y control técnico permanente para que
            ninguna familia vuelva a perder su casa por abandono municipal.
          </p>
        </div>

        {/* BLOQUE PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

          <div className="space-y-6">
            <div className="border-l-4 border-[#800000] pl-5 bg-[#800000]/5 py-3">
              <p className="italic text-[#800000] font-bold">
                “Las obras tienen que cuidar a la gente, no ponerla en peligro.”
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Construiremos infraestructura pensada para los barrios:
              puentes seguros, avenidas sin baches, mercados dignos,
              áreas verdes cuidadas y canchas protegidas para nuestros jóvenes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Cada proyecto tendrá mantenimiento obligatorio y control vecinal  
              para que nunca más las obras públicas se conviertan en ruinas.
            </p>
          </div>

          <div className="rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-lg">
            <Image
              src="/assets/LuisEduardo4.webp"
              alt="Infraestructura de La Paz"
              width={900}
              height={600}
              className="object-contain w-full h-[500px]"
            />
          </div>
        </div>

        {/* EJES PRINCIPALES */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Barrios protegidos
            </h4>
            <p className="text-gray-600 text-sm">
              Muros de contención, drenajes pluviales y obras de prevención  
              para frenar definitivamente los deslizamientos.
            </p>
          </div>

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Canchas con Tinglado
            </h4>
            <p className="text-gray-600 text-sm">
              Tinglado y rejas para las canchas de barrio, iluminación real  
              y mantenimiento para que los jóvenes tengan espacios seguros.
            </p>
          </div>

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Más áreas verdes
            </h4>
            <p className="text-gray-600 text-sm">
              Recuperación de parques, arborización masiva y plazas vivas  
              para devolverle oxígeno y belleza a La Paz.
            </p>
          </div>

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Reducir vandalización
            </h4>
            <p className="text-gray-600 text-sm">
              Protección de espacios públicos con participación vecinal,  
              cámaras e iluminación para cuidar lo que es de todos.
            </p>
          </div>

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Avenidas seguras
            </h4>
            <p className="text-gray-600 text-sm">
              Plan de asfalto definitivo y señalización moderna  
              para un transporte más ordenado y humano.
            </p>
          </div>

          <div className="p-7 border border-[#D4AF37]/20 rounded-sm hover:border-[#800000] transition-all">
            <h4 className="font-black text-[#800000] uppercase italic mb-2">
              Wifi que de verdad funcione
            </h4>
            <p className="text-gray-600 text-sm">
              Internet municipal que funcione en plazas y parques,  
              con actividades culturales y deportivas permanentes.
            </p>
          </div>

        </div>

        {/* CIERRE */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 italic mb-4">
            La Paz cuidada, iluminada y segura para nuestras familias.
          </p>

          <button className="text-[#800000] font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
            Conoce el plan de infraestructura
          </button>
        </div>

      </div>
    </section>
  );
};

export default ObrasBienHechas;
