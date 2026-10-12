import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { navigationItems } from "@/site-shell/infrastructure/navigation.content";
import { Container } from "@/shared/ui/Container";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.stack}>
        <div className={styles.row}>
          <span>
            © 2026 {panasRpg.name}. Licencia {panasRpg.license}.
          </span>
          <ul>
            {navigationItems.map(({ sectionId, label }) => (
              <li key={sectionId}>
                <a href={`#${sectionId}`}>{label}</a>
              </li>
            ))}
            <li>
              <a href={panasRpg.links.community} target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </li>
          </ul>
        </div>
        <span>
          Desarrollado por {panasRpg.author} x {panasRpg.siteDeveloper}.
        </span>
        <span>{panasRpg.name} es un proyecto de la comunidad y no está afiliado a Mojang ni a Microsoft.</span>
      </Container>
    </footer>
  );
}
