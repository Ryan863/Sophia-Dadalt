'use client';

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Target, HeartHandshake, Award, ArrowRight, User } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function AboutSophia() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
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
    <section
      id="sobre"
      ref={container}
      className="py-14 sm:py-18 bg-[#0F0F11] border-t border-white/[0.06] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Official SD Executive Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="about-reveal relative w-full max-w-[390px] rounded-3xl overflow-hidden border border-white/[0.12] bg-gradient-to-b from-[#18181D] via-[#111114] to-[#0A0A0C] p-7 shadow-2xl space-y-6">
              {/* Espaço reservado para Foto Pessoal */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-2xl border-2 border-dashed border-white/15 bg-white/[0.02] flex flex-col items-center justify-center p-6 text-center space-y-3 group hover:border-[#D4AF37]/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-colors">
                  <User className="w-6 h-6 stroke-[1.6]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#F5F5F7] font-medium block">
                    Foto pessoal a ser inserida
                  </span>
                  <span className="text-[11px] text-[#A1A1AA] block font-light">
                    (Espaço reservado para ensaio profissional)
                  </span>
                </div>
              </div>

              {/* Quote card */}
              <div className="p-4 rounded-2xl bg-[#0F0F11]/90 backdrop-blur-md border border-white/10 space-y-2">
                <p className="font-serif-editorial italic text-sm text-[#F5F5F7] leading-snug">
                  &ldquo;A venda não acontece no envio do orçamento. Ela acontece no acompanhamento consistente e profissional.&rdquo;
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
                  <span className="text-[11px] font-sans text-[#D4AF37] uppercase tracking-wider font-semibold">
                    Sophia Dadalt
                  </span>
                  <span className="text-[10px] text-[#A1A1AA]">
                    Fundadora & Assessora B2B
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Pillars */}
          <div className="lg:col-span-7 space-y-5">
            <div className="about-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17171A] border border-white/[0.08]">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                Sobre a Assessoria & Visão
              </span>
            </div>

            <h2 className="about-reveal font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
              Especialista em destravar a rotina comercial de pequenas e médias empresas
            </h2>

            <p className="about-reveal text-sm text-[#A1A1AA] leading-relaxed font-light">
              À frente da <strong className="text-[#F5F5F7] font-medium">SD Apoio Comercial</strong>, Sophia Dadalt atua como o braço direito estratégico e operacional de empresários que não têm tempo a perder. Com foco em organização, follow-up consultivo e implementação de processos comerciais sem ruídos, a assessoria transforma bases de contatos inativas em oportunidades concretas de faturamento.
            </p>

            <p className="about-reveal text-sm text-[#A1A1AA] leading-relaxed font-light">
              Atuando remotamente para todo o território nacional a partir de Santa Catarina, a SD proporciona a estrutura comercial que a sua empresa precisa, sem a lentidão, burocracia ou os encargos de contratação CLT tradicional.
            </p>

            {/* Differential Badges */}
            <div className="about-reveal grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-[#17171A] border border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7]">
                    Follow-up com Método
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Abordagens elegantes que valorizam o cliente e aceleram o fechamento de propostas em aberto.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#17171A] border border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7]">
                    Atendimento Humanizado
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Comunicação profissional, empática e alinhada ao tom de voz do seu negócio.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#17171A] border border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7]">
                    Contrato B2B & LGPD
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Sem passivos trabalhistas, com emissão de NF e total sigilo dos seus dados comerciais.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#17171A] border border-white/[0.06] space-y-1">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F7]">
                    Foco Exclusivo em PMEs
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Processos simplificados e práticos que funcionam na realidade da pequena e média empresa.
                </p>
              </div>
            </div>

            <div className="about-reveal pt-2">
              <a
                href={getWhatsAppUrl("Olá, Sophia! Gostaria de conversar sobre a rotina da minha empresa e entender como você pode nos apoiar.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] to-[#E2D9D2] hover:opacity-95 transition-opacity shadow-[0_4px_20px_rgba(212,175,55,0.2)]"
              >
                <span>Falar Diretamente com Sophia Dadalt</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
