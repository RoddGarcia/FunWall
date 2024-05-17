import React, { useState } from "react";
import { useFetch } from "use-http";
import "./Cadastrouser.css"; // Importe o arquivo de estilo correto
import { Link } from "react-router-dom";
import PostUserData from "../../PostUserData";

const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [preferencia, setPreferencia] = useState("comedia");
  const [userData, setUserData] = useState({});

  const baseURL = `http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/usuarios`;
  const { post, response } = useFetch(baseURL);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    setUserData({
      nome: username,
      senha: password,
      nascimento: data,
      cidade: cidade,
      estado: estado,
      interesse: preferencia,
    });

    console.log(userData);

    try {
      const result = await post("", userData);
      if (response.ok) {
        console.log("Cadastrado com sucesso:", result);
        window.location.href = "/login";
      } else {
        console.error("Erro ao cadastrar:", response.data);
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <main className="cadastro-container">
      <div className="cadastro-header">
        <h1 className="cadastro-title">Cadastre-se</h1>
        <p className="cadastro-description">Crie uma nova conta.</p>
      </div>
      <form className="cadastro-form" onSubmit={HandleSubmit}>
        <div className="input-container">
          <label htmlFor="username" className="visually-hidden">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="date" className="visually-hidden">
            Data de Nascimento
          </label>
          <input
            type="date"
            placeholder="Data"
            className="input-field"
            value={data}
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              const year = selectedDate.getFullYear();
              const month = String(selectedDate.getMonth() + 1).padStart(
                2,
                "0"
              );
              const day = String(selectedDate.getDate()).padStart(2, "0");
              const formattedDate = `${year}-${month}-${day}`;
              setData(formattedDate);
            }}
            required
          />
        </div>
        <div className="input-container">
          <label className="visually-hidden">Cidade</label>
          <input
            type="text"
            placeholder="Cidade"
            className="input-field"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label className="visually-hidden">Estado</label>
          <input
            type="text"
            placeholder="Estado"
            className="input-field"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="visually-hidden">
            Senha
          </label>
          <input
            type="password"
            placeholder="Senha"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="select">Preferência</label>
          <select
            name="select"
            value={preferencia}
            onChange={(e) => setPreferencia(e.target.value)}
          >
            <option value="comedia">Comédia</option>
            <option value="terror">Terror</option>
            <option value="romance">Romance</option>
            <option value="acao">Ação</option>
            <option value="Suspense">Suspense</option>
            <option value="Fantasia">Fantasia</option>
          </select>
        </div>
        <button type="submit" className="cadastro-button">
          Cadastrar
        </button>
      </form>
      <p className="login-text">
        Já tem uma conta? Faça <Link to="/login">login</Link>.
      </p>
    </main>
  );
};

export default Cadastro;
