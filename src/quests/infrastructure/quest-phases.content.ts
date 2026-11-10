import type { StaticImageData } from "next/image";
import type { QuestPhase } from "@/quests/domain/quest-phase";
import phase1 from "@/quests/presentation/assets/fase-1.jpg";
import phase2 from "@/quests/presentation/assets/fase-2.jpg";
import phase3 from "@/quests/presentation/assets/fase-3.jpg";
import phase4 from "@/quests/presentation/assets/fase-4.jpg";
import phase5 from "@/quests/presentation/assets/fase-5.jpg";
import phase6 from "@/quests/presentation/assets/fase-6.jpg";
import phase7 from "@/quests/presentation/assets/fase-7.jpg";
import phase8 from "@/quests/presentation/assets/fase-8.jpg";
import phase9 from "@/quests/presentation/assets/fase-9.jpg";
import phase10 from "@/quests/presentation/assets/fase-10.jpg";
import phase11 from "@/quests/presentation/assets/fase-11.jpg";
import phase12 from "@/quests/presentation/assets/fase-12.jpg";
import phase13 from "@/quests/presentation/assets/fase-13.jpg";
import phase14 from "@/quests/presentation/assets/fase-14.jpg";

export type QuestPhaseEntry = QuestPhase & {
  /** Quest tree of the phase, cropped from an in-game screenshot. */
  image?: StaticImageData;
};

export const questPhases: QuestPhaseEntry[] = [
  { numeral: "I", name: "El Despertar", image: phase1 },
  { numeral: "II", name: "Bajo la Superficie", image: phase2 },
  { numeral: "III", name: "Los Abismos del Océano", image: phase3 },
  { numeral: "IV", name: "Arenas y Llamas", image: phase4 },
  { numeral: "V", name: "Cazadores de Gigantes", image: phase5 },
  { numeral: "VI", name: "El Cataclismo", image: phase6 },
  { numeral: "VII", name: "La Civilización", image: phase7 },
  { numeral: "VIII", name: "Expansión", image: phase8, summary: "Amplía tu base con granjas y trenes, prueba nuevas recetas y afronta retos de combate y exploración." },
  { numeral: "IX", name: "Crónicas de los Panas", image: phase9, summary: "Prepara mapas y provisiones, planea el regreso y alcanza con tu equipo los hitos de 7, 14 y 30 días del mundo." },
  { numeral: "X", name: "Ingeniería en movimiento", image: phase10, summary: "Tiende vías con Create, prepara estaciones y horarios y haz tu primer viaje largo en tren." },
  { numeral: "XI", name: "La despensa de los Panas", image: phase11, summary: "Cultiva, pesca y cocina para terminar con un banquete para el grupo." },
  { numeral: "XII", name: "Maestría de clase", image: phase12, summary: "Completa objetivos de equipo y habilidad para arquero, paladín, pícaro y hechicero." },
  { numeral: "XIII", name: "Atlas de tierras salvajes", image: phase13, summary: "Recorre biomas de Terralith y Regions Unexplored. El atlas completo es un reto opcional." },
  { numeral: "XIV", name: "Jinetes de Dragón", image: phase14, summary: "Sigue el Códice Dracónico, encuentra huevos, doma dragones y aprende a equiparlos y volar con ellos en Saint’s Dragons." },
];
