import Image from "next/image";
import { professions, skillClasses, skillPerks } from "@/skills/infrastructure/skills.content";
import { revealOrder } from "@/shared/motion/reveal";
import { Container } from "@/shared/ui/Container";
import styles from "./SkillTree.module.css";

const treeMediaPath = `${process.env.BASE_PATH ?? ""}/skills/arbol-de-habilidades`;

export function SkillTree() {
  return (
    <section className={styles.skills} aria-labelledby="skills-title">
      <Container>
        <div className={styles.top}>
          <div>
            <h2 id="skills-title" data-reveal>Ocho clases, más de 200 nodos</h2>
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
            <picture>
              <source media="(prefers-reduced-motion: reduce)" srcSet={`${treeMediaPath}.jpg`} />
              <Image
                src={`${treeMediaPath}.gif`}
                width={640}
                height={360}
                alt="Demostración del árbol de habilidades y profesiones"
                unoptimized
              />
            </picture>
            <figcaption>Así se ven las ramas del árbol de habilidades en el juego.</figcaption>
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
        <div className={styles.professions} data-reveal>
          <h3>Ocho ramas de habilidades</h3>
          <p>Pulsa <kbd>K</kbd> para abrir el árbol. El árbol tiene cuatro ramas base (Combat, Mining, Class Skills y Weapon Skills) y las cuatro profesiones de abajo. Cada profesión tiene seis nodos y progresa hasta el nivel 30, con experiencia personal y un punto por nivel.</p>
          <ul className={styles.classes}>
            {professions.map((profession) => (
              <li key={profession.name}>
                <h4>{profession.name}</h4>
                <p>{profession.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
