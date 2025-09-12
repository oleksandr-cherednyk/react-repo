import React, { useState } from "react";
import LanguageContext from "./context/LanguageContext/LanguageContext";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Title />
        <Button />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
