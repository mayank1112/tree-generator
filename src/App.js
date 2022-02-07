import './App.css';
import Transformer from './components/Transformer/Transformer.tsx';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>
          Flat Array to Tree Transformer
        </h1>
      </div>
      <div className='App-body'><Transformer /></div>
    </div>
  );
}

export default App;
