import { posts } from "../../data/posts";
import Card from "../../components/Card/Card";
import styles from "./Articles.module.css";

export default function Articles() {
  return (
    <section className={styles.page}>
      <h1>Alticles</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
