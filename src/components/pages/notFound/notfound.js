import "./notFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  const errorTxt = "Oups! La page que vous demandez n'existe pas.";

  return (
    <div className="error-page">
      <h1>404</h1>
      <span className="oups">{errorTxt}</span>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;
