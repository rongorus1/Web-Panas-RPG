import { releases } from "@/changelog/infrastructure/releases.content";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { Container } from "@/shared/ui/Container";
import styles from "./Changelog.module.css";

export function Changelog() {
  return (
    <section className={styles.log} id="changelog" aria-labelledby="changelog-title">
      <Container>
        <h2 id="changelog-title" data-reveal>Qué ha cambiado</h2>
        <ol className={styles.versions}>
          {releases.map((release) => (
            <li key={release.version} className={release.isLatest ? styles.now : undefined} data-reveal>
              <span className={styles.v}>{release.version}</span>
              <div>
                <h3>{release.title}</h3>
                <p>
                  {release.isLatest ? (
                    <>
                      Publicada el {panasRpg.releasedOn}. Las notas completas están en CurseForge y en el{" "}
                      <a href={panasRpg.links.community} target="_blank" rel="noopener noreferrer">
                        Discord
                      </a>
                      .
                    </>
                  ) : (
                    release.summary
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
