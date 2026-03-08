import Partenon from '@/components/Partenon'
import React from 'react'

const Propuesta = () => {
  return (
    <div className="w-full py-6 sm:py-16 flex flex-col justify-center bg-[linear-gradient(590deg,#4a0000_0%,#800000_100%)] border-b-4 border-[#D4AF37] pb-10 sm:pb-20 " 
      id='propuesta'
    >
      <div className=" text-center text-white">
        <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs">
                  En Campaña con Chichi Siles
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tighter uppercase italic">
                Nuestra Propuesta
              </h2>
      </div>
      <div
        className="
            mt-5 sm:-mt-20
            origin-top
            scale-100
            sm:scale-[0.85]
            md:scale-100
            transition-transform"
        >
          <Partenon />
              <div className="absolute
    top-1/12 sm:top-1/4
    left-1/2
    -translate-y-1/2
    translate-x-[10px]
    sm:translate-x-[140px]
    md:translate-x-[150px]
    lg:md:translate-x-[200px]
    text-white/90
    font-bold
    tracking-wide
    text-[0.6rem] sm:text-sm
    text-center
    w-34
    sm:w-52
    md:w-52">
    
    {/* Bordes decorativos */}
    <div className="absolute -top-4 -left-4 w-10 h-10 border-t-4 border-l-4 border-[#D4AF37]" />
    <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b-4 border-r-4 border-[#D4AF37]" />

    {/* Texto */}
    Presione los pilares y gradas <br /> para ir a la propuesta
  </div>

      </div>
    </div>
  )
}

export default Propuesta
