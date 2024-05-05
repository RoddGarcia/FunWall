import React, { useState, useEffect } from "react";
import { Carousel } from "./Carousel";
import "./home.css";
import useFetch from "use-http";

// import useFetch from "use-http";
import { homeData } from "../../../../mocks/dummyData";
import { books } from "../../../../mocks/dummyData";
import { series } from "../../../../mocks/dummyData";
import { movies } from "../../../../mocks/dummyData";
// import axios from "axios";

export const MainCarousel = () => {
  const [items, setItems] = useState(homeData);
  // const baseURL = "http://ec2-15-228-43-137.sa-east-1.compute.amazonaws.com:8080/filmes";
  const baseURL = "http://localhost:8080/filmes";
  const { get, response, del, put, error, loading } = useFetch(baseURL);
  const [filmes, setFilmes] = useState([]);

  return (
    <>
      <section className="home">
        <Carousel items={homeData} />
      </section>
    </>
  );
};

export default MainCarousel;
