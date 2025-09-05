function CitySelector({ cities, selectedName, onChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="city-select">Выберите город:</label>
      <select
        id="city-select"
        value={selectedName}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">— не выбрано —</option>
        {cities.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default CitySelector;
