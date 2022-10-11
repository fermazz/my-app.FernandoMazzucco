import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Cart from "./Cart/Cart";
import { CartProvider } from "../context/CartContext";
import Checkout from "./Checkout/Checkout";
import Footer from "./Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div id="" className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer/>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
