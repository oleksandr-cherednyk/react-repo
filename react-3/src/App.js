import './App.css';
import Rating from './components/Rating';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Выберите рейтинг</h1>
      <Rating />
      <List />
    </div>
  );
}

export default App;
