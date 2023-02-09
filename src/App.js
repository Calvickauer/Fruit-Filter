import './App.css';
import FruitContainer from './FruitContainer';

function App() {
  const fruitArr = ['Apple', 'Bannana', 'Grapes', 'Kiwi', 'Pineapple', 'DragonFruit', 'Mango'];
  return (
    <div className="App">
      <h1>Type fruit name to filter </h1>
      <FruitContainer fruits={fruitArr} />
    </div>
  );
}

export default App;
