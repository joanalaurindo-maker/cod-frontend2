import "./App.css";
import Jogo from "./components/jogo";
import PesoIdeal from "./components/peso";
import Pousada from "./components/pousada";
import Votar from "./components/Votar";

function App() {

  return (
    <div className="app">
      <h1>03 estados e componentes</h1>
     <PesoIdeal/>
      <Votar />
      <Pousada/>
      <Jogo />
    </div>
  );
}

export default App