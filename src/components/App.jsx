import "./App.css";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


function App() {
  return (
    <div id="" className="App">
      <NavBar />
      <ItemListContainer title="My Ecommerce" subtitle="Soy un subtitle" />
    </div>
  );
}

export default App;
