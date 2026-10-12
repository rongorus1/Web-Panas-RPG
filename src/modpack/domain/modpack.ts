export type Modpack = {
  name: string;
  author: string;
  siteDeveloper: string;
  license: string;
  minecraftVersion: string;
  forgeVersion: string;
  version: string;
  releasedOn: string;
  /** Taken from the in-game menu screenshot; not confirmed against the CurseForge page. */
  loadedMods: number;
  javaVersion: string;
  ramRecommended: string;
  links: {
    download: string;
    community: string;
  };
};

export type ModpackFact = {
  label: string;
  value: string;
};
