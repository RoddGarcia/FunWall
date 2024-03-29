import { useState, useEffect } from "react";
import { popular } from "../../mocks/dummyData";
import { MainCarousel } from "./components/homes/MainCarousel";
import { Popular } from "./popular/Popular";
import useFetch from "use-http";

export const HomePage = () => {
  const baseURL = "https://mack-webmobile.vercel.app/api/users";
  // const baseURL =
  //   "http://ec2-15-229-109-68.sa-east-1.compute.amazonaws.com/filmes";

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

  // fetch(baseURL)
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`Failed with status code: ${response.status}`);
  //     }

  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log("Fetch Error: ", err);
  //   });

  return (
    <>
      <MainCarousel />
      <Popular items={filmes} title="Populares" />
    </>
  );
};
