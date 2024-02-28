import "./App.css";
import Herosection from "./components/herosection/herosection";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className="Container">
      <div className="mb-2 container">
        <Navigation></Navigation>
        <Herosection></Herosection>
      </div>
    </div>
  );
}

export default App;
