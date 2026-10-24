'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function PainPoints() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pain-reveal", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-24 bg-[#0F0F11] border-t border-b border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="pain-reveal text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
            O Diagnóstico da Realidade
          </span>
          <h2 className="pain-reveal font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
            Por que empresas excelentes perdem vendas todos os meses?
          </h2>
          <p className="pain-reveal text-sm sm:text-base text-[#A1A1AA] font-light">
            O problema raramente é o seu produto ou a sua entrega. O gargalo
            está na falta de tempo para alimentar uma rotina comercial ativa.
          </p>
        </div>

        {/* Contrast Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card: Sem a SD (A Rotina Caótica) */}
          <div className="pain-reveal rounded-3xl p-8 bg-[#17171A]/70 border border-red-500/20 backdrop-blur-sm relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-red-400">
                Rotina Comercial Tradicional
              </span>
              <span className="text-xs text-red-400/80 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                Vendas Paradas
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Orçamentos enviados sem retorno
                  </strong>
                  Você envia propostas impecáveis, a rotina aperta e ninguém faz o follow-up. O cliente fecha com quem ligou primeiro.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Contatos perdidos em conversas de WhatsApp
                  </strong>
                  Planilhas desatualizadas e leads acumulados sem histórico. Quando quer vender, não sabe por onde começar.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    O empresário sobrecarregado
                  </strong>
                  Você vira o gargalo das vendas. Enquanto cuida da operação ou da obra, as oportunidades esfriam.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Custo e risco trabalhista de CLT
                  </strong>
                  Contratar um funcionário interno gera encargos, treinamento complexo e risco de passivo trabalhista.
                </span>
              </li>
            </ul>
          </div>

          {/* Card: Com a SD Apoio Comercial (A Rotina Organizada) */}
          <div className="pain-reveal rounded-3xl p-8 bg-[#17171A] border border-[#D4AF37]/35 shadow-[0_0_30px_rgba(212,175,55,0.08)] relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                Com a SD Apoio Comercial
              </span>
              <span className="text-xs text-[#D4AF37] px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                Rotina Ativa & Fluida
              </span>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Follow-up ativo e elegante de propostas
                  </strong>
                  Contato consultivo e estratégico no momento exato, acelerando a decisão de fechamento do cliente.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    CRM estruturado e contatos organizados
                  </strong>
                  Base saneada, histórico de conversas e visão clara de em qual etapa cada negociação se encontra.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Foco livre para liderar e entregar
                  </strong>
                  Você cuida do atendimento técnico, da qualidade do serviço e da entrega. A SD cuida do motor comercial.
                </span>
              </li>

              <li className="flex items-start gap-3.5 text-sm text-[#A1A1AA]">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F5F5F7] font-medium block">
                    Sem vínculo CLT: contratação B2B sob medida
                  </strong>
                  Flexibilidade total, sem encargos previdenciários ou passivos. Prestação de serviços com emissão de nota.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá, Sophia! Quero organizar o comercial da minha empresa e parar de perder orçamentos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#E2D9D2] transition-colors"
              >
                <span>Organizar meu comercial agora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
