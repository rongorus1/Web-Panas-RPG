"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import logo from "@/modpack/presentation/assets/logo-64.jpg";
import type { QuestPhaseEntry } from "@/quests/infrastructure/quest-phases.content";
import styles from "./QuestBook.module.css";

export function QuestBookViewer({ phases }: { phases: QuestPhaseEntry[] }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = phases[selected];

  const select = (index: number, focus = false) => {
    setSelected(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLOListElement>) => {
    const last = phases.length - 1;
    const moves: Record<string, number> = {
      ArrowDown: (selected + 1) % phases.length,
      ArrowRight: (selected + 1) % phases.length,
      ArrowUp: (selected - 1 + phases.length) % phases.length,
      ArrowLeft: (selected - 1 + phases.length) % phases.length,
      Home: 0,
      End: last,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key], true);
  };

  return (
    <div className={styles.book} data-reveal>
      <div className={styles.panel}>
        <p className={styles.head}>
          <Image src={logo} width={26} height={26} alt="" />
          Modpack
        </p>
        <ol
          className={styles.phases}
          data-reveal="stagger"
          role="tablist"
          aria-label="Fases de misiones"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {phases.map((phase, i) => (
            <li key={phase.numeral} role="presentation">
              <button
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                className={styles.phase}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-controls={`${baseId}-panel`}
                aria-selected={selected === i}
                tabIndex={selected === i ? 0 : -1}
                onClick={() => select(i)}
              >
                <b>{phase.numeral}</b>
                {phase.name}
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.note} data-visible={current.addedInVersion ? "true" : "false"}>
          {current.addedInVersion
            ? `La fase ${current.numeral} llegó en la versión ${current.addedInVersion} con ${current.newQuests} misiones nuevas.`
            : null}
        </p>
      </div>
      <div
        className={styles.view}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${selected}`}
      >
        {phases.map((phase, i) => (
          <Image
            key={phase.numeral}
            className={styles.shot}
            data-active={selected === i}
            src={phase.image}
            alt={
              selected === i
                ? `Árbol de misiones de la fase ${phase.numeral}, ${phase.name}: los iconos de cada misión, conectados entre sí, sobre la pantalla oscurecida del libro de misiones`
                : ""
            }
            sizes="(max-width: 960px) 100vw, 800px"
          />
        ))}
      </div>
    </div>
  );
}
