import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext/LanguageContext";
import dictionary from "../../dictionary";
import './Title.css';

export default function Title() {
  const { language } = useContext(LanguageContext);

  return (
    <h1 className='title'>
      {dictionary[language].message}
    </h1>
  );
}
