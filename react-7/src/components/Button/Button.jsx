import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext/LanguageContext";
import dictionary from "../../dictionary";
import './Button.css';

export default function Button() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button className='btn' onClick={() => setLanguage(language === "en" ? "ru" : "en")}>
      {dictionary[language].button}
    </button>
  );
}