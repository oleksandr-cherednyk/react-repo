import { useState } from "react";
import "../css/List.css";

export default function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },
    { id: 9, name: "Серафим", age: 21 },
  ]);

    const deletePeople = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <ul className="list">
        {people.map((p) => (
          <li className="listItem">
            {`${p.name} ${p.age}`}
            <button onClick={() => deletePeople(p.id)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
