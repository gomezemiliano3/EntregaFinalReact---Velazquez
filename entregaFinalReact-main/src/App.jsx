import {Routes , Route , BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Colegios from './Components/Colegios/Colegios';
import Empresas from './Components/Empresas/Empresas';
import Jardines from './Components/Jardines/Jardines';
import CartProvider from './context/CartContext';
import Checkout from './Components/CheckOut/Checkout';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<About />} />
        <Route path="/Colegios" element={<Colegios />} />
        <Route path="/Jardines/:idCategoria" element={<ItemListContainer />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path='/Jockey/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/Item/:idItem' element={<ItemDetailContainer/>} />
        <Route path='/Ins/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/Ninos/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/Vida/:idCategoria' element={<ItemListContainer/>} />
        <Route path="*" element={404} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
