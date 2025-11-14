import Quote from './components/Quote';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Random Quote Generator</h1>
      <Quote />
    </div>
  );
}

export default App;
