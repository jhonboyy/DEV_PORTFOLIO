import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <section>
          <a>
            <span>2024</span>
            <span>JHON BOY</span>
            <span>ASTRO, CSS, JAVASCRIPT</span>
          </a>
          <a>
            <span>2024</span>
            <span>ETIFILM</span>
            <span>NUXT, CSS, DOCKER, TYPESCRIPT</span>
          </a>
          <a>
            <span>2024</span>
            <span>RISO LAB</span>
            <span>HTML, CSS, JAVASCRIPT</span>
          </a>
        </section>
        <header className={styles.header}>
          <h1>WEB DEVELOPMENT WITH A FOCUS ON DESIGN, EXPERIMENTATION, AND USER EXPERIENCE.</h1>
          <a>CONTACT</a>
          <a className={styles.githubLink}>GITHUB <span className={styles.arrow}>&#8599;</span></a>
        </header>
      </main>
    </div>
  );
}
