import type { StaticImageData } from "next/image";
import type { QuestPhase } from "@/quests/domain/quest-phase";
import phase1 from "@/quests/presentation/assets/fase-1.jpg";
import phase2 from "@/quests/presentation/assets/fase-2.jpg";
import phase3 from "@/quests/presentation/assets/fase-3.jpg";
import phase4 from "@/quests/presentation/assets/fase-4.jpg";
import phase5 from "@/quests/presentation/assets/fase-5.jpg";
import phase6 from "@/quests/presentation/assets/fase-6.jpg";
import phase7 from "@/quests/presentation/assets/fase-7.jpg";

export type QuestPhaseEntry = QuestPhase & {
  /** Quest tree of the phase, cropped from an in-game screenshot. */
  image: StaticImageData;
};

export const questPhases: QuestPhaseEntry[] = [
  { numeral: "I", name: "El Despertar", image: phase1 },
  { numeral: "II", name: "Bajo la Superficie", image: phase2 },
  { numeral: "III", name: "Los Abismos del Océano", image: phase3 },
  { numeral: "IV", name: "Arenas y Llamas", image: phase4 },
  { numeral: "V", name: "Cazadores de Gigantes", image: phase5 },
  { numeral: "VI", name: "El Cataclismo", image: phase6 },
  { numeral: "VII", name: "La Civilización", image: phase7, addedInVersion: "1.7", newQuests: 43 },
];
