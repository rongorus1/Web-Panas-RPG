import type { Launcher } from "@/installation/domain/launcher";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";

export const launchers: Launcher[] = [
  {
    id: "panas-launcher",
    name: "Panas RPG Launcher",
    badge: "Offline",
    guideTitle: "Con el launcher de Panas RPG",
    download: { label: "Descargar el launcher", href: panasRpg.links.launcher },
    steps: [
      "Descarga el instalador de tu sistema: .exe o .msi en Windows, .AppImage, .deb o .rpm en Linux, .dmg en macOS.",
      "Instálalo y ábrelo. Se actualiza solo cuando sale una versión nueva.",
      "Escribe el nombre de usuario con el que quieres jugar, sin necesidad de cuenta de Microsoft.",
      "Pulsa Instalar: descarga Java, Minecraft, Forge y todos los mods del pack.",
      "Cuando termine, pulsa Jugar.",
    ],
    note: "En Windows puede aparecer el aviso de SmartScreen porque el launcher aún no está firmado: elige Más información y después Ejecutar de todos modos.",
  },
  {
    id: "curseforge",
    name: "CurseForge",
    badge: "Recomendado",
    guideTitle: "Con la app de CurseForge",
    download: { label: "Descargar", href: panasRpg.links.download },
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
];
