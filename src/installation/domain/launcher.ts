export type Launcher = {
  id: string;
  name: string;
  /** Short label shown next to the name in the tab. */
  badge?: string;
  guideTitle: string;
  steps: string[];
  /** Note shown under the steps. */
  note?: string;
  download?: { label: string; href: string };
};
