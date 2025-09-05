import styles from './Answer.module.css';

import { useState } from "react";

function Answer({ a, b, updatePoints }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    updatePoints(Number(value));
    setValue("");
  };

  return (
    <form className={styles.answer} onSubmit={onSubmit}>
      <label>
        Ответ:
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </label>
      <button type="submit">Ответить</button>
    </form>
  );
}

export default Answer;
