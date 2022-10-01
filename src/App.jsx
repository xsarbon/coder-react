import './App.css';
import NavBar from './components/Nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer'
import Cart from './components/Cart/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useCartContext } from "./context/CartContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/product/:category.id" element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <br /><br /><br /><br />
    </>
  )
}
export default App;
