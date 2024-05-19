import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";
import React, { useState } from "react";
import useFetch from "use-http";
import { AiFillMessage } from "react-icons/ai";
import { FaRegTrashAlt, FaEdit, FaSave } from "react-icons/fa";
import axios from "axios";
import { BiColor } from "react-icons/bi";

const ContentUsers = () => {
  const baseURL =
    "http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/usuarios";
  const { get, response, del, put, error, loading } = useFetch(baseURL);
  const [preferencia, setPreferencia] = useState("");
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cidade, setCidade] = useState("");
  const [pais, setPais] = useState("");
  const [genero, setGenero] = useState("");
  const [editandoItem, setEditandoItem] = useState(null);

  const buscar = async () => {
    const resp = await get();

    if (response.ok) {
      setMovies(resp);
    } else {
      setMovies([]);
    }
  };

  const cancelarEdicao = () => {
    setNome("");
    setNascimento("");
    setCidade("");
    setPais("");
    setEstado("");
    setGenero("");
    setId("");
  };

  const salvarEdicao = async () => {
    const body = {
      nome: nome,
      estado: estado,
      senha: senha,
      genero: preferencia,
      pais: pais,
      cidade: cidade,
      nascimento: nascimento,
      // avatar: avatar
    };

    try {
      if (id) {
        await axios.put(`${baseURL}/${id}`, body);
        alert("Filme atualizado com sucesso.");
      } else {
        await axios.post(baseURL, body);
        alert("Filme adicionado com sucesso.");
      }
      buscar();
      cancelarEdicao();
    } catch (error) {
      console.error(error.response.data);
    }
    window.location.reload();
  };

  const removerItem = async (e) => {
    if (window.confirm("Deseja realmente apagar " + e.titulo + "?")) {
      await del("/" + e.id)
        .then(() => alert("Filme " + e.titulo + " eliminado."))
        .then(() => window.location.reload());
    }
  };

  const editarItem = async (e) => {
    cancelarEdicao();

    setNome(e.nome);
    setNascimento(e.nascimento);
    setCidade(e.cidade);
    setSenha(e.senha);
    setPais(e.pais);
    setEstado(e.estado);
    setGenero(e.genero);
    setId(e.id);
  };

  useEffect(() => {
    buscar();
  }, []);

  return (
    <>
      <div className="create-item">
        <div className="inputNovoItem">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            name="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <input
            type="date"
            name="nascimento"
            placeholder="Ano de Nascimento"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            required
          />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          />
          <select
            name="select"
            value={preferencia}
            onChange={(e) => setPreferencia(e.target.value)}
          >
            <option value="Comédia">Comédia</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
            <option value="Ação">Ação</option>
            <option value="Suspense">Suspense</option>
            <option value="Fantasia">Fantasia</option>
          </select>
          {/* <input
            type="text"
            name="description"
            value={id}
            placeholder="Descrição"
            required
          /> */}
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {id}
          </div>
        </div>

        <div className="img-side">
          <img alt="imagem" />
          <input type="file" accept=".jpg" required />
          <button onClick={() => salvarEdicao()}>Enviar</button>
        </div>
      </div>

      {/* <button className="add-btn" onClick={adicionarItem}>
        <IoMdAddCircleOutline color="white" size={22} />
      </button> */}
      <table className="tabela-conteudo">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ano de Nascimento</th>
            <th>Cidade - Estado</th>
            <th>Interesse</th>
            <th>Ações</th>
          </tr>
        </thead>
        {movies.map((m, index) => (
          <tr key={m.id}>
            <td>{m.nome}</td>
            <td>{m.nascimento}</td>
            <td>
              {m.cidade} - {m.estado}
            </td>
            <td>{m.interesse}</td>
            <td className="act-bottons">
              {editandoItem === index ? (
                <>
                  {/* passar o id pelo parametro */}
                  <button onClick={() => salvarEdicao()}>
                    <FaSave />
                  </button>
                  <button onClick={() => cancelarEdicao()}>Cancelar</button>
                </>
              ) : (
                <>
                  <button onClick={() => removerItem(m)}>
                    <FaRegTrashAlt />
                  </button>
                  <button onClick={() => editarItem(m)}>
                    <FaEdit />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default ContentUsers;
