import { useState } from "react";
import CitySelector from "./components/CitySelector/CitySelector";
import CityCard from "./components/CityCard/CityCard";
import { citiesData } from "./data/cities";
import './App.css';

function App() {
  const [selectedName, setSelectedName] = useState("");
  const selectedCity = citiesData.find((c) => c.name === selectedName);

  return (
    <div className="container">
      <h1>City Cards</h1>
      <CitySelector
        cities={citiesData}
        selectedName={selectedName}
        onChange={setSelectedName}
      />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
