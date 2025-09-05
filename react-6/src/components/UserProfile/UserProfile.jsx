import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const URL = "https://randomuser.me/api";

    await axios.get(URL)
      .then(({ data }) => setUser(data.results[0]))
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <div className={styles.card}>Loading...</div>;

  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={user.picture.large} alt={fullName} />
        <h2 className={styles.name}>{fullName}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      <button className={styles.button} onClick={fetchUser}>
        Load New User
      </button>
    </div>
  );
}

