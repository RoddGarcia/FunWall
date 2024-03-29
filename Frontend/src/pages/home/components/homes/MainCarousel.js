import React, { useState, useEffect } from "react";
import { Carousel } from "./Carousel";
import "./home.css";
import useFetch from "use-http";
import { homeData } from "../../../../mocks/dummyData";

export const MainCarousel = () => {
  const [items, setItems] = useState(homeData);
  // const baseURL =
  // ("http://ec2-18-229-150-72.sa-east-1.compute.amazonaws.com/filmes");
  // const baseURL = "https://mack-webmobile.vercel.app/api/users";
  // const { get, response } = useFetch(baseURL);
  // const [filmes, setFilmes] = useState([]);
  // console.log(baseURL);
  // useEffect(() => {
  //   fetch("ec2-18-229-150-72.sa-east-1.compute.amazonaws.com/filmes/")
  //     .then((response) => console.log(response.json()))
  //     .then((data) => {
  //       setFilmes(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  // const buscar = async () => {
  //   const resp = await get();

  //   if (response.ok) {
  //     setFilmes(resp);
  //   } else {
  //     setFilmes([]);
  //   }
  // };
  // useEffect(() => {
  //   buscar();
  // }, []);

  return (
    <>
      <section className="home">
        <Carousel items={items} />
      </section>
    </>
  );
};

export default MainCarousel;
