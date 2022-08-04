import "./App.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItenListContainer from "./components/Items/ItenListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
    <BrowserRouter>
       <NavBar />
       <Routes>
          <Route path="/" element={<ItenListContainer />} />
          <Route path="/category/:id" element={<ItenListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<p>404</p>} />
       </Routes>
       <br />
       <h6>Aca va el Footer</h6>
    </BrowserRouter>
 </>
  );
}

export default App;
