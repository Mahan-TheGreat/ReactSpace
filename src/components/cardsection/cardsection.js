import Card from "../card/card";
import "./cardsection.css";
import CardImage1 from "../../assets/card1.png";
import CardImage2 from "../../assets/card2.png";
import CardImage3 from "../../assets/card3.png";

function Cardsection() {
  let text1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sodales ut ac diam, turpis rutrum sit...";
  return (
    <div id="cardSection">
      <Card
        imageSource={CardImage1}
        title="Digital Marketing"
        text={text1}
        key="1"
        imageClass="imageStyle"
        titleClass="titleStyle"
        textClass="textStyle"
        buttonClass="buttonStyle"
      ></Card>
      <Card
        imageSource={CardImage2}
        title="Content Writing"
        text={text1}
        key="2"
        imageClass="imageStyle"
        titleClass="titleStyle"
        textClass="textStyle"
        buttonClass="buttonStyle"
      ></Card>
      <Card
        imageSource={CardImage3}
        title="Software Development"
        text={text1}
        key="3"
        imageClass="imageStyle"
        titleClass="titleStyle"
        textClass="textStyle"
        buttonClass="buttonStyle"
      ></Card>
    </div>
  );
}

export default Cardsection;
