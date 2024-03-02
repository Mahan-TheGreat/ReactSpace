import "./services.css";
import Card from "../card/card";
import Services1 from "../../assets/services1.png";
import Services2 from "../../assets/services2.png";
import Services3 from "../../assets/services3.png";
import Services4 from "../../assets/services4.png";

const Services = () => {
  let text1 =
    "Lorem ipsum dolor sit amet, consectetunam.  consectetur adipiscing elit. Eget sodales ut";
  return (
    <div>
      <h4>Creative Agency</h4>
      <p>Services</p>
      <div id="card-services">
        <Card
          imageSource={Services1}
          title="Content Writing"
          text={text1}
          key="2"
        ></Card>
        <Card
          imageSource={Services2}
          title="Content Writing"
          text={text1}
          key="2"
        ></Card>
        <Card
          imageSource={Services3}
          title="Content Writing"
          text={text1}
          key="2"
        ></Card>
        <Card
          imageSource={Services4}
          title="Content Writing"
          text={text1}
          key="2"
        ></Card>
      </div>
    </div>
  );
};

export default Services;
