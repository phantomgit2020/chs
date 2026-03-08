"use client";

import React, { useCallback } from "react";
import Image from "next/image";

export default function Hero() {
  const scrollToPropuesta = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("propuesta");
    if (!el) return;

    // cálculo de posición objetivo con offset de 100px
    const offset = -80;
    const targetY = el.getBoundingClientRect().top + window.pageYOffset - offset;

    // evita valores negativos
    const safeY = targetY < 0 ? 0 : targetY;

    window.scrollTo({
      top: Math.round(safeY),
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full bg-[linear-gradient(135deg,#800000_0%,#4a0000_100%)] text-white overflow-hidden ">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-10 py-6 relative">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center relative z-10">

          {/* ---------------- TEXTO ---------------- */}
          <div className="flex flex-col gap-8 md:w-[60%]">
            <div className="flex flex-col gap-6">

              {/* Línea + badge */}
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  Compromiso y liderazgo
                </span>
              </div>

              {/* Título */}
              <h1 className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tighter uppercase italic">
                Luis Eduardo <br />
                <span className="text-[#D4AF37]">“Chichi” Siles</span> <br />
                Alcalde
              </h1>

              {/* Texto */}
              <p className="text-white/80 text-base md:text-4xl font-light leading-relaxed max-w-[550px] border-l-2 border-[#D4AF37]/40 pl-6">
                Orden y transparencia.
              </p>
            </div>

            {/* CTA / Partenón */}
            <div className="flex flex-col gap-6">
              <div className="w-fit">
                {/* Botón ahora usa onClick para hacer scroll sin cambiar el URL */}
                <button
                  onClick={scrollToPropuesta}
                  aria-label="Ir a Nuestra propuesta"
                  className="bg-[linear-gradient(135deg,#D4AF37_0%,#F1D279_50%,#B8860B_100%)] text-[#4a0000] px-8 py-4 rounded-sm font-black tracking-widest uppercase hover:scale-105 transition-all cursor-pointer shadow-2xl"
                >
                  Nuestra propuesta
                </button>
              </div>

              {/* <div className="w-full origin-top scale-[0.9] -mt-10">
                <Partenon />
              </div> */}
            </div>
          </div>

          {/* ---------------- IMAGEN ---------------- */}
          <div className="md:w-[40%] w-full flex justify-cente relative">
            <div className="relative w-full max-w-[440px] aspect-[4/5] max-h-[520px] rounded-sm border-4 border-[#D4AF37] overflow-hidden">
              <Image
                src="/assets/LuisEduardoHero.webp"
                alt="Luis Eduardo Siles"
                fill
                priority
                className="object-contain"
              />

              {/* Overlay igual al original */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a0000]/30 to-transparent" />
            </div>
          </div>

        </div>

        {/* TEXTO GIGANTE DE FONDO */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2 opacity-[0.06] select-none pointer-events-none hidden lg:block">
          <span className="text-[18rem] font-black uppercase leading-none">
            UPC
          </span>
        </div>
      </div>
    </section>
  );
}
