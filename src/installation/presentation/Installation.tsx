import { getInstallRequirements } from "@/installation/application/get-install-requirements";
import { launchers } from "@/installation/infrastructure/launchers.content";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import { Container } from "@/shared/ui/Container";
import { LauncherTabs } from "./LauncherTabs";
import { ResourcePackOrder } from "./ResourcePackOrder";
import styles from "./Installation.module.css";

export function Installation() {
  const requirements = getInstallRequirements(panasRpg);

  return (
    <section className={styles.install} id="instalacion" aria-labelledby="install-title">
      <Container>
        <h2 id="install-title" data-reveal>Cómo instalarlo</h2>
        <dl className={styles.specs} data-reveal="stagger">
          {requirements.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <LauncherTabs launchers={launchers} downloadUrl={panasRpg.links.download} />
        <ResourcePackOrder />
      </Container>
    </section>
  );
}
