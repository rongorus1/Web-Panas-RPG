import type { Release } from "@/changelog/domain/release";

import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";

export const releases: Release[] = [
  {
    version: panasRpg.version,
    title: "Árbol de habilidades restaurado",
    summary: "Vuelve a abrir el árbol con K. Se corrigió la experiencia de las cuatro profesiones, se depuraron las etiquetas de cocina y se actualizó la guía Patchouli.",
    isLatest: true,
  },
  {
    version: "1.9.3",
    title: "Correcciones de descanso y estabilidad",
    summary: "Somnia permite dormir al anochecer. Se corrigió el cierre al consultar mochilas en la guía desactivando la deduplicación de ingredientes de AllTheLeaks.",
  },
  {
    version: "1.9.2",
    title: "Profesiones y Jinetes de Dragón",
    summary: "Cuatro profesiones, diez misiones de dragones en la fase XIV y nuevos contenidos de cocina.",
  },
  {
    version: "1.9.1",
    title: "Guía de supervivencia ilustrada",
    summary: "Nuevas ilustraciones de objetos y criaturas, más jefes y una revisión de los controles y consejos del libro.",
  },
];
