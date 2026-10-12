import type { Modpack } from "@/modpack/domain/modpack";

export type InstallRequirement = { label: string; value: string };

export function getInstallRequirements(modpack: Modpack): InstallRequirement[] {
  return [
    { label: "Minecraft", value: modpack.minecraftVersion },
    { label: "Forge", value: modpack.forgeVersion },
    { label: "Java", value: modpack.javaVersion },
    { label: "RAM asignada", value: modpack.ramRecommended },
  ];
}
