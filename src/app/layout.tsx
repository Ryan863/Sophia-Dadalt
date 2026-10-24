import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apoiocomercialsd.com.br"),
  title: "SD Apoio Comercial | Sophia Dadalt — Assessoria Comercial B2B & Gestão Remota",
  description:
    "Você cuida da entrega do seu negócio. A SD organiza o seu comercial. Organização de CRM, follow-up ativo de propostas e prospecção B2B sob medida para pequenas e médias empresas.",
  keywords: [
    "SD Apoio Comercial",
    "Sophia Dadalt",
    "Assessoria Comercial B2B",
    "Terceirização Comercial",
    "Gestão Comercial Remota",
    "Organização de CRM",
    "Follow-up de Orçamentos",
    "Prospecção Ativa B2B",
    "Comercial para PMEs",
    "Santa Catarina Apoio Comercial",
  ],
  authors: [{ name: "Sophia Dadalt" }],
  creator: "SD Apoio Comercial",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://apoiocomercialsd.com.br",
    title: "SD Apoio Comercial | Sophia Dadalt — Assessoria Comercial Remota B2B",
    description:
      "Você cuida da entrega do seu negócio. A SD organiza o seu comercial. Prospecção, CRM e follow-up estratégico sem vínculo trabalhista CLT.",
    siteName: "SD Apoio Comercial",
    images: [
      {
        url: "/images/sophia/sophia-hero.png",
        width: 800,
        height: 800,
        alt: "Sophia Dadalt — Especialista em Gestão e Assessoria Comercial B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SD Apoio Comercial | Sophia Dadalt",
    description:
      "Assessoria e organização comercial remota para PMEs. Resgate de propostas e estruturação de CRM.",
    images: ["/images/sophia/sophia-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SD Apoio Comercial",
    alternateName: "Sophia Dadalt Apoio Comercial",
    description:
      "Assessoria e organização comercial remota B2B para pequenas e médias empresas. Organização de CRM, follow-up ativo de orçamentos e prospecção qualificada.",
    image: "https://apoiocomercialsd.com.br/images/sophia/sophia-hero.png",
    telephone: "+55-49-92003-8649",
    url: "https://apoiocomercialsd.com.br",
    address: {
      "@type": "PostalAddress",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    founder: {
      "@type": "Person",
      name: "Sophia Dadalt",
      jobTitle: "Assessora Comercial B2B",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.instagram.com/apoiocomercial.sd"],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0F0F11] text-[#F5F5F7] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0F0F11]">
        {children}
      </body>
    </html>
  );
}
