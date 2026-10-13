import type { ResourcePack } from "@/installation/domain/resource-pack";

/** Mandatory order, top to bottom as shown in the selected column of the game. Do not reorder. */
export const resourcePacks: ResourcePack[] = [
  { name: "LANOSTRYs JOURNEY", purpose: "Va arriba del todo. Versión corregida, compatible con el parche de comidas." },
  { name: "Nautilus3D", purpose: "Profundidad y animaciones de jugadores." },
  { name: "Punchy refined", purpose: "Modelos 3D de combate, en su versión refinada." },
  { name: "HIDYKs REALM EatingAnimation", purpose: "Parche de la animación de comer para 41 comidas. Va justo encima de HIDYKs REALM.", isPatch: true },
  { name: "HIDYKs REALM", purpose: "Paquete base de texturas del pack." },
  { name: "HyperPunchy", purpose: "Golpes y combate con más impacto visual." },
  { name: "Enchantment Glows", purpose: "Brillo en los objetos encantados. Va al final de la lista." },
];
