import "./herosection3.css";
import group22 from "../../assets/group_22.png";
import rectangle from "../../assets/rectangle.png";
import hero3 from "../../assets/hero3.png";
import PrimaryButton from "../button/button";

const HerosectionThree = () => {
  return (
    <div id="hero-section3">
      <div id="hero-text-section3">
        <p id="hero-welcome-text3">Creative Agency</p>
        <h3 id="hero-header3">Better Ways To Make Awesome Products</h3>
        <p id="hero-main-text3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sodales
          ut ac diam, turpis rutrum sit pulvinar. Est, aliquam quis sed nam.
          consectetur adipiscing elit. Eget sodales ut ac diam, turpis rutrum
          sit pulvinar. Est, aliquam quis sed nam.
        </p>
        <div id="btn-section3">
          <PrimaryButton
            className="hero-button3"
            innerText="Get in Touch"
          ></PrimaryButton>
        </div>
      </div>
      <div id="hero-image-section3">
        <img id="hero-svg3" src={group22} alt="logo" />
        <img id="hero-main-img3" src={hero3} alt="logo" />
        <div id="hero-rectangle">
          <div className="hero-count">
            <p className="hero-count-number">77</p>
            <p className="hero-count-text">Team Member</p>
          </div>
          <div className="hero-count">
            <p className="hero-count-number">900</p>
            <p className="hero-count-text">Happy Customers</p>
          </div>
          <div className="hero-count">
            <p className="hero-count-number">1,000</p>
            <p className="hero-count-text">Project Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerosectionThree;
