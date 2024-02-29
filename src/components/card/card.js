import PrimaryButton from "../button/button";
import "./card.css";

function Card({ imageSource, title, text }) {
  return (
    <div className="def-card card">
      <img src={imageSource} alt="card" />
      <h5>{title}</h5>
      <p>{text}</p>
      <PrimaryButton innerText="READ MORE"></PrimaryButton>
    </div>
  );
}

export default Card;
