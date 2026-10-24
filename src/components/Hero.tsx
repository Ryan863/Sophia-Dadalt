'use client';

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MessageCircle, ShieldCheck, CheckCircle2, Sparkles, Clock, ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-reveal", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      gsap.from(".hero-image-reveal", {
        scale: 0.96,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center editorial-grid"
    >
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow badge */}
            <div className="hero-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17171A] border border-white/[0.1] shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
              </span>
              <span className="text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-[#E2D9D2]">
                Assessoria Comercial B2B • Atendimento Remoto
              </span>
            </div>

            {/* Headline H1 */}
            <h1 className="hero-reveal font-serif-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-bold text-[#F5F5F7] tracking-tight leading-[1.08]">
              Sua empresa pode ser excelente.{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E2D9D2] to-[#D4AF37]">
                Mas ela precisa vender.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal text-base sm:text-lg lg:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl font-light">
              Organizo contatos, resgato orçamentos e faço a prospecção da sua
              empresa. Você foca na estratégia e na entrega; a{" "}
              <span className="text-[#F5F5F7] font-medium">SD organiza o seu comercial</span>.
            </p>

            {/* CTAs and Micro-badges */}
            <div className="hero-reveal pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl("Olá, Sophia! Vi sua página e gostaria de agendar um diagnóstico comercial gratuito para minha empresa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-primary-cta"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] via-[#E2D9D2] to-[#D4AF37] bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.45)] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 stroke-[2.2]" />
                  <span>Agendar Diagnóstico Gratuito</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wide text-[#F5F5F7] bg-[#17171A]/80 hover:bg-[#17171A] border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <span>Conhecer Serviços</span>
                </a>
              </div>

              {/* Micro-trust line */}
              <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sem burocracia de contratação CLT • Atendimento personalizado sob medida</span>
              </div>
            </div>

            {/* Pillars Grid */}
            <div className="hero-reveal pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-white/[0.04] text-[#D4AF37]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F5F5F7]">100% Confidencial</div>
                  <div className="text-[11px] text-[#A1A1AA]">Sigilo & LGPD estrita</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-white/[0.04] text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F5F5F7]">Foco Total em PMEs</div>
                  <div className="text-[11px] text-[#A1A1AA]">Soluções sem passivo</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-white/[0.04] text-[#D4AF37]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F5F5F7]">Rotina Comercial</div>
                  <div className="text-[11px] text-[#A1A1AA]">Follow-up contínuo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="hero-image-reveal relative w-full max-w-[430px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.12] bg-gradient-to-b from-[#1C1C22] to-[#121215] shadow-2xl group">
              {/* Gold rim light reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/10 to-transparent pointer-events-none z-10" />

              {/* Portrait with Editorial Fade Mask */}
              <div className="relative w-full h-full mask-editorial-fade">
                <Image
                  src="/images/sophia/sophia-hero.png"
                  alt="Sophia Dadalt — Fundadora da SD Apoio Comercial"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-105 brightness-95 transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 430px"
                />
              </div>

              {/* Editorial bottom overlay card */}
              <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-2xl bg-[#0F0F11]/85 backdrop-blur-md border border-white/10 shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif-editorial text-lg font-bold text-[#F5F5F7] tracking-wide">
                    Sophia Dadalt
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    Online para Atendimento
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA]">
                  Assessoria e Estruturação Comercial Remota B2B
                </p>
                <div className="pt-1.5 flex items-center justify-between text-[11px] text-[#E2D9D2] border-t border-white/[0.06]">
                  <span>Santa Catarina • DDD 49</span>
                  <span className="font-medium text-[#D4AF37]">Atendimento Nacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
