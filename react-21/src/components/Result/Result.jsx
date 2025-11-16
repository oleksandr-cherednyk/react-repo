import { useSelector } from "react-redux";
import styles from "./Result.module.css";

export default function Result() {
  const { score, submitted } = useSelector(
    (state) => state.questionnaire
  );

  if (!submitted) return null;

  return (
    <div className={styles.result}>
      <span>Your Score: </span>
      <span className={styles.score}>{score}</span>
    </div>
  );
}
