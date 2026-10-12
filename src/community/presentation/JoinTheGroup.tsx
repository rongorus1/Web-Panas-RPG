import Image from "next/image";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { revealOrder } from "@/shared/motion/reveal";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";
import friendsOnBridge from "./assets/panas-puente.jpg";
import styles from "./JoinTheGroup.module.css";

export function JoinTheGroup() {
  return (
    <section className={styles.end} aria-labelledby="join-title">
      <Container className={styles.grid}>
        <figure className={styles.art} data-reveal>
          <Image
            src={friendsOnBridge}
            alt="Cuatro jugadores de espaldas, con mochilas y un pico, caminan por un sendero hacia un puente colgante sobre un lago al atardecer"
            sizes="(max-width: 960px) 100vw, 700px"
          />
        </figure>
        <div>
          <h2 id="join-title" data-reveal style={revealOrder(1)}>Tus panas ya van por el puente</h2>
          <p className={styles.lead} data-reveal style={revealOrder(2)}>Instálalo desde CurseForge y pásate por el Discord para armar grupo.</p>
          <div className={styles.cta} data-reveal style={revealOrder(3)}>
            <ButtonLink href={panasRpg.links.download} external>
              Descargar
            </ButtonLink>
            <ButtonLink href={panasRpg.links.community} variant="outline" external>
              Únete al Discord
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
