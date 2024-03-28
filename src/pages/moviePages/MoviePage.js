import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <h1>Movie Details</h1>
      {movieInfo ? (
        <>
          <p>Movie ID: {movieInfo._id}</p>
          <p>Nome: {movieInfo.name}</p>
          <p>
            Avatar: <img src={movieInfo.avatar} />
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
