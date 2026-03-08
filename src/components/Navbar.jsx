"use client";

import IconClose from "@/app/icons/IconClose";
import IconMenu from "@/app/icons/IconMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#800000] text-white border-b-2 border-[#D4AF37] sticky top-0 z-50">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Siles.webp"
            alt="Luis Eduardo Siles"
            width={90}
            height={90}
            priority
            className="w-[70px] md:w-[90px] h-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/90">
          <li>
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link href="/present" className="hover:text-[#D4AF37] transition-colors">
              Actualidad
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IconClose className={" size-10"} />
          ) : (
            <IconMenu className={" size-10"} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#800000] border-t border-[#D4AF37] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-sm font-bold uppercase tracking-widest text-white/90">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Sobre Mí
            </Link>
          </li>
          <li>
            <Link
              href="/present"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#D4AF37] transition-colors"
            >
              Actualidad
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
