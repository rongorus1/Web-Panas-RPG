import Image from "next/image";
import { biomeShots } from "@/biomes/infrastructure/biome-shots.content";
import { revealOrder } from "@/shared/motion/reveal";
import { Container } from "@/shared/ui/Container";
import styles from "./BiomeGallery.module.css";

export function BiomeGallery() {
  return (
    <section className={styles.gallery} aria-labelledby="biomes-title">
      <Container>
        <h2 id="biomes-title" data-reveal>Así se ve el mundo</h2>
        <p className={styles.lead} data-reveal style={revealOrder(1)}>Capturas tomadas dentro del juego.</p>
        <ul className={styles.grid}>
          {biomeShots.map((shot) => (
            <li key={shot.id} className={styles.shot} data-span={shot.span} data-reveal>
              <Image src={shot.image} alt={shot.alt} sizes={shot.span === 8 ? "(max-width: 960px) 100vw, 820px" : "(max-width: 960px) 100vw, 400px"} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
