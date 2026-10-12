export type Release = {
  /** A version or a range, e.g. "1.7.2" or "1.6 y 1.6.1". */
  version: string;
  title: string;
  summary: string;
  isLatest?: boolean;
};
