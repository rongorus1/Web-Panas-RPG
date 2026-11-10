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

export const professions = [
  { name: "Ingeniería", summary: "Gana experiencia al fabricar o fundir componentes de Create y al picar menas sin Toque de Seda." },
  { name: "Cocina", summary: "Sube al preparar y comer platos que cuentan para el oficio." },
  { name: "Caza", summary: "Progresa al derrotar criaturas. Los enemigos más fuertes suelen dar más experiencia." },
  { name: "Exploración", summary: "Gana experiencia al pescar, recolectar materiales y fabricar equipo de viaje, como mapas y brújulas." },
];
