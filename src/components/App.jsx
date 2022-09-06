import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";


function App() {
  return (
    
    <div id="" className="App">
      <NavBar />
      <ItemListContainer title="My Ecommerce" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
