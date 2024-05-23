import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PopularCard } from "./home/popular/PopularCard";
import { useFetch } from "use-http";

const ObrasRecomendadas = () => {
  const [cookies] = useCookies(["user"]);
  const logado = cookies.user && cookies.user.nome;
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const baseURL = "http://ec2-3-82-238-164.compute-1.amazonaws.com:25000";
  const { get, response } = useFetch(baseURL);

  useEffect(() => {
    const fetchData = async () => {
      const filmes = await get("/filmes");
      const series = await get("/series");
      const livros = await get("/livros");

      if (response.ok) {
        // Add a tipo property to each item
        const filmesWithTipo = (Array.isArray(filmes) ? filmes : []).map(item => ({ ...item, tipo: 'filmes' }));
        const seriesWithTipo = (Array.isArray(series) ? series : []).map(item => ({ ...item, tipo: 'series' }));
        const livrosWithTipo = (Array.isArray(livros) ? livros : []).map(item => ({ ...item, tipo: 'livros' }));

        const allItems = [...filmesWithTipo, ...seriesWithTipo, ...livrosWithTipo];
        const filteredItems = allItems.filter(item => item.genero === cookies.user.interesse);
        setItems(filteredItems);
        console.log(filteredItems);
      } else {
        console.error("Failed to fetch data");
      }
    };
    fetchData();
  }, [get, response, cookies.user.interesse]);

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    afterChange: handleAfterChange,
  };

  return (
    <>
      {logado ? (
        <div className="container">
          <div className="header navbar">
            <h1>Obras que talvez você vá curtir</h1>
          </div>
          <div className="content">
            <Slider {...settings}>
              {items.map((item) => (
                <div className="popular-card-wrapper" key={item.id}>
                  <PopularCard item={item} tipo={item.tipo} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ObrasRecomendadas;
