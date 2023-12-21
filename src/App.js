import "./App.css";
import Button from "./components/button/button";

function App() {
  const handleClick = (n) => {
    console.log("Clicked");
  };
  return (
    <div className="App">
      <Button onClickFn={handleClick} style={{}} innerText="Button"></Button>
    </div>
  );
}

export default App;
