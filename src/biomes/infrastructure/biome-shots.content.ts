import type { StaticImageData } from "next/image";
import type { BiomeShot } from "@/biomes/domain/biome-shot";
import castle from "@/biomes/presentation/assets/castillo-sendero.jpg";
import iceSpikes from "@/biomes/presentation/assets/picos-de-hielo.jpg";
import savanna from "@/biomes/presentation/assets/sabana-torre.jpg";
import jungle from "@/biomes/presentation/assets/selva.jpg";
import cherry from "@/biomes/presentation/assets/cerezos.jpg";

export const biomeShots: (BiomeShot & { image: StaticImageData })[] = [
  {
    id: "castillo",
    image: castle,
    span: 8,
    alt: "Un sendero de adoquines sube entre terrazas de hierba hacia un castillo de torres altas, con árboles de copa cuadrada a los lados y el sol sobre las montañas",
  },
  {
    id: "hielo",
    image: iceSpikes,
    span: 4,
    alt: "Captura dentro del juego: enormes cristales de hielo azul rodean una pequeña fuente de piedra sobre un suelo nevado",
  },
  {
    id: "sabana",
    image: savanna,
    span: 4,
    alt: "Captura dentro del juego: una sabana dorada con una torre de piedra y madera roja en lo alto de una colina y un animal pastando",
  },
  {
    id: "selva",
    image: jungle,
    span: 4,
    alt: "Captura dentro del juego: un camino de tierra se adentra en una selva espesa, con lianas y un cartel de piedra al fondo",
  },
  {
    id: "cerezos",
    image: cherry,
    span: 4,
    alt: "Captura dentro del juego: un valle de cerezos rosados y árboles azules con una cabaña de madera entre flores",
  },
];
