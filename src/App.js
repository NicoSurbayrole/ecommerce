import NavBar from './components/NavBar/NavBar';
import ItemCounter from './components/itemCounter/ItemCounter';
import './style/App.css';

function App() {
  return (
    <div>
    <header>
        <NavBar/>
    </header>
        <ItemCounter/>
    </div>
  );
}

export default App;
