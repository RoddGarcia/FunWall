import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../moviePages/MoviePage.css";
import "../../moviePages/MoviePageDesktop.css";
import useFetch from "use-http";
import { FaStar } from "react-icons/fa";
import { useCookies } from "react-cookie";
// import { livros } from "../../../mocks/dummyData";
import GetData from "../../GetMovieData";

const LivroPage = () => {
  const { livroId } = useParams();
  const [livroInfo, setLivroInfo] = useState(null);
  const [hoveredStarIndex, setHoveredStarIndex] = useState(-1);
  const [rating, setRating] = useState(0);
  const [cookies] = useCookies(["user"]);
  const [userAval, setUserAval] = useState({});
  const [comment, setComment] = useState("");

  const livros = GetData("livros");

  const findlivroById = (livros, id) => {
    return livros.find((livro) => livro.id === parseInt(id));
  };

  useEffect(() => {
    if (livros) {
      const livro = findlivroById(livros, livroId);

      if (livro) {
        setLivroInfo(livro);
      }
    }
  }, [livroId, livros]);

  const handleStarHover = (index) => {
    setHoveredStarIndex(index);
  };

  const baseURLPost = "http://localhost:8080/avaliacoes";
  const { post, response } = useFetch(baseURLPost);
  const HandleEvaluate = async () => {
    if (rating === 0 || comment === "") {
      alert("Você não deu uma nota à obra.");
    } else {
      setUserAval({
        obra: livroInfo.titulo,
        nota: rating,
        texto: comment,
        user_id: { id: cookies.user.id },
      });

      console.log(userAval);
      try {
        const result = await post("", userAval);
        if (response.ok) {
          console.log("Avaliação enviada com sucesso:", result);
          window.location.reload();
        } else {
          console.error("Erro ao enviar avaliação:", response.data);
        }
      } catch (error) {
        console.error("Erro ao enviar avaliação:", error);
      }
    }
  };

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      HandleEvaluate();
    }
  };

  return (
    <div>
      {livroInfo ? (
        <>
          <main>
            <div className="single-movie-content">
              <div className="movie-container">
                <div className="moviePoster">
                  <img src={livroInfo.imagem} alt="livro Poster" />
                </div>
                <div className="movieDesc">
                  <h1>{livroInfo.titulo}</h1>
                  <p className="text">{livroInfo.descricao}</p>
                  {/* {/* <p className="text">{livroInfo.autor}</p> */}
                  <p className="text">{livroInfo.genero}</p>
                  <p className="text">
                    {livroInfo.pais}, {livroInfo.anoLancamento}
                  </p>{" "}
                </div>
              </div>

              <div className="rating-container">
                <div className="movieRating">
                  <div className="r1">
                    <div className="rr2">
                      <div className="Stars">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            size={40}
                            onMouseEnter={() => handleStarHover(index)}
                            onMouseLeave={() => handleStarHover(-1)}
                            onClick={() => handleStarClick(index)}
                            color={
                              index <= hoveredStarIndex ? "#ffc107" : "#e4e5e9"
                            }
                            style={{ cursor: "pointer" }}
                          />
                        ))}
                        <p>Nota: {rating}</p>
                      </div>
                      <textarea
                        name="postContent"
                        rows={4}
                        cols={40}
                        value={comment}
                        onChange={handleCommentChange}
                        onKeyPress={handleKeyPress}
                        style={{ resize: "none" }}
                        maxLength={128}
                      />
                      <button onClick={() => HandleEvaluate()}>Avaliar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <h1 className="elenco">Elenco</h1>
          <hr />
        </>
      ) : (
        <p style={{ color: "white" }}>Carregando...</p>
      )}
    </div>
  );
};

export default LivroPage;
