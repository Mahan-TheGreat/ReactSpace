import "./herosection2.css";
import Group22 from "../../assets/group_22.png";
import HeroImage from "../../assets/hero2.PNG";
import PrimaryButton from "../button/button";

const HerosectionTwo = () => {
  return (
    <div id="hero-section2">
      <div id="hero-image-section2">
        <img id="hero-svg2" src={Group22} alt="logo" />
        <img id="hero-main-img2" src={HeroImage} alt="logo" />
      </div>
      <div id="hero-text-section2">
        <p id="hero-welcome-text2">Creative Agency</p>
        <h3 id="hero-header2">Build Your Next Site With Us</h3>
        <p id="hero-main-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sodales
          ut ac diam, turpis rutrum sit pulvinar. Est, aliquam quis sed nam.
          consectetur adipiscing elit. Eget sodales ut ac diam, turpis rutrum
          sit pulvinar. Est, aliquam quis sed nam.
        </p>
        <div id="btn-secion">
          <PrimaryButton
            className="hero-button2"
            innerText="Get Started"
          ></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HerosectionTwo;
