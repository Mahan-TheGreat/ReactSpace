import "./copyright.css";
import CopyrightImage from "./../../assets/copyright.png";
const Copyright = () => {
  return (
    <div id="copyright_section">
      <img id="copyright_image" src={CopyrightImage} alt="copyright" />
      <p> copyright creativeAgent 2022. All Right Reserved </p>
    </div>
  );
};

export default Copyright;
