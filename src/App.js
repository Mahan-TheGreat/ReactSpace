import "./App.css";
import Cardsection from "./components/cardsection/cardsection";
import Herosection from "./components/herosection/herosection";
import Navigation from "./components/navigation/navigation";
import HerosectionTwo from "./components/herosection2/herosection2";
import Services from "./components/services/services";
import BlogsSection from "./components/blogssection/blogssection";
import HerosectionThree from "./components/herosection3/herosection3";
import Copyright from "./components/copyright/copyright";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="Container">
      <div className="mb-2 container">
        <Navigation></Navigation>
        <Herosection></Herosection>
        <Cardsection></Cardsection>
        <HerosectionTwo></HerosectionTwo>
        <Services></Services>
        <HerosectionThree></HerosectionThree>
        <BlogsSection></BlogsSection>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
    </div>
  );
}

export default App;
