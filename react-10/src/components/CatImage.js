import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CatImage.module.css";

export default function CatImage() {
  const [url, setUrl] = useState("");

  const fetchCat = async () => {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    setUrl(data[0].url);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Random Cat Image</h1>
      <div className={styles.card}>
        {url && <img className={styles.image} src={url} alt="Cat" />}
      </div>
      <button className={styles.button} onClick={fetchCat}>
        Loading New Image
      </button>
    </div>
  );
}
