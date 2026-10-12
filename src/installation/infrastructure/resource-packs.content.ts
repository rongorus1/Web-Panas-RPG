import type { ResourcePack } from "@/installation/domain/resource-pack";

/** Mandatory load order. Do not reorder. */
export const resourcePacks: ResourcePack[] = [
  { name: "HIDYKs REALM", purpose: "Paquete base, con el parche de animación de comer para 41 comidas." },
  { name: "LANOSTRYs JOURNEY (fixed v2)", purpose: "Versión corregida, compatible con el parche de comidas." },
  { name: "Nautilus3D", purpose: "Animaciones de jugadores con más profundidad." },
  { name: "FreshAnimations + FA+Player", purpose: "Animaciones fluidas para criaturas y jugadores." },
  { name: "HyperPunchy + Punchy refined", purpose: "Golpes y combate con más impacto visual." },
  { name: "Enchantment Glows", purpose: "Brillo en los objetos encantados." },
  { name: "EatingAnimation (parche)", purpose: "Va en la cima de la lista, para no chocar con otros mods de comida.", topOfList: true },
];
