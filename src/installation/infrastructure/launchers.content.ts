import type { Launcher } from "@/installation/domain/launcher";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";

const releaseArchive = `Panas.RPG.${panasRpg.version}.zip`;

export const launchers: Launcher[] = [
  {
    id: "curseforge",
    name: "CurseForge",
    badge: "Recomendado",
    guideTitle: "Con la app de CurseForge",
    download: { label: "Ver la versión en CurseForge", href: panasRpg.links.releaseNotes },
    steps: [
      'Busca "Panas RPG" en la app de CurseForge.',
      `Selecciona la versión ${panasRpg.version} e instálala. La app se encarga de descargar los mods y sus dependencias.`,
      "Si ya tienes el perfil, haz una copia de tu mundo y actualízalo desde la app. Puedes seguir usando tu partida y conservar el progreso de misiones.",
    ],
  },
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
    note: `Comprueba la versión que ofrece el launcher antes de instalar. Para jugar en ${panasRpg.version}, también puedes usar CurseForge o PrismLauncher.`,
  },
  {
    id: "prism",
    name: "PrismLauncher",
    guideTitle: "Con PrismLauncher",
    download: { label: "Ver archivos en GitHub", href: panasRpg.links.releases },
    steps: [
      `Descarga ${releaseArchive} desde GitHub Releases.`,
      "En PrismLauncher, elige Añadir instancia, luego Importar, y selecciona el ZIP completo.",
      `Comprueba que la instancia usa Java ${panasRpg.javaVersion} y asigna ${panasRpg.ramRecommended} de RAM.`,
      "Si actualizas una partida, haz una copia de seguridad antes de migrar tu mundo a la instancia nueva.",
    ],
    note: `Para una instalación manual, el mismo release ofrece Panas.RPG-${panasRpg.version}-Mods.Completo.rar. Extrae su contenido en la carpeta .minecraft de una instancia con Minecraft ${panasRpg.minecraftVersion} y Forge ${panasRpg.forgeVersion}.`,
  },
];
