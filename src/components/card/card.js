import PrimaryButton from "../button/button";
import "./card.css";

function Card(title, text) {
  return (
    <div className="def-card card">
      <img src="" alt="card" />
      <h5>{title}</h5>
      <p>{text}</p>
      <PrimaryButton innerText="READ MORE"></PrimaryButton>
    </div>
  );
}

export default Card;
