import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"; 

export default function Card({ post }) {
  return (
    <li key={post.id} className={styles.card}>
      <h3 className={styles.cardTitle}>
        {post.title}
      </h3>

      <p className={styles.muted}>{post.content}</p>

      <Link to={`/articles/${post.id}`} className={styles.button}>
        See more
      </Link>
    </li>
  );
}
