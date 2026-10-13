export type ResourcePack = {
  name: string;
  purpose: string;
  /** Compatibility patch that must sit right above the pack it fixes. */
  isPatch?: boolean;
};
