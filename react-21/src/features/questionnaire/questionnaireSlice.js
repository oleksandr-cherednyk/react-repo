import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      text: "Question 1?",
      options: ["Option 1", "Option 2"],
      correctAnswer: "Option 1",
    },
    {
      id: 2,
      text: "Question 2?",
      options: ["Option 1", "Option 2"],
      correctAnswer: "Option 2",
    },
    {
      id: 3,
      text: "Question 3?",
      options: ["Option 1", "Option 2"],
      correctAnswer: "Option 1",
    },
    {
      id: 4,
      text: "Question 4?",
      options: ["Option 1", "Option 2"],
      correctAnswer: "Option 1",
    },
    {
      id: 5,
      text: "Question 5?",
      options: ["Option 1", "Option 2"],
      correctAnswer: "Option 2",
    },
  ],
  answers: {},     // { [id]: 'Option 1' | 'Option 2' }
  score: 0,
  submitted: false,
};

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    answerQuestion(state, { payload }) {
      const { questionId, answer } = payload;
      state.answers[questionId] = answer;
      state.submitted = false;
    },
    submitAnswers(state) {
      let score = 0;
      state.questions.forEach((q) => {
        if (state.answers[q.id] === q.correctAnswer) {
          score += 1;
        }
      });
      state.score = score;
      state.submitted = true;
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
