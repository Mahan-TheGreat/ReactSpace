import "./contactfooter.css";
import Logo from "./../../../assets/nav_logo.PNG";
const Contactfooter = () => {
  return (
    <div id="contact_footer">
      <img src={Logo} alt="logo" />
      <p>Baneshwor 2908</p>
      <p>Kathmandu, Nepal</p>
      <p>
        <b>Phone: </b>9841523465
      </p>
      <p>
        <b>Email:</b> creativeagency2079@gmail.com
      </p>
    </div>
  );
};

export default Contactfooter;
