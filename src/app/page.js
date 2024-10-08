"use client";

import styles from "./page.module.css";
import { useState } from "react";
import DarkModeWrapper from "../components/dark-mode-wrapper";

export default function Home() {
  const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;

    const xPos = (clientX / offsetWidth) * 100;
    const yPos = (clientY / offsetHeight) * 100;

    setBackgroundPosition(`${xPos}% ${yPos}%`);
  };

  return (
    <DarkModeWrapper>
      <div
        className={`${styles.page} animated-background`}
        style={{ backgroundPosition }}
        onMouseMove={handleMouseMove}
      >
        <main className={styles.main}>
          <section>
            <a href="https://www.jhonboy.com" target="_blank">
              <span>2024</span>
              <span>JHON BOY</span>
              <span>ASTRO, JS</span>
            </a>
            <a href="https://www.etifilm.com" target="_blank">
              <span>2024</span>
              <span>ETIFILM</span>
              <span>NUXT, DOCKER, TS</span>
            </a>
            <a href="https://studioskarv.com" target="_blank">
              <span>2024</span>
              <span>SKARV</span>
              <span>LIQUID, JS</span>
            </a>
            <a href="https://riso-lab.jhonboy.com" target="_blank">
              <span>2023</span>
              <span>RISO LAB</span>
              <span>NEXT, P5, JS</span>
            </a>
            <a href="https://jhonboyy.github.io/DINO_GAME/" target="_blank">
              <span>2023</span>
              <span>DINO GAME</span>
              <span>JS</span>
            </a>
          </section>
          <header className={styles.header}>
            <h1>WEB DEVELOPMENT WITH A FOCUS ON DESIGN, EXPERIMENTATION, AND USER EXPERIENCE.</h1>
            <a href="mailto:hello@jhonboy.com">CONTACT</a>
            <a href="https://github.com/jhonboyy" target="_blank" className={styles.githubLink}>
              GITHUB <span className={styles.arrow}>&#8599;</span>
            </a>
          </header>
        </main>
      </div>
    </DarkModeWrapper>
  );
}
