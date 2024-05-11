import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./userPage.css";
import { useCookies } from "react-cookie";
import { usuarios } from "../../mocks/dummyData";
import GetUsersData from "../GetUsersData";
import { useFetch } from "use-http";
import GetData from "../GetMovieData";

const UserPage = () => {
  const { userId } = useParams();
  const [cookies] = useCookies(["user"]);
  const usuarios = GetUsersData();
  const filmes = GetData("filmes");
  const [getUserInfo, setUserInfo] = useState(null);

  const userVer = cookies.user;
  const user = usuarios.find((user) => user.nome === userId);
  const profileLog = userVer && userVer.username === userId;

  const [popupVisible, setPopupVisible] = useState(false);
  const [editing, setEditing] = useState(false); // State for tracking edit mode
  const [newAvatar, setNewAvatar] = useState(null); // State to hold new avatar image

  const baseURL = "http://localhost:8080/avaliacoes";
  const { get, response } = useFetch(baseURL);
  const [aval, setAval] = useState([]);

  const findUserById = (usuarios, id) => {
    return usuarios.find((usuario) => usuario.nome === parseInt(id));
  };

  const findAval = (tipo) => {
    console.log(GetData(tipo));
  };

  useEffect(() => {
    if (usuarios) {
      const user = findUserById(usuarios, userId);
      if (user) {
        setUserInfo(user);
      }
    }
  }, [userId, usuarios]);

  const buscar = async () => {
    try {
      const resp = await get();
      if (response.ok) {
        console.log(resp);
        const filteredData = resp.filter(
          (item) => item.user_id.nome === userId
        );

        setAval(filteredData);
        console.log("Filtered: ", filteredData);
      } else {
        setAval([]);
      }
    } catch (error) {
      console.error("Error:", error);
      setAval([]);
    }
  };
  useEffect(() => {
    buscar();
  }, []);

  const adicionarAmigo = async () => {
    alert("Amigo adicionado");
  };

  const countAvaliacoes = aval.length;

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setNewAvatar(file);
  };

  const userInfo = editing ? (
    <form>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <input type="username" placeholder="Novo usuário" />
      <input type="password" placeholder="Nova Senha" />
    </form>
  ) : (
    <>
      <img src={""} alt="User Avatar" className="user-avatar" />
      <h1>{userId}</h1>
    </>
  );

  const profileButtons = profileLog ? (
    editing ? (
      <div className="edit-profile-button">
        <button onClick={toggleEditing}>Cancelar</button>
        <button>Salvar</button>
      </div>
    ) : (
      <div className="edit-profile-button">
        <button onClick={toggleEditing}>Editar Perfil</button>
      </div>
    )
  ) : null;

  return (
    <>
      <div className="user-info-container">{userInfo}</div>
      <div className="user-data-container">
        <div className="user-data">
          <h2 className="above-followers">{0}</h2>
          <p>Seguidores</p>
        </div>
        <div className="user-data">
          <h2 className="above-reviews">{countAvaliacoes}</h2>
          <p>Avaliações</p>
        </div>
      </div>
      {cookies.user.nome !== userId && (
        <div className="user-data-container">
          <button onClick={adicionarAmigo}>Adicionar amigo</button>
        </div>
      )}
      {profileButtons}
      <div className="section">
        <h2>Obras Avaliadas</h2>
        <div className="movies-info">
          <div className="mudar_variavel_pf">
            {aval.map((movie, index) => (
              <div className="socorro" key={index}>
                <h3>{movie.obra}</h3>
                <p>"{movie.texto}"</p>
                <p>Nota: {movie.nota}</p>
                <p>Likes: {movie.numero_likes}</p>
                {/* {movie.user_id.nome === userId ? "" : <p>dar like</p>} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
