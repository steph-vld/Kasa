import "./cards.css";
import { Link } from "react-router-dom";

function Cards({ id, title, cover }) {
  return (
    <Link to={`/lodgings/${id}`} className="gallery-cards">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
}
export default Cards;
