import "./App.css";
import DenisCentroComando from "./components/DenisCentroComando";
import Ganso from "./components/Ganso";
import Jogo from "./components/jogo";
import JuninJaulas from "./components/JuninJaulas";
import MagoPalco from "./components/MagoPalco";
import PesoIdeal from "./components/peso";
import Pousada from "./components/pousada";
import Sarumano from "./components/Sarumano";
import Votar from "./components/Votar";

function App() {

  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

    <h2>#0030</h2>
    <Ganso />
    <Sarumano/>
    <MagoPalco />
    <JuninJaulas />
    <DenisCentroComando />
   

    <hr />
     
     <h2>#0027.sq05</h2>

     <PesoIdeal/>
      <Votar />
      <Pousada/>
      <Jogo />
    </div>
  );
}

export default App