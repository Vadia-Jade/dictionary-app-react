import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
         <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary  />
      </main>
      <footer>
        <span>This Project was coded by Jade coster </span>
      </footer>
      </div>
    </div>
  );
}


