import type { SkillClass } from "@/skills/domain/skill-class";

export const skillClasses: SkillClass[] = [
  { name: "Arquero", summary: "Más daño con arcos y ballestas, críticos con flechas y velocidad mientras disparas." },
  { name: "Pícaro y guerrero", summary: "Golpes críticos, emboscadas, evasión y daño en sigilo." },
  { name: "Paladín y sacerdote", summary: "Curación y apoyo al grupo, defensa y protección de área." },
  { name: "Mago", summary: "Poder mágico, menos coste de maná y hechizos de área." },
];

export const skillPerks: string[] = [
  "Experiencia compartida con tu grupo.",
  "Modificadores de hechizos y armas, y nodos pasivos.",
  "El Orb of Oblivion te deja reasignar los puntos.",
];

export const skillTreeAlt =
  "El árbol de habilidades dentro del juego: una red simétrica de nodos conectados que se despliega desde el centro";
