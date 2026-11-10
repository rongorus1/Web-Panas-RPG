export type Modpack = {
  name: string;
  author: string;
  siteDeveloper: string;
  license: string;
  minecraftVersion: string;
  forgeVersion: string;
  version: string;
  releasedOn: string;
  loadedMods: number;
  javaVersion: string;
  ramRecommended: string;
  links: {
    download: string;
    releaseNotes: string;
    releases: string;
    community: string;
    launcher: string;
  };
};

export type ModpackFact = {
  label: string;
  value: string;
};
