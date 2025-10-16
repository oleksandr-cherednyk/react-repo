import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";
import Home from "./pages/Home";
import Articles from "./pages/Articles/Articles";
import Article from "./pages/Article/Article";
import Header from "./components/Header/Header";

function App() {

  return (
    <div className={style.app}>
      <Header />
      <main className={style.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
