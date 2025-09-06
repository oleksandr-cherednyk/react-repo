import Links from "../Links/Links";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>

      <div className={styles.textGroup}>
        <p className={styles.text}>Sign in</p>
        <p className={styles.text}>with</p>
      </div>

      <Links />
    </main>
  );
}
