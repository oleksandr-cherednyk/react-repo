import styles from "./Contacts.module.css";
import snapchatLogo from "../../assets/snapchat.png";
import facebookLogo from "../../assets/facebook.png";
import xLogo from "../../assets/x.png";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.left}>
        <h1>Контакты</h1>

        <ul className={styles.list}>
          <li>Телефон: +49 123 456 789</li>
          <li>Email: info@example.com</li>
        </ul>

        <form className={styles.form}>
          <input
            type="email"
            placeholder="Ваша электронная почта"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Ваше сообщение"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>

      <div className={styles.right}>
        <p className={styles.socialTitle}>Найдите нас на:</p>
        <div className={styles.socials}>
          <a href="#" aria-label="Snapchat">
            <img src={snapchatLogo} alt="Snapchat" />
          </a>
          <a href="#" aria-label="Facebook">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="#" aria-label="X">
            <img src={xLogo} alt="X (Twitter)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
