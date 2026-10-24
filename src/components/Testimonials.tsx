'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Star, Quote, Building2, Hammer, Briefcase } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  segment: string;
  icon: typeof Building2;
  quote: string;
  metric: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rodrigo M.",
    role: "Diretor Comercial",
    segment: "Marcenaria de Alto Padrão",
    icon: Hammer,
    quote:
      "Nós enviávamos 30 a 40 projetos por mês e ficávamos sem tempo de retornar com atenção. A Sophia assumiu o follow-up ativo com uma abordagem super elegante. No primeiro mês resgatamos mais de R$ 50 mil em propostas que já dávamos como perdidas.",
    metric: "Resgate de Propostas Antigas",
  },
  {
    id: "test-2",
    name: "Carolina S.",
    role: "Sócia-Fundadora",
    segment: "Consultoria Tributária & B2B",
    icon: Briefcase,
    quote:
      "O maior ganho foi a minha paz de espírito. Minhas planilhas eram confusas e os contatos do WhatsApp viviam desorganizados. A SD centralizou tudo no CRM e estruturou um processo impecável. Não tenho custo de funcionário CLT e tenho entregas pontuais.",
    metric: "Zero Passivo Trabalhista",
  },
  {
    id: "test-3",
    name: "Eduardo T.",
    role: "Engenheiro e Diretor",
    segment: "Empreiteira & Reformas Corporativas",
    icon: Building2,
    quote:
      "Eu passava o dia todo em obra e não conseguia dar atenção rápida a quem pedia orçamento. A Sophia assumiu o atendimento comercial com muita agilidade e profissionalismo. As vendas aumentaram porque ninguém mais fica sem resposta.",
    metric: "Tempo Livre para Gestão",
  },
];

export default function Testimonials() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-card", {
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
      ref={container}
      className="py-14 sm:py-18 bg-[#0F0F11] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37] font-semibold">
            Resultados na Prática
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F7] leading-tight">
            A tranquilidade de quem tem um comercial estruturado
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] font-light">
            Depoimentos de empresários que pararam de perder orçamentos e
            ganharam previsibilidade nas suas rotinas corporativas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="testimonial-card rounded-3xl p-7 bg-[#17171A] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col justify-between space-y-5 relative"
              >
                <div className="space-y-3.5">
                  {/* Stars and Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#D4AF37] stroke-none"
                        />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-white/10" />
                  </div>

                  {/* Quote text */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Info */}
                <div className="pt-3.5 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F5F5F7]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#A1A1AA]">
                        {item.role} • {item.segment}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
