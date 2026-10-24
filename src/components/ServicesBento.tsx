'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, FileText, Search, Briefcase, ArrowUpRight, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ServiceItem {
  id: string;
  icon: typeof Users;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  ctaText: string;
  waMessage: string;
  badge: string;
}

const services: ServiceItem[] = [
  {
    id: "crm-contatos",
    icon: Users,
    title: "Organização de CRM & Gestão de Contatos",
    tagline: "Fim das planilhas perdidas e conversas soltas",
    description:
      "Centralização de toda a sua base de clientes, histórico de conversas e saneamento de cadastros em plataformas intuitivas e modernas.",
    benefits: [
      "Histórico completo de cada oportunidade",
      "Visão do funil de vendas em tempo real",
      "Segmentação por status de compra e perfil",
    ],
    badge: "Estruturação",
    ctaText: "Solicitar este serviço",
    waMessage:
      "Olá, Sophia! Gostaria de saber mais sobre a Organização de CRM e Gestão de Contatos para minha empresa.",
  },
  {
    id: "followup-ativo",
    icon: FileText,
    title: "Follow-up Ativo de Orçamentos",
    tagline: "Resgate de vendas e dinheiro parado na mesa",
    description:
      "Cobrança elegante, consultiva e estratégica de propostas pendentes para acelerar a tomada de decisão do seu cliente sem parecer insistente.",
    benefits: [
      "Acompanhamento no timing correto de compra",
      "Mapeamento de objeções e dúvidas do cliente",
      "Aumento imediato na taxa de conversão",
    ],
    badge: "Alta Conversão",
    ctaText: "Solicitar este serviço",
    waMessage:
      "Olá, Sophia! Gostaria de contratar o Follow-up Ativo de Orçamentos para resgatar vendas paradas da minha empresa.",
  },
  {
    id: "prospeccao-b2b",
    icon: Search,
    title: "Prospecção Ativa B2B",
    tagline: "Novas oportunidades sem depender só de indicação",
    description:
      "Pesquisa de mercado criteriosa, mapeamento de tomadores de decisão, qualificação de Perfil de Cliente Ideal (ICP) e abertura de reuniões.",
    benefits: [
      "Mapeamento qualificado de empresas alvo",
      "Primeiro contato profissional e personalizado",
      "Pipeline de novas vendas alimentado semanalmente",
    ],
    badge: "Crescimento",
    ctaText: "Solicitar este serviço",
    waMessage:
      "Olá, Sophia! Gostaria de detalhes sobre a Prospecção Ativa B2B para o meu segmento de negócio.",
  },
  {
    id: "apoio-remoto",
    icon: Briefcase,
    title: "Atendimento & Apoio Comercial Remoto",
    tagline: "Um braço direito operacional para suas vendas",
    description:
      "Suporte comercial contínuo no dia a dia, envio de propostas padronizadas, alinhamento de agenda e clareza de relatórios para o empresário.",
    benefits: [
      "Rotina comercial sem falhas ou esquecimentos",
      "Tempo liberado para você gerir sua operação",
      "Zero custos trabalhistas e sem passivos CLT",
    ],
    badge: "Gestão Completa",
    ctaText: "Solicitar este serviço",
    waMessage:
      "Olá, Sophia! Quero entender como funciona o Atendimento e Apoio Comercial Remoto da SD para minha empresa.",
  },
];

export default function ServicesBento() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      id="servicos"
      ref={container}
      className="py-24 sm:py-32 bg-[#0F0F11] relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
              Serviços Especializados
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
              Soluções sob medida para o seu comercial não parar
            </h2>
          </div>
          <p className="text-sm text-[#A1A1AA] max-w-md font-light leading-relaxed">
            Terceirização comercial executiva, desenhada para pequenas e médias
            empresas que necessitam de método, disciplina e rotina ativa de
            vendas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bento-card group rounded-3xl p-8 bg-[#17171A] border border-white/[0.08] hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] relative overflow-hidden"
              >
                {/* Top Subtle Light Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6">
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#A1A1AA] px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-serif-editorial text-2xl font-bold text-[#F5F5F7] group-hover:text-[#E2D9D2] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">
                      {item.tagline}
                    </p>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Benefit points */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                    {item.benefits.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-[#E2D9D2]/90"
                      >
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link to WhatsApp */}
                <div className="pt-8 mt-4 border-t border-white/[0.06]">
                  <a
                    href={getWhatsAppUrl(item.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-3 px-5 rounded-xl bg-white/[0.03] hover:bg-[#D4AF37]/15 border border-white/[0.08] hover:border-[#D4AF37]/40 text-xs font-semibold uppercase tracking-wider text-[#F5F5F7] group-hover:text-[#D4AF37] transition-all duration-200"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
