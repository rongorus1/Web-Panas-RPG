import type { Release } from "@/changelog/domain/release";


export const releases: Release[] = [
  {
    version: "1.7.2",
    title: "Última versión",
    summary: "Publicada el 12 de octubre de 2026. Las notas completas están en CurseForge y en el Discord.",
    isLatest: true,
  },
  {
    version: "1.7.1",
    title: "Hotfix del árbol de habilidades",
    summary: "Dependencias críticas del Skill Tree resueltas con los paquetes de las 4 clases de RPG Series.",
  },
  {
    version: "1.7",
    title: "Fase VII y mods nuevos",
    summary:
      "43 misiones nuevas en la Fase VII, orden de carga corregido para los atributos de armas y magia, y 7 mods nuevos, entre ellos Legendary Monsters y Grim Kingdoms.",
  },
  {
    version: "1.6 y 1.6.1",
    title: "Menús estáticos",
    summary: "Fuera las dependencias pesadas de vídeo para cargar antes; después, ajustes de configuración y estabilidad.",
  },
  {
    version: "1.5.2",
    title: "Restauración completa",
    summary: "De vuelta a 206 mods, con estructuras, las cuevas de Alex's Caves y animaciones de combate.",
  },
];
