import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <div id="" className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
