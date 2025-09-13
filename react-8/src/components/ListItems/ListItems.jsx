import React, { useState, useEffect } from "react";
import "./ListItems.css";

export default function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const item = inputValue.trim();
    if (!item) return;
    setItems([...items, item]);
    setInputValue("");
  };

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, []);

  return (
    <div className='container'>
      <h2>Список</h2>
      <div className='form'>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Добавить</button>
      </div>

      <ul style={{ marginTop: 16 }}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
