
import "./App.css";
import ItenListContainer from "./components/NavBar/ItenListContainer";
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
