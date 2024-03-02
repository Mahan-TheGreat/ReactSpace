import "./herosection.css";
import group21 from "../../assets/group_21.png";
import imageHero from "../../assets/image_hero.png";
import PrimaryButton from "../button/button";

const Herosection = () => {
  return (
    <div id="hero-section">
      <div id="hero-text-section">
        <p id="hero-welcome-text">Welcome!</p>
        <h3 id="hero-header">Creative Agency Company from Nepal</h3>
        <p id="hero-main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sodales
          ut ac diam, turpis rutrum sit pulvinar. Est, aliquam quis sed nam.{" "}
        </p>
        <div id="btn-section">
          <PrimaryButton
            className="hero-button"
            innerText="Get Started"
          ></PrimaryButton>
          <PrimaryButton
            className="hero-secondary-button"
            innerText="Watch a Video"
            showIcon={true}
          ></PrimaryButton>
        </div>
      </div>
      <div id="hero-image-section">
        <img id="hero-svg" src={group21} alt="logo" />
        <img id="hero-main-img" src={imageHero} alt="logo" />
      </div>
    </div>
  );
};

export default Herosection;
