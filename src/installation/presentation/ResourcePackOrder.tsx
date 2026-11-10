import { resourcePacks } from "@/installation/infrastructure/resource-packs.content";
import styles from "./ResourcePackOrder.module.css";

export function ResourcePackOrder() {
  return (
    <div className={styles.packs}>
      <div className={styles.copy} data-reveal>
        <h3>Resource packs, en este orden</h3>
        <p>En Opciones → Paquetes de recursos, ordena los paquetes que tengas instalados de arriba abajo según esta lista. Mantén el parche de comidas por encima de HIDYKs REALM para que se apliquen las animaciones.</p>
        <p><strong>Gráficos Rápidos.</strong> Si tienes <code>panas-hojas.zip</code>, actívalo por encima de LANOSTRYs JOURNEY y Nautilus3D. Se recomienda para rendimiento porque usa geometría simple y evita las placas que sobresalen de las hojas. Es opcional y se instala aparte del ZIP de v1.9.4.</p>
        <p><strong>Gráficos Detallados.</strong> Puedes desactivar <code>panas-hojas</code>. Con las hojas en Detalladas, Nautilus3D muestra las hojas correctamente, sin el fallo visual de Rápidos.</p>
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
