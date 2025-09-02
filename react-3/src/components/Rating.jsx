// src/components/Rating.jsx
import { useState } from "react";
import Button from "./Button";
import "../css/Rating.css";

function Rating() {
  const [ratingValue, setRatingValue] = useState(0); // 0..3

  const ratingList = [
    "https://www.clipartmax.com/png/middle/67-676995_5-star-rating-png.png", // Изменил ссылку на изображение, так как предыдущая не работала
    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];

  const values = ["Плохо", "Приемлемо", "Хорошо", "Отлично"];

  return (
    <div className="rating-container">
      <img
        src={[...ratingList].reverse()[ratingValue]}
        alt={`Рейтинг: ${values[ratingValue]}`}
        className="rating-image"
      />

      <div className="buttons">
        {values.map((value, i) => {

          return (
            <Button
              key={value}
              active={ratingValue === i}
              onClick={() => setRatingValue(i)}
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
