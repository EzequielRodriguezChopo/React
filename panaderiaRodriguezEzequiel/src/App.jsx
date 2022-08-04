
import "./App.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItenListContainer from "./components/Items/ItenListContainer";

import NavBar from "./components/NavBar/NavBar";

function App() {
 
  return (
    <div>
      <NavBar />
      <div class="alineacionItems">
        <ItenListContainer/>
      </div>
    </div>
  );
}

export default App;
