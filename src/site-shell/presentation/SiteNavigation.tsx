"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { panasRpg } from "@/modpack/infrastructure/panas-rpg.content";
import logo from "@/modpack/presentation/assets/logo-64.jpg";
import { navigationItems, HERO_TITLE_ID } from "@/site-shell/infrastructure/navigation.content";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Container } from "@/shared/ui/Container";
import styles from "./SiteNavigation.module.css";

export function SiteNavigation() {
  const [overHero, setOverHero] = useState(true);
  const [currentSection, setCurrentSection] = useState("inicio");

  useEffect(() => {
    const heroTitle = document.getElementById(HERO_TITLE_ID);
    if (!heroTitle) return;
    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(heroTitle);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCurrentSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { sectionId } of navigationItems) {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header className={overHero ? `${styles.nav} ${styles.over}` : styles.nav}>
      <Container className={styles.inner}>
        <a className={styles.brand} href="#inicio">
          <Image src={logo} width={34} height={34} alt="" />
          {panasRpg.name}
        </a>
        <nav aria-label="Principal">
          <ul className={styles.links}>
            {navigationItems.map(({ sectionId, label }) => (
              <li key={sectionId}>
                <a href={`#${sectionId}`} aria-current={currentSection === sectionId ? "true" : undefined}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink className={styles.cta} href={panasRpg.links.download} external>
          Descargar
        </ButtonLink>
      </Container>
    </header>
  );
}
