import type { NavigationItem } from "@/site-shell/domain/navigation-item";

export const HERO_TITLE_ID = "hero-title";
export const MAIN_CONTENT_ID = "contenido";

export const navigationItems: NavigationItem[] = [
  { sectionId: "inicio", label: "Inicio" },
  { sectionId: "wiki", label: "Wiki" },
  { sectionId: "instalacion", label: "Instalación" },
  { sectionId: "changelog", label: "Changelog" },
];
