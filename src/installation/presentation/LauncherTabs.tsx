"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Launcher } from "@/installation/domain/launcher";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import styles from "./LauncherTabs.module.css";

type LauncherTabsProps = {
  launchers: Launcher[];
  downloadUrl: string;
};

export function LauncherTabs({ launchers, downloadUrl }: LauncherTabsProps) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const select = (index: number, focus = false) => {
    setSelected(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = launchers.length - 1;
    const moves: Record<string, number> = {
      ArrowDown: (selected + 1) % launchers.length,
      ArrowRight: (selected + 1) % launchers.length,
      ArrowUp: (selected - 1 + launchers.length) % launchers.length,
      ArrowLeft: (selected - 1 + launchers.length) % launchers.length,
      Home: 0,
      End: last,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], true);
  };

  return (
    <div className={styles.launch} data-reveal>
      <div className={styles.tabs} role="tablist" aria-label="Elige tu lanzador" onKeyDown={onKeyDown}>
        {launchers.map((launcher, i) => (
          <button
            key={launcher.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            className={styles.tab}
            role="tab"
            type="button"
            id={`${baseId}-tab-${launcher.id}`}
            aria-controls={`${baseId}-panel-${launcher.id}`}
            aria-selected={selected === i}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => select(i)}
          >
            {launcher.name}
            {launcher.recommended ? <span className={styles.tag}>Recomendado</span> : null}
          </button>
        ))}
      </div>
      <div>
        {launchers.map((launcher, i) => (
          <div
            key={launcher.id}
            className={styles.panel}
            role="tabpanel"
            id={`${baseId}-panel-${launcher.id}`}
            aria-labelledby={`${baseId}-tab-${launcher.id}`}
            tabIndex={0}
            hidden={selected !== i}
          >
            <h3>{launcher.guideTitle}</h3>
            <ol>
              {launcher.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {launcher.offersDownload ? (
              <div className={styles.download}>
                <ButtonLink href={downloadUrl} external>
                  Descargar
                </ButtonLink>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
