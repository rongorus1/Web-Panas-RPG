import styles from "./SkipLink.module.css";

export function SkipLink({ targetId }: { targetId: string }) {
  return (
    <a className={styles.skip} href={`#${targetId}`}>
      Saltar al contenido
    </a>
  );
}
