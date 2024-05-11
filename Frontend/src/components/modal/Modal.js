import React, { useState, useEffect } from "react";
import "./Modal.css";
import { FiUsers } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { useCookies } from "react-cookie";
import useFetch from "use-http";

function Modal() {
  const [modal, setModal] = useState(false);
  const [cookies] = useCookies(["user"]);
  const [inputText, setInputText] = useState("");
  const [friendsList, setFriendsList] = useState([]);
  const [friends, setFriends] = useState([]);

  const baseURL = "http://localhost:8080/amizade";
  const { get, response } = useFetch(baseURL);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    // Carrega a lista de amigos
    const fetchFriends = async () => {
      try {
        const data = await get();

        const userFriends = data.filter((item) => {
          return (
            item.user1_id.id === cookies.user.id ||
            item.user2_id.id === cookies.user.id
          );
        });

        const friendNames = [];

        userFriends.forEach((friendship) => {
          if (friendship.user1_id.nome !== cookies.user.nome) {
            friendNames.push(friendship.user1_id.nome);
          }
          if (friendship.user2_id.nome !== cookies.user.nome) {
            friendNames.push(friendship.user2_id.nome);
          }
        });

        setFriends(friendNames);
      } catch (error) {
        console.error("Erro ao carregar lista de amigos:", error);
      }
    };

    fetchFriends();
  }, [cookies.user]);

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const filteredFriends = friendsList.filter((friend) =>
    friend.nome.toLowerCase().includes(inputText.toLowerCase())
  );

  return (
    <>
      {/* Serve pra ver se está logado*/}
      {cookies.user && (
        <div className="btn-modal">
          <button className="btn-modal" onClick={toggleModal}>
            <FiUsers />
          </button>
        </div>
      )}

      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="search-header">
              <div className="heading">Procurar</div>
              <div className="search">
                <BsSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Nome do amigo"
                  value={inputText}
                  onChange={inputHandler}
                />
              </div>
            </div>
            <div className="friends-main">
              {friendsList ? (
                friends.map((friend) => (
                  <div className="friends-row" key={friend.nome}>
                    <div className="friends-info">
                      <img src="#" alt="foto user" />
                      <a href={`/user/${friend}`}>{friend}</a>
                    </div>
                    <button className="follow">Follow</button>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <hr />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
