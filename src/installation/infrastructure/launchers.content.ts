import type { Launcher } from "@/installation/domain/launcher";

export const launchers: Launcher[] = [
  {
    id: "curseforge",
    name: "CurseForge",
    recommended: true,
    guideTitle: "Con la app de CurseForge",
    offersDownload: true,
    steps: [
      'Busca "Panas RPG" en la app de CurseForge.',
      "Pulsa Instalar: el lanzador descarga y coloca todos los mods.",
      "Las actualizaciones llegan solas cuando sale una versión nueva.",
    ],
  },
  {
    id: "prism",
    name: "PrismLauncher",
    guideTitle: "Con PrismLauncher",
    steps: [
      "Descarga PrismLauncher desde su sitio oficial.",
      "Crea una instancia de Minecraft 1.20.1 con Forge 47.4.10.",
      "Importa el archivo .zip del modpack.",
      "En la configuración de la instancia, asigna de 6 a 8 GB de RAM.",
    ],
  },
  {
    id: "rongonlang",
    name: "RongonLang Launcher v2",
    guideTitle: "Con RongonLang Launcher v2",
    steps: [
      "Es compatible con modpacks de CurseForge y de Modrinth.",
      'Elige "Panas RPG" en la comunidad o pega la URL del modpack.',
      "El lanzador ajusta solo la configuración de rendimiento.",
    ],
  },
];
