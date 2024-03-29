import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MoviePage.css";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { FaRegStar, FaCheck, FaRegHeart, FaRegBookmark } from "react-icons/fa";

const MoviePage = () => {
  // Using useParams to get the movieId parameter from the URL
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    // Fetch movie details based on movieId
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://mack-webmobile.vercel.app/api/users/${movieId}`
        );
        const data = await response.json();
        setMovieInfo(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  console.log("Movie ID:", movieId);

  return (
    <div>
      {movieInfo ? (
        <>
          <main>
            <div className="moviePoster">
              <img src={movieInfo.avatar} />
            </div>

            <div className="movieDesc">
              <h1>{movieInfo.name}</h1>
              <p>Movie ID: {movieInfo._id}</p>
            </div>
            <div className="movieRating">
              <div className="r1">
                <div className="rr1">
                  <div>
                    <div id="icons">
                      <FaCheck />
                    </div>
                    <div>Já assisti</div>
                  </div>
                  <div>
                    <div id="icons">
                      <FaRegHeart />
                    </div>
                    <div>Curtir</div>
                  </div>
                  <div>
                    <div id="icons">
                      <FaRegBookmark />
                    </div>
                    <div>Assistir Depois</div>
                  </div>
                </div>
                <hr />
                <div className="rr2">
                  <div>Avalie</div>
                  <div>
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                    <FaRegStar size={20} />
                  </div>
                  <div>Deixe um comentário</div>
                  <div>
                    <BsPencilFill size={24} />
                  </div>
                </div>
                <hr />
                <div className="rr3">
                  <div>Compartilhe</div>
                  <div>
                    <IoShareSocialSharp size={32} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <p style={{ color: "white" }}>Carregando...</p>
      )}
    </div>
  );
};

export default MoviePage;
