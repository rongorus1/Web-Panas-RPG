import type { Modpack } from "@/modpack/domain/modpack";

export type HeroFact = { label: string; value: string };

export function getHeroFacts(modpack: Modpack): HeroFact[] {
  return [
    { label: "Minecraft", value: modpack.minecraftVersion },
    { label: "Forge", value: modpack.forgeVersion },
    { label: "Versión", value: modpack.version },
    { label: "Mods cargados", value: String(modpack.loadedMods) },
  ];
}
