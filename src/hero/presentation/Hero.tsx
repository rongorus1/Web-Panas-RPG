import Image from "next/image";
import type { CSSProperties } from "react";
import { getHeroFacts } from "@/hero/application/get-hero-facts";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { HERO_TITLE_ID } from "@/site-shell/infrastructure/navigation.content";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import heroArt from "./assets/hero-mundo.jpg";
import styles from "./Hero.module.css";

const order = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  const facts = getHeroFacts(panasRpg);

  return (
    <section className={styles.hero} id="inicio" aria-labelledby={HERO_TITLE_ID}>
      <div className={styles.stage}>
        <Image
          src={heroArt}
          alt="Arte de Panas RPG al atardecer: el logo con una espada y un pico cruzados sobre un escudo de engranajes, un castillo con ruedas dentadas a la izquierda y, a la derecha, cuatro jugadores de espaldas que caminan hacia un puente colgante"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.copy}>
        <h1 id={HERO_TITLE_ID} style={order(0)}>
          Falta uno en el grupo
        </h1>
        <p className={styles.sub} style={order(1)}>
          Modpack de Minecraft {panasRpg.minecraftVersion} con Create, mazmorras, exploración y cocina, pensado para jugar con tus panas sin lag.
        </p>
        <div className={styles.cta} style={order(2)}>
          <ButtonLink href={panasRpg.links.download} external>
            Descargar
          </ButtonLink>
          <ButtonLink href={panasRpg.links.community} variant="glass" external>
            Únete al Discord
          </ButtonLink>
        </div>
      </div>
      <dl className={styles.facts} style={order(3)} aria-label="Datos del pack">
        {facts.map(({ label, value }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
