import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/apiConnect";

function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "2bd73a1735fb2df61a4711aaa922abb1",
            language: "pt-BR",
          },
        })
        .then((response) => {
          console.log(response);
          setFilme(response.data);
        })
        .catch(() => {
          console.log("FILME NAO ENCONTRADO");
        });
    }
    loadMovie();
  }, [id]);

  return (
    <div>
      <h1>Bem-vindo a pagina de filmes {id} </h1>
    </div>
  );
}

export default Movie;
