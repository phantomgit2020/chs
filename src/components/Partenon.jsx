"use client";

import React from "react";

export default function Partenon() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleKey = (e, targetId) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToSection(targetId);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center w-full">

        {/* ───── TECHO ───── */}
        <svg
          viewBox="0 0 300 150"
          className="w-full max-w-[340px] sm:max-w-[600px] h-auto"
          preserveAspectRatio="xMidYMax meet"
        >
          <polygon
            points="150,70 0,140 300,140"
            fill="#d9b46a"
            stroke="#BF9B30"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* ───── ENTABLAMENTO ───── */}
        <div className="flex flex-col items-center w-full -mt-5">
          <div className="w-full max-w-[340px] sm:max-w-[620px] h-2 bg-[#d9b46a] border-2 border-[#BF9B30]" />
          <div className="w-full max-w-[320px] sm:max-w-[600px] h-10 bg-[#d9b46a] border-x-2 border-[#BF9B30]" />
          <div className="w-full max-w-[340px] sm:max-w-[620px] h-2 bg-[#d9b46a] border-2 border-[#BF9B30]" />
        </div>

        {/* ───── COLUMNAS (5 PILARES) ───── */}
        <div className="flex justify-center items-end w-full max-w-[340px] sm:max-w-[620px] -mt-0 gap-4 sm:gap-8">

          {[
            "transparencia",
            "seguridad",
            "ciudad-solidaria",
            "gestion-eficiente-v2",
            "obras-bien-hecha",
          ].map((target, i) => (
            <div
  key={i}
  className="relative flex flex-col items-center cursor-pointer group"
  role="button"
  tabIndex={0}
  onClick={() => scrollToSection(target)}
  onKeyDown={(e) => handleKey(e, target)}
>
  {/* Label vertical */}
  <span
  className="
    absolute
    top-1/2
    -translate-y-1/2
    text-[0.60rem] sm:text-xs font-bold text-center tracking-widest
    text-[#BF9B30]
    opacity-100
    md:opacity-0 md:group-hover:opacity-100
    transition-all duration-300
    pointer-events-none
    select-none
  "
  style={{
    writingMode: "vertical-rl",
    textOrientation: "mixed",
  }}
>
  {target === "transparencia" && "TRANSPARENCIA"}
  {target === "seguridad" && "SEGURIDAD"}
  {target === "ciudad-solidaria" && "CIUDAD SOLIDARIA"}
  {target === "gestion-eficiente-v2" && "GESTIÓN EFICIENTE"}
  {target === "obras-bien-hecha" && "OBRAS BIEN HECHAS"}
</span>


  {/* Pilar */}
  <div className=" w-[50px] sm:w-[90px] h-2 bg-[#d9b46a] border border-[#BF9B30]" />
  <div className="w-[44px] sm:w-[72px] h-30 sm:h-40 bg-[#f7e3bf] border-x-2 border-[#9a7b4a]" />
  <div className="w-[50px] sm:w-[90px] h-2 bg-[#d9b46a] border border-[#BF9B30]" />
</div>

          ))}
        </div>

        {/* ───── GRADAS ───── */}
        <div className="flex flex-col items-center w-full ">

          <div
  className="relative w-full max-w-[340px] sm:max-w-[620px] h-[48px] sm:h-[60px] bg-[#d9b46a]
             border-x-4 border-t-4 border-[#BF9B30]
             cursor-pointer group flex items-center justify-center"
  role="button"
  tabIndex={0}
  onClick={() => scrollToSection("plan")}
  onKeyDown={(e) => handleKey(e, "plan")}
>
  <span className="
    absolute text-base font-bold tracking-wide sm:tracking-wider
    text-[#5b0000]
    opacity-100
    md:opacity-0 md:group-hover:opacity-100
    transition-all duration-300
  ">
    PLAN DE GOBIERNO
  </span>
</div>


          <div
  className="relative w-full max-w-[350px] sm:max-w-[660px] h-[60px] sm:h-[78px] bg-[#d9b46a]
             border-4 border-[#BF9B30]
             cursor-pointer group flex items-center justify-center"
  role="button"
  tabIndex={0}
  onClick={() => scrollToSection("haz-tu-propuesta")}
  onKeyDown={(e) => handleKey(e, "haz-tu-propuesta")}
>
  <span className="
    absolute text-base font-bold tracking-wide sm:tracking-wider
    text-[#5b0000]
    opacity-100
    md:opacity-0 md:group-hover:opacity-100
    transition-all duration-300
  ">
    HAZ TU PROPUESTA
  </span>
</div>

        </div>

      </div>
    </div>
  );
}