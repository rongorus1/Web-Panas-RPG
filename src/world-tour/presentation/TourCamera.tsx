"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import type { TourStop } from "@/world-tour/domain/tour-stop";
import styles from "./TourCamera.module.css";

type TourCameraProps = {
  art: StaticImageData;
  artAlt: string;
  introduction: TourStop;
  stops: TourStop[];
};

/** The step crossing the middle of the viewport decides the camera framing. */
export function TourCamera({ art, artAlt, introduction, stops }: TourCameraProps) {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const compact = matchMedia("(max-width: 960px)").matches;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: compact ? "-55% 0px -40% 0px" : "-50% 0px -45% 0px" },
    );
    for (const step of steps.current) if (step) observer.observe(step);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.grid}>
      <div className={styles.stage}>
        <div className={styles.cam} data-cam={active}>
          <Image src={art} alt={artAlt} sizes="(max-width: 960px) 50vw, 600px" />
        </div>
      </div>
      <ol className={styles.steps}>
        <li
          className={active === 0 ? `${styles.step} ${styles.first} ${styles.on}` : `${styles.step} ${styles.first}`}
          data-index={0}
          ref={(el) => {
            steps.current[0] = el;
          }}
        >
          <h2 id="world-tour-title">{introduction.title}</h2>
          <p>{introduction.description}</p>
        </li>
        {stops.map((stop, i) => {
          const index = i + 1;
          const isLast = index === stops.length;
          const classes = [styles.step, isLast && styles.last, active === index && styles.on]
            .filter(Boolean)
            .join(" ");
          return (
            <li
              key={stop.id}
              className={classes}
              data-index={index}
              ref={(el) => {
                steps.current[index] = el;
              }}
            >
              <h3>{stop.title}</h3>
              <p>{stop.description}</p>
              {stop.mods ? <p className={styles.mods}>{stop.mods}</p> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
