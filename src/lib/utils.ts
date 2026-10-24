import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WA_PHONE = "5549920038649";
export const WA_DEFAULT_MSG = "Olá, Sophia! Vi sua página e gostaria de agendar um diagnóstico comercial para minha empresa.";

export function getWhatsAppUrl(customMessage?: string) {
  const msg = customMessage || WA_DEFAULT_MSG;
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
}
