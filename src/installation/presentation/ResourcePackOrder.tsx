import { resourcePacks } from "@/installation/infrastructure/resource-packs.content";
import styles from "./ResourcePackOrder.module.css";

export function ResourcePackOrder() {
  return (
    <div className={styles.packs}>
      <div className={styles.copy} data-reveal>
        <h3>Resource packs, en este orden</h3>
        <p>En el juego entra en Opciones, Paquetes de recursos, y pasa estos packs a la columna de seleccionados. Colócalos de arriba abajo en el mismo orden de esta lista.</p>
        <p>El orden es obligatorio: si cambia, aparecen conflictos de texturas y errores de renderizado. Si el parche de comidas no queda justo encima de HIDYKs REALM, la animación de comer no se aplica.</p>
      </div>
      <ol className={styles.list} aria-label="Orden de los resource packs" data-reveal="stagger">
        {resourcePacks.map((pack) => (
          <li key={pack.name} className={pack.isPatch ? styles.patch : undefined}>
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
