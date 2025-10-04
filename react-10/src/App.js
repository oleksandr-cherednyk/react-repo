import CatImage from "./components/CatImage"; // <- ВАЖНО: проверь путь/имя файла!
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.app}>
      <CatImage />
    </main>
  );
}
