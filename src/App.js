import "./App.css";
import Cardsection from "./components/cardsection/cardsection";
import Herosection from "./components/herosection/herosection";
import Navigation from "./components/navigation/navigation";
import HerosectionTwo from "./components/herosection2/herosection2";

function App() {
  return (
    <div className="Container">
      <div className="mb-2 container">
        <Navigation></Navigation>
        <Herosection></Herosection>
        <Cardsection></Cardsection>
        <HerosectionTwo></HerosectionTwo>
      </div>
    </div>
  );
}

export default App;
