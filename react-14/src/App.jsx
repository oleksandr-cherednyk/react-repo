import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./User";
import UserForm from "./UserForm";

function App() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <h1 style={styles.title}>HW 14</h1>
        <div style={styles.cards}>
          <User />
          <UserForm />
        </div>
      </div>
    </Provider>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f2f3f6ff",
    minHeight: "100vh",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    color: "#2f3640",
  },
  cards: {
    maxWidth: "500px",
    margin: "20px auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

export default App;
