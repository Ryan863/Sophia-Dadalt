'use client';

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const waUrl = getWhatsAppUrl("Olá, Sophia! Vi sua página e gostaria de agendar um diagnóstico comercial para minha empresa.");

  return (
    <aside
      aria-label="Atendimento Comercial WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-trigger"
        className="group relative flex items-center justify-center h-14 w-14 sm:w-auto sm:px-6 sm:h-14 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22bf5b] hover:to-[#0f776a] text-white rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing attention ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#0F0F11]" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2.5 stroke-[2.2] shrink-0" />
        <span className="hidden sm:inline font-semibold text-xs uppercase tracking-wider">
          Diagnóstico no WhatsApp
        </span>
      </a>
    </aside>
  );
}
