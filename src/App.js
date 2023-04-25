import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import "./style/App.css";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer titulo={"BIENVENIDOS"} />
    </div>
  );
}

export default App;
