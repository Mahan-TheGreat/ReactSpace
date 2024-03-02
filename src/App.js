import "./App.css";
import Cardsection from "./components/cardsection/cardsection";
import Herosection from "./components/herosection/herosection";
import Navigation from "./components/navigation/navigation";
import HerosectionTwo from "./components/herosection2/herosection2";
import Services from "./components/services/services";

function App() {
  return (
    <div className="Container">
      <div className="mb-2 container">
        <Navigation></Navigation>
        <Herosection></Herosection>
        <Cardsection></Cardsection>
        <HerosectionTwo></HerosectionTwo>
        <Services></Services>
      </div>
    </div>
  );
}

export default App;
