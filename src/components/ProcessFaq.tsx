'use client';

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown, HelpCircle, Shield, Wrench, FileCheck2, Compass } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface AccordionItem {
  id: string;
  icon: typeof Shield;
  question: string;
  category: string;
  answer: string;
  highlight: string;
}

const faqs: AccordionItem[] = [
  {
    id: "faq-1",
    icon: FileCheck2,
    category: "Modelo de Contratação",
    question: "Como funciona a contratação sem vínculo CLT?",
    highlight: "100% B2B • Emissão de Nota Fiscal • Zero passivos",
    answer:
      "A SD Apoio Comercial opera sob o modelo de prestação de serviços B2B (pessoa jurídica para pessoa jurídica). Isso significa que sua empresa não arca com encargos como FGTS, 13º salário, férias ou riscos de passivos trabalhistas. O contrato é claro, transparente e focado em produtividade real e entregáveis acordados.",
  },
  {
    id: "faq-2",
    icon: Wrench,
    category: "Tecnologia & Ferramentas",
    question: "Quais ferramentas e CRMs a SD utiliza no dia a dia?",
    highlight: "Pipedrive, Kommo, RD Station, Trello ou Planilhas Executivas",
    answer:
      "Trabalhamos com flexibilidade e bom senso. Se a sua empresa já utiliza um CRM (como Pipedrive, Kommo, RD Station ou HubSpot), estruturamos e operamos nele. Caso você ainda utilize planilhas ou o WhatsApp puro, nós implementamos um sistema acessível ou estruturamos planilhas inteligentes com controle de funil de ponta a ponta.",
  },
  {
    id: "faq-3",
    icon: Shield,
    category: "Segurança da Informação",
    question: "Como é garantida a segurança e o sigilo dos dados dos meus clientes?",
    highlight: "Termo de Confidencialidade (NDA) & Conformidade LGPD",
    answer:
      "A confidencialidade é inegociável. Antes de qualquer acesso a sistemas ou listas de clientes, formalizamos um Termo de Confidencialidade (NDA) com total conformidade à Lei Geral de Proteção de Dados (LGPD). Seus clientes, propostas e histórico financeiro pertencem exclusivamente à sua empresa.",
  },
  {
    id: "faq-4",
    icon: Compass,
    category: "Início Imediato",
    question: "Qual é o primeiro passo para começar a organizar o comercial?",
    highlight: "Diagnóstico inicial sem custo via WhatsApp",
    answer:
      "O primeiro passo é um breve diagnóstico comercial. Entendemos como é a sua rotina atual, quantos orçamentos você envia por semana e onde as oportunidades estão se perdendo. A partir daí, traçamos o plano de ação ideal para iniciar a estruturação com rapidez.",
  },
];

export default function ProcessFaq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".faq-reveal", {
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: container }
  );

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      ref={container}
      className="py-14 sm:py-18 bg-[#0F0F11] border-t border-white/[0.06] relative"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17171A] border border-white/[0.08]">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Curiosidades, Ferramentas & Processo
            </span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
            Tudo o que você precisa saber antes de contratar
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto font-light">
            Transparência absoluta sobre formato de trabalho, segurança de
            dados e implementação da rotina comercial na sua empresa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;
            return (
              <div
                key={faq.id}
                className={`faq-reveal rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#17171A] border-[#D4AF37]/40 shadow-[0_4px_25px_rgba(212,175,55,0.08)]"
                    : "bg-[#17171A]/60 border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div
                      className={`p-2 rounded-xl transition-colors shrink-0 mt-0.5 ${
                        isOpen
                          ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                          : "bg-white/[0.04] text-[#A1A1AA]"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-serif-editorial text-lg sm:text-xl font-bold text-[#F5F5F7] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#D4AF37] text-[#0F0F11] border-[#D4AF37]"
                        : "text-[#A1A1AA] bg-white/[0.03]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 space-y-2.5 border-t border-white/[0.06]">
                    <div className="inline-block text-[11px] font-semibold text-[#E2D9D2] bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                      {faq.highlight}
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Diagnostic CTA banner */}
        <div className="faq-reveal mt-8 sm:mt-10 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#17171A] via-[#1F1F24] to-[#17171A] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="font-serif-editorial text-lg sm:text-xl font-bold text-[#F5F5F7]">
              Ficou com alguma dúvida específica sobre o seu nicho?
            </h4>
            <p className="text-xs text-[#A1A1AA] mt-1 font-light">
              Marcenarias, prestadores de serviços, consultorias e empresas regionais possuem rotinas distintas.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Olá, Sophia! Gostaria de tirar uma dúvida sobre a assessoria comercial para a minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0F0F11] bg-gradient-to-r from-[#D4AF37] to-[#E2D9D2] hover:opacity-95 transition-opacity"
          >
            Tirar Dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
