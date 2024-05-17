import { useState, useEffect } from "react";
// import { movies } from "../../mocks/dummyData"; // dummydata para filmes
import { books } from "../../mocks/dummyData";
import { series } from "../../mocks/dummyData";
import { MainCarousel } from "./components/homes/MainCarousel";
import { PopularFilmes } from "./popular/PopularFilmes";
import { PopularBooks } from "./popular/PopularBooks";
import { PopularSeries } from "./popular/PopularSeries";
import useFetch from "use-http";
import Modal from "../../components/modal/Modal";
import GetMovieData from "../GetMovieData";

export const HomePage = () => {
  const baseURLLivros = "http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/livros";
  const { get, response } = useFetch(baseURLLivros);
  // const [movies, setMovies] = useState([]);
  const [livros, setLivros] = useState([]);

  const buscarLivros = async () => {
    const resp = await get();
    if (response.ok) {
      setLivros(resp);
    } else {
      setLivros([]);
    }
  };
  useEffect(() => {
    buscarLivros();
  }, []);

  const movies = GetMovieData("filmes");
  const series = GetMovieData("series");

  console.log(movies)

  return (
    <>
      <MainCarousel />
      <PopularFilmes items={movies} title="Filmes Populares" />
      <PopularSeries items={series} title="Séries Populares" />
      <PopularBooks items={livros} title="Livros Populares" />
      <Modal />
    </>
  );
};
