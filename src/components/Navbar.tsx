'use client';

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F0F11]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#17171A] flex items-center justify-center text-[#D4AF37] font-serif-editorial font-bold text-xl tracking-tight transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              SD
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-lg tracking-wide text-[#F5F5F7] font-semibold leading-tight">
                SD Apoio Comercial
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#A1A1AA] font-sans">
                Sophia Dadalt • B2B
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Sobre a SD
            </a>
            <a
              href="#processo"
              className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Como Funciona
            </a>
            <a
              href="#faq"
              className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Dúvidas (FAQ)
            </a>
            <a
              href="#contato"
              className="text-xs uppercase tracking-[0.18em] text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              Contato
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl("Olá, Sophia! Gostaria de agendar um diagnóstico comercial para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] via-[#E2D9D2] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_2px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>Diagnóstico Comercial</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#F5F5F7] hover:bg-white/5 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F11]/98 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#A1A1AA] hover:text-[#F5F5F7] py-2 border-b border-white/[0.05]"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#A1A1AA] hover:text-[#F5F5F7] py-2 border-b border-white/[0.05]"
            >
              Sobre a SD
            </a>
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#A1A1AA] hover:text-[#F5F5F7] py-2 border-b border-white/[0.05]"
            >
              Como Funciona
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#A1A1AA] hover:text-[#F5F5F7] py-2 border-b border-white/[0.05]"
            >
              Dúvidas (FAQ)
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#A1A1AA] hover:text-[#F5F5F7] py-2"
            >
              Contato
            </a>
          </nav>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl("Olá, Sophia! Gostaria de agendar um diagnóstico comercial para minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] to-[#E2D9D2] shadow-lg"
            >
              <MessageCircle className="w-4 h-4 stroke-[2.2]" />
              <span>Diagnóstico Comercial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
