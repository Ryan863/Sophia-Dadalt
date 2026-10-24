'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Clock,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Send,
} from "lucide-react";
import { getWhatsAppUrl, WA_PHONE } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ContactLocation() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      id="contato"
      ref={container}
      className="py-24 sm:py-32 bg-[#0F0F11] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="contact-reveal text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
            Canais de Atendimento & Horários
          </span>
          <h2 className="contact-reveal font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
            Pronto para dar o próximo passo no seu comercial?
          </h2>
          <p className="contact-reveal text-sm sm:text-base text-[#A1A1AA] font-light">
            Atendimento ágil, direto com Sophia Dadalt, sem intermediários.
            Converse hoje mesmo sobre a realidade da sua empresa.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Action & WhatsApp Card */}
          <div className="contact-reveal lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#17171A] border border-white/[0.1] shadow-2xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F0F11] border border-white/[0.08] text-xs text-[#E2D9D2]">
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Canal Prioritário de Contato</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#F5F5F7]">
                  Agende seu Diagnóstico Comercial Gratuito
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Envie uma mensagem no WhatsApp com seu nome e o segmento da
                  sua empresa. Em poucos minutos alinhamos os primeiros passos
                  para organizar sua rotina de vendas.
                </p>
              </div>

              {/* Direct WhatsApp Action Box */}
              <div className="p-5 rounded-2xl bg-[#0F0F11]/70 border border-[#D4AF37]/30 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-xs text-[#A1A1AA] block">WhatsApp Oficial</span>
                      <span className="text-sm font-semibold text-[#F5F5F7] tracking-wider">
                        +55 (49) 92003-8649
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Online
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl("Olá, Sophia! Vi sua página e gostaria de agendar um diagnóstico comercial para minha empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] via-[#E2D9D2] to-[#D4AF37] hover:bg-right transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.25)] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 stroke-[2.2]" />
                  <span>Iniciar Conversa no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro badges at bottom of card */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Termo de Sigilo Comercial (LGPD)</span>
              </div>
              <div className="text-[#E2D9D2]">Resposta ágil no horário comercial</div>
            </div>
          </div>

          {/* Right Column: Schedule, Location & Social */}
          <div className="contact-reveal lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Hours card */}
            <div className="rounded-3xl p-7 bg-[#17171A] border border-white/[0.08] space-y-5">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Clock className="w-5 h-5 stroke-[1.8]" />
                <h4 className="font-serif-editorial text-xl font-bold text-[#F5F5F7]">
                  Horário de Atendimento
                </h4>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#A1A1AA]">Segunda a Sexta</span>
                  <div className="text-right">
                    <span className="text-[#F5F5F7] font-medium block">
                      08:00 às 12:00
                    </span>
                    <span className="text-[#F5F5F7] font-medium block">
                      13:30 às 18:00
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="text-[#A1A1AA]">Sábado e Domingo</span>
                  <span className="text-red-400 font-medium">Fechado</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Atendimento corporativo nos dias úteis</span>
              </div>
            </div>

            {/* Location & Remote Reach */}
            <div className="rounded-3xl p-7 bg-[#17171A] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <MapPin className="w-5 h-5 stroke-[1.8]" />
                <h4 className="font-serif-editorial text-xl font-bold text-[#F5F5F7]">
                  Atendimento Remoto Nacional
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Base operacional em <strong className="text-[#F5F5F7]">Santa Catarina (DDD 49)</strong> com cobertura remota completa para empresas em qualquer estado do Brasil.
              </p>
            </div>

            {/* Instagram Official Card */}
            <a
              href="https://www.instagram.com/apoiocomercial.sd"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl p-6 bg-[#17171A] hover:bg-[#1C1C22] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-white/10 flex items-center justify-center text-[#E2D9D2] group-hover:text-[#D4AF37] transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider block">
                    Perfil Oficial no Instagram
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[#F5F5F7] group-hover:text-[#D4AF37] transition-colors">
                    @apoiocomercial.sd
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#D4AF37] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
