import PrimaryButton from "../button/button";
import "./card.css";

function Card({
  imageSource,
  title,
  text,
  imageClass,
  titleClass,
  textClass,
  buttonClass,
}) {
  return (
    <div className="card">
      <img src={imageSource} className={imageClass} alt="card" />
      <h5 className={titleClass}>{title}</h5>
      <p className={textClass}>{text}</p>
      <PrimaryButton
        innerText="READ MORE"
        className={buttonClass}
      ></PrimaryButton>
    </div>
  );
}

export default Card;
