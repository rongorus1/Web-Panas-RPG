export type TourStop = {
  id: string;
  title: string;
  description: string;
  mods?: string;
};

export type WorldTourContent = {
  introduction: TourStop;
  stops: TourStop[];
  artAlt: string;
};
