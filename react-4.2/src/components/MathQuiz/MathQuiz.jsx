import styles from "./MathQuiz.module.css";

import { useState } from "react";
import Answer from "../Answer/Answer";

const random = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function MathQuiz() {
  const [a, setA] = useState(random());
  const [b, setB] = useState(random());
  const [points, setPoints] = useState(0);

  const updatePoints = (answer) => {
    setPoints((p) => (answer === a + b ? ++p : --p));
    setA(random());
    setB(random());
  };

  return (
    <div className={styles.form}>
      <div>
        <strong>Счёт: {points}</strong>
      </div>
      <div>
        Сколько будет:{" "}
        <strong>
          {a} + {b}
        </strong>
        ?
      </div>
      <Answer a={a} b={b} updatePoints={updatePoints} />
    </div>
  );
}

export default MathQuiz;
