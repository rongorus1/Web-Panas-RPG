import { questPhases } from "@/quests/infrastructure/quest-phases.content";
import { revealOrder } from "@/shared/motion/reveal";
import { Container } from "@/shared/ui/Container";
import { QuestBookViewer } from "./QuestBookViewer";
import styles from "./QuestBook.module.css";

export function QuestBook() {
  return (
    <section className={styles.quests} aria-labelledby="quests-title">
      <Container>
        <h2 id="quests-title" data-reveal>{questPhases.length} fases, de la primera noche al vuelo en dragón</h2>
        <p className={styles.lead} data-reveal style={revealOrder(1)}>
          Las misiones progresivas de FTB Quests te llevan de la supervivencia a las expediciones, la ingeniería y la doma de dragones. Abre el libro de misiones desde la esquina superior izquierda del inventario.
        </p>
        <QuestBookViewer phases={questPhases} />
        <p className={styles.foot} data-reveal>
          <strong>Crónicas de Panas RPG.</strong> Reclama la guía Patchouli en la misión de inicio.
          Consulta dentro del juego los primeros pasos, los controles, los jefes, las clases y las expediciones cooperativas.
        </p>
        <p className={styles.foot} data-reveal>
          <strong>Economía cooperativa.</strong> Algunas misiones premian con monedas.
          Los tablones de Bountiful ofrecen encargos de recolección y caza con sus propias recompensas.
          Con Lightman’s Currency puedes comprar y vender en tiendas de jugadores, usar carteras y terminales,
          y guardar saldo en cuentas personales o de equipo.
        </p>
      </Container>
    </section>
  );
}
