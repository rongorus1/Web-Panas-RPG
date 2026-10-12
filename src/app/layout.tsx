import type { Metadata, Viewport } from "next";
import { Archivo, Handjet } from "next/font/google";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { MAIN_CONTENT_ID } from "@/site-shell/infrastructure/navigation.content";
import { SiteFooter } from "@/site-shell/presentation/SiteFooter";
import { SiteNavigation } from "@/site-shell/presentation/SiteNavigation";
import { SkipLink } from "@/site-shell/presentation/SkipLink";
import { RevealObserver } from "@/shared/motion/RevealObserver";
import { RevealScript } from "@/shared/motion/RevealScript";
import "@/shared/styles/tokens.css";
import "@/shared/styles/base.css";
import "@/shared/motion/reveal.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-archivo", display: "swap" });
const handjet = Handjet({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-handjet", display: "swap" });

const description =
  "Modpack de Minecraft 1.20.1 para jugar con tus panas: Create, mazmorras con jefes, exploración y cocina, 7 fases de misiones y 4 clases. Optimizado para co-op sin lag.";

export const metadata: Metadata = {
  title: `${panasRpg.name} | Modpack de Minecraft ${panasRpg.minecraftVersion}`,
  description,
  authors: [{ name: panasRpg.author }],
  openGraph: {
    title: `${panasRpg.name} | Modpack de Minecraft`,
    description,
    type: "website",
    locale: "es_ES",
    siteName: panasRpg.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1120",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // RevealScript sets attributes on <html> before hydration.
    <html lang="es" className={`${archivo.variable} ${handjet.variable}`} suppressHydrationWarning>
      <head>
        <RevealScript />
      </head>
      <body>
        <SkipLink targetId={MAIN_CONTENT_ID} />
        <SiteNavigation />
        <main>{children}</main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
