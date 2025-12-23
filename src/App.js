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
        <span>This Project was coded by <strong>Jade coster</strong>. It is open-sourced on </span>
          <span>
         <a href='https://github.com/Vadia-Jade/dictionary-app-react' target='_blank' rel='noreferrer'>GitHub</a>
         </span>
         <span>  and Hosted on </span>
         <span>
          <a href='https://thunderous-kangaroo-a1e322.netlify.app/' target='_blank' rel='noreferrer'>Netlify</a>
        </span>
      </footer>
      </div>
    </div>
  );
}


