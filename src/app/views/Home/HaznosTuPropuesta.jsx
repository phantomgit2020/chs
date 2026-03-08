import IconWhatsapp from "@/app/icons/IconWhatsapp";
import React from "react";

const HaznosTuPropuesta = () => {
  return (
    <section
      className="w-full border-t-4 border-y-4 border-[#D4AF37]"
      style={{ background: "linear-gradient(135deg, #800000 0%, #4a0000 100%)" }}
      id="haz-tu-propuesta"
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center py-24 px-6 ">
        {/* Texto */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-12" style={{ backgroundColor: "#D4AF37" }}></div>
            <span
              className="font-bold tracking-[0.3em] uppercase text-sm"
              style={{ color: "#D4AF37" }}
            >
              Tu voz importa
            </span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-tight text-white">
            Haz tu Propuesta
          </h3>
          <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
            Queremos escucharte. Chichi Siles y la UPC creen en un gobierno participativo. Envíanos tus ideas para mejorar nuestra comunidad y construyamos juntos el plan de acción que nuestro país necesita.
          </p>
          <div className="flex items-center gap-6 mt-4">
            <div className="rounded-full border-2 flex items-center justify-center" style={{ borderColor: "#D4AF37", width: "4rem", height: "4rem", color: "#D4AF37" }}>
              <IconWhatsapp className=" size-8" />
            </div>
            <div>
              <h4 className="font-black uppercase text-xl italic" style={{ color: "#D4AF37" }}>
                Participación Directa
              </h4>
              <p className="text-white/60 text-sm uppercase font-bold tracking-widest">
                Compromiso Ciudadano
              </p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-black/20 p-8 md:p-12 rounded-sm shadow-2xl backdrop-blur-sm border-2" style={{ borderColor: "#D4AF37" }}>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] font-black uppercase tracking-[0.2em]"
                  style={{ color: "#D4AF37" }}
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  required
                  className="bg-black/30 rounded-sm h-14 px-4 outline-none text-white placeholder-white/10 border-2 focus:ring-0"
                  style={{ borderColor: "#D4AF37" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[11px] font-black uppercase tracking-[0.2em]"
                    style={{ color: "#D4AF37" }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+591 ..."
                    required
                    className="bg-black/30 rounded-sm h-14 px-4 outline-none text-white placeholder-white/10 border-2 focus:ring-0"
                    style={{ borderColor: "#D4AF37" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[11px] font-black uppercase tracking-[0.2em]"
                    style={{ color: "#D4AF37" }}
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    required
                    className="bg-black/30 rounded-sm h-14 px-4 outline-none text-white placeholder-white/10 border-2 focus:ring-0"
                    style={{ borderColor: "#D4AF37" }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[11px] font-black uppercase tracking-[0.2em]"
                  style={{ color: "#D4AF37" }}
                >
                  Tu Propuesta
                </label>
                <textarea
                  placeholder="Escribe aquí tu idea o sugerencia detallada..."
                  required
                  className="bg-black/30 rounded-sm p-4 h-40 outline-none text-white placeholder-white/10 resize-none border-2 focus:ring-0"
                  style={{ borderColor: "#D4AF37" }}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="h-16 rounded-sm shadow-xl font-black uppercase tracking-[0.3em] text-base mt-2"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F1D279 50%, #B8860B 100%)",
                color: "#800000",
              }}
            >
              Enviar Propuesta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HaznosTuPropuesta;
