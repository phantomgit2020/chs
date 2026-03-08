import IconFacebook from "@/app/icons/IconFacebook";
import IconInstagram from "@/app/icons/IconInstagram";
import IconLocation from "@/app/icons/IconLocation";
import IconMail from "@/app/icons/IconMail";
import IconTikTok from "@/app/icons/IconTikTok";
import IconWhatsapp from "@/app/icons/IconWhatsapp";
import IconX from "@/app/icons/IconX";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full px-4 text-white border-t-4 border-[#D4AF37]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "#120505",
          zIndex: "-1",
        }}
      />

      <div className="max-w-[1200px] mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Columna 1 – Marca */}
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/assets/LOGO-UPC-OFICIAL.webp"
              alt="UPC | Chichi Siles"
              width={200}
              height={200}
              className="w-32 lg:w-[240px] h-auto"
            />
          </div>

          {/* Columna 2 – Contacto */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#D4AF37] font-black uppercase tracking-widest text-xl border-b border-[#D4AF37]/20 pb-3">
              Contacto Directo
            </h4>

            <div className="flex flex-col gap-4 text-sm font-medium text-white/70">
              
              {/* Email */}
              <a
                href="mailto:luiseduardosiles@gmail.com"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
                aria-label="Enviar correo a luiseduardosiles@gmail.com"
              >
                <IconMail className="w-5 h-5 text-[#D4AF37]" />
                <span>luiseduardosiles@gmail.com</span>
              </a>

              {/* WhatsApp – canal de difusión (invitación) */}
              <a
                href="https://whatsapp.com/channel/0029VbBx8UU7j6g2sNEMP82u"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
                aria-label="Unirse al canal de difusión en WhatsApp"
              >
                <IconWhatsapp className="w-5 h-5 text-[#D4AF37]" />
                <span>Únete al canal de WhatsApp</span>
              </a>

              {/* Ubicación (NO clickeable) */}
              <div className="flex items-center gap-3 cursor-default">
                <IconLocation className="w-5 h-5 text-[#D4AF37]" />
                <span>Avenida 6 de Agosto, Pasaje Caracas, N° 005.</span>
              </div>

            </div>
          </div>

          {/* Columna 3 – Redes */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[#D4AF37] font-black uppercase tracking-widest text-xl border-b border-[#D4AF37]/20 pb-3">
              Síguenos
            </h4>

            <div className="flex gap-6 lg:gap-10">
              
              <a
                href="https://www.facebook.com/lesiles?rdid=fYSYNxzQXsR9lX3e#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Ir a Facebook"
              >
                <IconFacebook className="w-10 h-10 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all" />
              </a>

              <a
                href="https://www.tiktok.com/@luischichisiles26?_r=1&_t=ZS-942W8JeoJ9B"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Ir a TikTok"
              >
                <IconTikTok className="w-10 h-10 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all" />
              </a>

              <a
                href="https://www.instagram.com/guaton_siles/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Ir a Instagram"
              >
                <IconInstagram className="w-10 h-10 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all" />
              </a>

              <a
                href="https://x.com/Chichisiles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Ir a X"
              >
                <IconX className="w-10 h-10 text-[#D4AF37]/80 hover:text-[#D4AF37] transition-all" />
              </a>

            </div>
          </div>
        </div>

        {/* 🚫 ESTE BLOQUE NO SE TOCA */}
        <div className="mt-10 text-center text-xs lg:text-sm text-[#D4AF37]/70">
          <p>
            Desarrollado por
            <a
              href="https://portfolio-dilan.vercel.app/"
              target="_blank"
              className="mx-1 font-semibold text-[#D4AF37] hover:opacity-90"
            >
              Dilan Gerber
            </a>
            © 2026. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;