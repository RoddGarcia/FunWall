import { useState, useEffect } from "react";
import { popular } from "../../mocks/dummyData";
import { MainCarousel } from "./components/homes/MainCarousel";
import { Popular } from "./popular/Popular";
import useFetch from "use-http";

export const HomePage = () => {
  const baseURL = "https://mack-webmobile.vercel.app/api/users";
  const { get, response } = useFetch(baseURL);
  const [filmes, setFilmes] = useState([]);

  const buscar = async () => {
    const resp = await get();

    if (response.ok) {
      setFilmes(resp);
    } else {
      setFilmes([]);
    }
  };
  useEffect(() => {
    buscar();
  }, []);

  return (
    <>
      <MainCarousel />
      <Popular items={filmes} title="Populares" />
    </>
  );
};
