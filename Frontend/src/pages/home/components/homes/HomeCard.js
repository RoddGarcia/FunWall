import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import React from "react";
import axios from "axios";

export const HomeCard = ({
  item: {
    _id,
    name,
    diretor,
    elenco,
    desc,
    starring,
    pais,
    anoLancamento,
    media,
    cover,
    date,
  },
  // item: { _id, nome, diretor, email, avatar, date, salary },
}) => {
  const handleRemove = async () => {
    try {
      await axios.delete(
        `http://ec2-15-228-186-157.sa-east-1.compute.amazonaws.com/filmes${id}`
      );
      console.log("Filme removido com sucesso!");
      // Aqui você pode atualizar o estado ou realizar outras operações, se necessário
    } catch (error) {
      console.error("Erro ao remover filme:", error);
    }
  };
  // console.log(nome);
  return (
    <div className="box">
      <div className="coverImage">
        <img src={cover} alt="" />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{name}</h1>
          <div className="rating flex">
            {/* <div className="rate">
              <i> </i>
              <i> </i>
              <i> </i>
            </div> */}
            {/* <label>{"salary"}</label> */}
            {/* <label>{date}</label> */}
          </div>
          <p className="desc">{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring: </span>
              {starring}
            </h4>
            <h4>
              <span>Pais: </span>
              {pais}
            </h4>
            <h4>
              <span>diretor: </span>
              {diretor}
            </h4>
          </div>
          <button className="primary-btn"> Veja Mais</button>
          {/* <button className="primary-btn" onClick={handleRemove}>
            Remover
          </button> */}
        </div>
      </div>
    </div>
  );
};
