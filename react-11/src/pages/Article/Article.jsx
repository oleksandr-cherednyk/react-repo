import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../data/posts.js";
import styles from "./Article.module.css";

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <h1>Invalid article URL</h1>;
  }

  const post = posts.find((p) => p.id === +id);

  if (!post) {
    return <h1>Article is not find</h1>;
  }

  return (
    <article className={styles.page}>
      <h1>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>

      <button onClick={() => navigate("/articles")} className={styles.button}>
        Back to articles
      </button>
    </article>
  );
}
