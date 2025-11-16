import { Routes, Route, Link } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <Link to="/">Главная</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Главная страница</h1>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
