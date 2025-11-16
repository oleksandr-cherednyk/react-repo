import { useDispatch, useSelector } from "react-redux";
import { answerQuestion } from "../../features/questionnaire/questionnaireSlice";
import styles from "./Question.module.css";

export default function Question({ questionId }) {
  const dispatch = useDispatch();

  const question = useSelector((state) =>
    state.questionnaire.questions.find((q) => q.id === questionId)
  );
  const selectedAnswer = useSelector(
    (state) => state.questionnaire.answers[questionId]
  );

  if (!question) return null;

  const handleChange = (option) => {
    dispatch(
      answerQuestion({
        questionId: question.id,
        answer: option,
      })
    );
  };

  return (
    <div className={styles.question}>
      <p className={styles.text}>{question.text}</p>
      <div className={styles.options}>
        {question.options.map((option) => (
          <label key={option} className={styles.optionLabel}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
