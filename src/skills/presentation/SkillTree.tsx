import { skillClasses, skillPerks, skillTreeAlt } from "@/skills/infrastructure/skills.content";
import { revealOrder } from "@/shared/motion/reveal";
import { Container } from "@/shared/ui/Container";
import treeAnimated from "./assets/habilidades.gif";
import treePoster from "./assets/habilidades-poster.png";
import styles from "./SkillTree.module.css";

export function SkillTree() {
  return (
    <section className={styles.skills} aria-labelledby="skills-title">
      <Container>
        <div className={styles.top}>
          <div>
            <h2 id="skills-title" data-reveal>Cuatro clases, más de 200 nodos</h2>
            <p className={styles.lead} data-reveal style={revealOrder(1)}>
              El árbol de habilidades de RPG Series decide cómo juegas. Y como la experiencia es compartida, el grupo sube junto.
            </p>
            <ul className={styles.perks} data-reveal="stagger">
              {skillPerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.tree} data-reveal>
            {/* <picture> serves a still frame under prefers-reduced-motion; next/image cannot optimize the GIF. */}
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet={treePoster.src} />
              <img src={treeAnimated.src} width={treeAnimated.width} height={treeAnimated.height} loading="lazy" alt={skillTreeAlt} />
            </picture>
            <figcaption>El árbol de habilidades, tal como se ve en el juego.</figcaption>
          </figure>
        </div>
        <ul className={styles.classes} data-reveal="stagger">
          {skillClasses.map((skillClass) => (
            <li key={skillClass.name}>
              <h3>{skillClass.name}</h3>
              <p>{skillClass.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
