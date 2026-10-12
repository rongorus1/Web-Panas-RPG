import { resourcePacks } from "@/installation/infrastructure/resource-packs.content";
import styles from "./ResourcePackOrder.module.css";

export function ResourcePackOrder() {
  return (
    <div className={styles.packs}>
      <div className={styles.copy} data-reveal>
        <h3>Resource packs, en este orden</h3>
        <p>El orden es obligatorio. Si cambia, aparecen conflictos de texturas y errores de renderizado.</p>
        <p>No los reordenes. Si quieres quitar alguno, hazlo desde el lanzador y nunca a mano en el archivo.</p>
      </div>
      <ol className={styles.list} aria-label="Orden de los resource packs" data-reveal="stagger">
        {resourcePacks.map((pack) => (
          <li key={pack.name} className={pack.topOfList ? styles.top : undefined}>
            <div>
              <b>{pack.name}</b>
              <span>{pack.purpose}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
