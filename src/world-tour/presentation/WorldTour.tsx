import { worldTour } from "@/world-tour/infrastructure/world-tour.content";
import { MAIN_CONTENT_ID } from "@/site-shell/infrastructure/navigation.content";
import { Container } from "@/shared/ui/Container";
import worldArt from "./assets/mundo.jpg";
import { TourCamera } from "./TourCamera";
import styles from "./WorldTour.module.css";

const TOUR_SECTION_ID = "wiki";

export function WorldTour() {
  return (
    <section className={styles.tour} id={TOUR_SECTION_ID} aria-labelledby="world-tour-title">
      <Container className={styles.container}>
        <div id={MAIN_CONTENT_ID} className={styles.anchor} />
        <TourCamera
          art={worldArt}
          artAlt={worldTour.artAlt}
          introduction={worldTour.introduction}
          stops={worldTour.stops}
        />
      </Container>
    </section>
  );
}
