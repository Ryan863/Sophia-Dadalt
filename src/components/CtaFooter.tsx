'use client';

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function CtaFooter() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".footer-reveal", {
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: container }
  );

  return (
    <footer ref={container} className="bg-[#0A0A0C] border-t border-white/[0.08] relative overflow-hidden">
      {/* Upper Pre-Footer Call to Action */}
      <div className="py-14 sm:py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="footer-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171A] border border-white/[0.1] text-xs text-[#E2D9D2]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Assessoria Comercial Personalizada • Vagas Limitadas por Mês</span>
          </div>

          <h2 className="footer-reveal font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] tracking-tight leading-[1.15]">
            Chega de perder orçamentos por falta de acompanhamento.
          </h2>

          <p className="footer-reveal text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto font-light leading-relaxed">
            Deixe a SD organizar seu comercial enquanto você foca naquilo que
            faz de melhor: liderar o seu negócio e encantar seus clientes.
          </p>

          <div className="footer-reveal pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl("Olá, Sophia! Gostaria de agendar o diagnóstico comercial da minha empresa agora.")}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] via-[#E2D9D2] to-[#D4AF37] hover:bg-right transition-all duration-300 shadow-[0_4px_30px_rgba(212,175,55,0.35)] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 stroke-[2.2]" />
              <span>Solicitar Diagnóstico Comercial</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/apoiocomercial.sd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#F5F5F7] bg-[#17171A] hover:bg-[#1F1F24] border border-white/10 transition-colors"
            >
              <span>Acompanhar no Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Navigation Bar */}
      <div className="border-t border-white/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand with official SD Monogram */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/15 bg-black flex items-center justify-center">
                <Image
                  src="/images/logo/sd-logo.png"
                  alt="SD Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="text-left">
                <span className="font-serif-editorial text-sm font-bold text-[#F5F5F7] block leading-tight">
                  SD Apoio Comercial
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#A1A1AA]">
                  Sophia Dadalt • Assessoria B2B
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#A1A1AA]">
              <a href="#servicos" className="hover:text-[#F5F5F7] transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="hover:text-[#F5F5F7] transition-colors">
                Sobre
              </a>
              <a href="#processo" className="hover:text-[#F5F5F7] transition-colors">
                Processo
              </a>
              <a href="#faq" className="hover:text-[#F5F5F7] transition-colors">
                Dúvidas
              </a>
              <a href="#contato" className="hover:text-[#F5F5F7] transition-colors">
                Contato
              </a>
            </div>

            {/* Copyright & LGPD */}
            <div className="text-xs text-[#A1A1AA] text-center md:text-right space-y-1">
              <p>© 2026 SD Apoio Comercial • Todos os direitos reservados.</p>
              <p className="text-[11px] text-white/30">
                Segurança de Dados em Conformidade com a LGPD
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
