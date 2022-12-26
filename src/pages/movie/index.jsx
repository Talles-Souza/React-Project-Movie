import "./style.css";
import { useParams } from "react-router-dom";
function Movie() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Bem-vindo a pagina de filmes </h1>
    </div>
  );
}

export default Movie;
