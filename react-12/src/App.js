import React, { useState } from "react";
import ShowValues from "./ShowValues";
import "./App.css";

export default function App() {
  const [value, setValue] = useState("some");

  return (
    <div className="app">
      <h1>Current and Previous Value</h1>

      <label>
        Enter Value:
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Some"
        />
      </label>

      <ShowValues value={value} />
    </div>
  );
}
