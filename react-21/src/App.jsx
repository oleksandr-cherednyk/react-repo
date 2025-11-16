import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "./features/questionnaire/questionnaireSlice";
import Question from "./components/Question/Question";
import Result from "./components/Result/Result";
import styles from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state) => state.questionnaire.questions
  );

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Questionnaire</h1>

      <div className={styles.questions}>
        {questions.map((q) => (
          <Question key={q.id} questionId={q.id} />
        ))}
      </div>

      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>

      <Result />
    </div>
  );
}

export default App;
