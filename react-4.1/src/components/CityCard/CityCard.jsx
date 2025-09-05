import styles from "./CityCard.module.css";

function CityCard({ city }) {
  if (!city) {
    return <p>Выберите город, чтобы увидеть информацию.</p>;
  }

  return (
    <div className={styles.cityCard}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
