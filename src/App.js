import logo from './logo.svg';
import './App.css';
import MenuSemaine from './component/menuSemaine'
import Jour from'./component/jour.js'
import Aliment from './component/aliment.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MenuSemaine title="Menu de la semaine"/>
        <p>
          <Jour />
        </p>
      
        
      </header>
    </div>
  );
}

export default App;
