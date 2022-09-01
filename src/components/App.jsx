import "./App.css";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Item from "./Item/Item";


function App() {
  return (
    <div id="" className="App">
      <NavBar />
      <ItemListContainer title="My Ecommerce" subtitle="Soy un subtitle" />
      <Item />
    </div>
  );
}

export default App;
