import useFetch from "use-http";
import { useEffect, useState } from "react";

const GetMovieData = () => {
  const baseURL = "http://localhost:8080/filmes";
  const { get, response } = useFetch(baseURL);
  const [movies, setMovies] = useState([]);
  const buscar = async () => {
    const resp = await get();
    console.log(resp);
    if (response.ok) {
      setMovies(resp);
    } else {
      setMovies([]);
    }
  };
  useEffect(() => {
    buscar();
    console.log(movies);
  }, []);

  return movies;
};

export default GetMovieData;
