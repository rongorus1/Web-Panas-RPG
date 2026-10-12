import { questPhases } from "@/quests/infrastructure/quest-phases.content";
import { revealOrder } from "@/shared/motion/reveal";
import { Container } from "@/shared/ui/Container";
import { QuestBookViewer } from "./QuestBookViewer";
import styles from "./QuestBook.module.css";

export function QuestBook() {
  return (
    <section className={styles.quests} aria-labelledby="quests-title">
      <Container>
        <h2 id="quests-title" data-reveal>Siete fases, de la primera noche a la civilización</h2>
        <p className={styles.lead} data-reveal style={revealOrder(1)}>
          Misiones de FTB Quests cortas, progresivas y hechas para este pack. Te dicen qué hacer sin quitarte la libertad de hacerlo a tu manera.
        </p>
        <QuestBookViewer phases={questPhases} />
        <p className={styles.foot} data-reveal>
          Los jefes desbloquean 7 niveles de mineral: avanzar en las fases y mejorar el equipo van de la mano.
        </p>
      </Container>
    </section>
  );
}
