import type { ResourcePack } from "@/installation/domain/resource-pack";

export const resourcePacks: ResourcePack[] = [
  { name: "LANOSTRYs JOURNEY", purpose: "Texturas del mundo. Colócalo por encima de Nautilus3D." },
  { name: "Nautilus3D", purpose: "Profundidad y animaciones de jugadores." },
  { name: "panas-fixes", purpose: "Paquete de correcciones incluido en el ZIP de v1.9.4." },
  { name: "HIDYKs REALM EatingAnimation", purpose: "Parche de las animaciones de comer. Dale prioridad sobre HIDYKs REALM.", isPatch: true },
  { name: "Punchy refined", purpose: "Modelos 3D de combate, en su versión refinada." },
  { name: "HIDYKs REALM", purpose: "Paquete base de texturas del pack." },
  { name: "HyperPunchy", purpose: "Golpes y combate con más impacto visual." },
  { name: "FreshAnimations", purpose: "Animaciones de criaturas, si tienes instalado este paquete." },
  { name: "Enchantment Glows", purpose: "Brillo en los objetos encantados. Va al final de la lista." },
];
