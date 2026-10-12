import type { WorldTourContent } from "@/world-tour/domain/tour-stop";

export const worldTour: WorldTourContent = {
  artAlt:
    "Arte de Panas RPG en cuatro zonas: Create con un tren de vapor y engranajes, mazmorras con un jefe gigante morado y un cofre, Terralith y Regions Unexplored con montañas e islas flotantes, y Farmer's Delight con una mesa llena de platos junto al fuego. En el centro, una brújula sobre un mapa con el lema Your world, your adventure",
  introduction: {
    id: "mundo",
    title: "Un mundo, cuatro caminos",
    description:
      "Fábricas, mazmorras, tierras nuevas y cocina conviven en la misma partida. Empieza por donde quieras; tus panas pueden tirar por otro lado.",
  },
  stops: [
    {
      id: "fabricas",
      title: "Fábricas y trenes",
      description:
        "Cintas transportadoras, trenes con señales automáticas, procesamiento de minerales y piezas complejas por ensamblaje secuencial.",
      mods: "Create",
    },
    {
      id: "mazmorras",
      title: "Mazmorras y jefes",
      description:
        "Estructuras con botín y jefes de verdad. Derrotarlos desbloquea los 7 niveles de mineral, así que cada combate empuja tu base.",
      mods: "Dungeon Crawl, Legendary Monsters, Grim Kingdoms",
    },
    {
      id: "tierras",
      title: "Tierras por descubrir",
      description:
        "Biomas y estructuras nuevas, islas flotantes, más fauna y un mundo más realista que invita a salir de la base.",
      mods: "Terralith, Regions Unexplored",
    },
    {
      id: "cocina",
      title: "Cocina de verdad",
      description:
        "Cultivos, recetas y platos con beneficios. Con los resource packs del pack, 41 comidas tienen su propia animación al comer.",
      mods: "Farmer's Delight, Alex's Delight",
    },
    {
      id: "aventura",
      title: "Tu mundo, tu aventura",
      description:
        "Todo está pensado para jugar en grupo: Embeddium y varios arreglos del motor mantienen la partida fluida aunque seáis varios.",
    },
  ],
};
