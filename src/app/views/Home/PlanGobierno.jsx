import IconCheck from '@/app/icons/IconCheck'
import IconFacebook from '@/app/icons/IconFacebook'
import React from 'react'

const PlanGobierno = () => {
  return (
    <section className="w-full bg-[#fdfbfb] py-24 px-6" id="plan">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b-2 border-[#800000]/10 pb-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#800000] text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#800000]"></span> Visión de País
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#800000] uppercase italic">Plan de Gobierno</h3>
            <p className="text-gray-600 max-w-2xl text-lg">
              Una hoja de ruta detallada con propuestas concretas de Chichi Siles para la transformación institucional y el desarrollo nacional.
            </p>
          </div>
          {/* <button className="bg-gradient-to-r from-[#D4AF37] via-[#F1D279] to-[#B8860B] text-[#800000] flex items-center gap-3 px-8 py-5 rounded-sm font-black uppercase tracking-widest shadow-lg hover:brightness-110 transition-all shrink-0">
            <span className="material-symbols-outlined font-bold">download</span>
            Descargar Plan Completo PDF
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Reforma Institucional</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Fortalecimiento de la UPC y las instituciones democráticas para garantizar transparencia absoluta en el ejercicio del poder.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Independencia Judicial</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Oficina Anticorrupción</li>
            </ul>
          </div>

          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Economía y Empleo</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Reducción del gasto público innecesario y simplificación tributaria para potenciar el emprendimiento y la inversión.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Simplificación Fiscal</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Plan de Desendeudamiento</li>
            </ul>
          </div>

          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Seguridad Ciudadana</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Modernización de las fuerzas de seguridad con tecnología de punta y capacitación continua para proteger a cada familia.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Policía Comunitaria</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Unidades Ciber-Defensa</li>
            </ul>
          </div>

          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Desarrollo Rural</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Apoyo directo al sector agropecuario mediante infraestructura logística y acceso a créditos blandos para el productor.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Subsidios Tecnológicos</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Centros Logísticos</li>
            </ul>
          </div>

          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Soberanía Energética</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Diversificación de la matriz energética para asegurar costos bajos y autosuficiencia nacional a largo plazo.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Red de Energía Limpia</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Reservas Estratégicas</li>
            </ul>
          </div>

          <div className="bg-white border-t-4 border-[#D4AF37] p-8 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform origin-left">
              <IconCheck className=" size-12" />
            </div>
            <h4 className="text-xl font-black text-[#800000] uppercase mb-4 tracking-tight">Solidaridad Social</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Programas sociales enfocados en la capacitación y el desarrollo de habilidades para una verdadera movilidad social.
            </p>
            <ul className="space-y-2 text-xs font-bold text-[#800000]/70 uppercase">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Garantía Empleo Joven</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span> Apoyo Adulto Mayor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanGobierno
