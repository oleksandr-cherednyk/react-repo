import styles from "./Links.module.css";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";

export default function Links() {
  return (
    <ul className={styles.links}>
      <li className={styles.linksItem}>
        <a href="#" className={styles.link}>
          <AppleIcon className={styles.icon} aria-hidden="true" />
        </a>
      </li>
      <li className={styles.linksItem}>
        <a href="#" className={styles.link}>
          <GoogleIcon className={styles.icon} aria-hidden="true" />
        </a>
      </li>
      <li className={styles.linksItem}>
        <a href="#" className={styles.link}>
          <XIcon className={styles.icon} aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
