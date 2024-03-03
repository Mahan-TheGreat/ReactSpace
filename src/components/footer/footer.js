import Contactfooter from "./contactfooter/contactfooter";
import Facebook from "./../../assets/fb.png";
import Instagram from "./../../assets/ig.png";
import Twitter from "./../../assets/twitter.png";
import Arrow from "./../../assets/footer_arrow.png";

import "./footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      <Contactfooter></Contactfooter>
      <div className="footer_section footer_link">
        <p className="footer_title">Useful Links</p>
        <ul>
          <li>
            <img src={Arrow} alt="arrow" />
            Home
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            About us
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Services
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Terms of Service
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Policy
          </li>
        </ul>
      </div>
      <div className="footer_section footer_link">
        <p className="footer_title">Services</p>
        <ul>
          <li>
            <img src={Arrow} alt="arrow" />
            Mobile App
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Content Writing
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Video Editing
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Web App
          </li>
          <li>
            <img src={Arrow} alt="arrow" />
            Branding Design
          </li>
        </ul>
      </div>
      <div className="footer_section ">
        <p className=" footer_title">Follow Us</p>
        <div id="social_media">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};
