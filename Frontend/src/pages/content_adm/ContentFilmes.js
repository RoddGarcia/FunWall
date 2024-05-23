import { IoMdAddCircleOutline } from "react-icons/io";
import { useEffect } from "react";
import React, { useState } from "react";
import useFetch from "use-http";
import { AiFillMessage } from "react-icons/ai";
import { FaRegTrashAlt, FaEdit, FaSave } from "react-icons/fa";
import axios from "axios";
import { BiColor } from "react-icons/bi";

const ContentFilmes = () => {
  const baseURL =
    "http://ec2-3-82-238-164.compute-1.amazonaws.com:25000/filmes";
  const { get, response, del, put, error, loading } = useFetch(baseURL);
  const [preferencia, setPreferencia] = useState("Comédia");
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState("");
  const [titulo, setTitulo] = useState("");
  const [diretor, setDiretor] = useState("");
  const [anoLancamento, setAnoLancamento] = useState("");
  const [elenco, setElenco] = useState("");
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
    setTitulo("");
    setAnoLancamento("");
    setElenco("");
    setPais("");
    setDiretor("");
    setGenero("");
    setId("");
  };

  const salvarEdicao = async () => {
    const body = {
      titulo: titulo,
      diretor: diretor,
      genero: preferencia,
      pais: pais,
      elenco: elenco,
      anoLancamento: anoLancamento,
      // avatar: avatar
    };

    try {
      if (id) {
        await axios.put(`${baseURL}/${id}`, body);
        alert("Filme atualizado com sucesso.");
      } else {
        // Otherwise, create a new movie
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

    setTitulo(e.titulo);
    setAnoLancamento(e.anoLancamento);
    setElenco(e.elenco);
    setPais(e.pais);
    setDiretor(e.diretor);
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
            name="titulo"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <input
            type="date"
            name="ano"
            placeholder="Ano de Lançamento"
            value={anoLancamento}
            onChange={(e) => setAnoLancamento(e.target.value)}
            required
          />
          <input
            type="text"
            name="elenco"
            placeholder="Elenco"
            value={elenco}
            onChange={(e) => setElenco(e.target.value)}
            required
          />
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
          <input
            type="text"
            name="diretor"
            placeholder="Diretor"
            value={diretor}
            onChange={(e) => setDiretor(e.target.value)}
            required
          />
          {/* <input
            type="text"
            name="genero"
            placeholder="Gênero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          /> */}
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
            <th>Título</th>
            <th>Ano</th>
            <th>Diretor</th>
            <th>Gênero</th>
            <th>Ações</th>
          </tr>
        </thead>
        {movies.map((m, index) => (
          <tr key={m.id}>
            <td>{m.titulo}</td>
            <td>{m.anoLancamento}</td>
            <td>{m.diretor}</td>
            <td>{m.genero}</td>
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
export default ContentFilmes;
