import "./App.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItenListContainer from "./components/Items/ItenListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
 
  return (
    <>
    <BrowserRouter>
       <NavBar />
       <Routes>
          <Route path="/" element={<ItenListContainer />} />
          <Route path="/category/:id" element={<ItenListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>

          <Route path="*" element={<p>404</p>} />
       </Routes>
       <br />
       <h6> Panaderia los Abuelos - 2022 - Desarrollado por Rodriguez Ezequiel</h6>
    </BrowserRouter>
 </>
  );
}

export default App;
