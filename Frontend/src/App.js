import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { HomePage } from "./pages/home";
import MoviePage from "./pages/moviePages/MoviePage";
import UserPage from "./pages/userPages/UserPage";
import ContentAdm from "./pages/content_adm/ContentAdm";
import Login from "./pages/loginPage/Login";
import Cadastro from "./pages/loginPage/Cadastro";
import Obras from "./pages/fullContent/Obras";
import Pesquisa from "./pages/fullContent/Pesquisa";
import SeriePage from "./pages/seriePage/SeriePage";
import LivroPage from "./pages/home/livroPage/LivroPage";
import ContentFilmes from "./pages/content_adm/ContentFilmes";
import ContentSeries from "./pages/content_adm/ContentSeries";
import ContentLivros from "./pages/content_adm/ContentLivros";
import ContentUsers from "./pages/content_adm/ContentUsers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: "/filmes/:movieId",
      element: (
        <Layout>
          <MoviePage />
        </Layout>
      ),
    },
    {
      path: "*",
      element: (
        <Layout>
          <div className="error">
            <img src="../images/error.gif" />
            <h1 style={{ color: "white" }}>Ops, página não encontrada!</h1>
          </div>
        </Layout>
      ),
    },
    {
      path: "/pages/gerenciar",
      element: (
        <Layout>
          <ContentAdm />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/user/:userId",
      element: (
        <Layout>
          <UserPage />
        </Layout>
      ),
    },
    {
      path: "/filmes",
      element: (
        <Layout>
          <Obras tipo={"filmes"} />
        </Layout>
      ),
    },
    {
      path: "/series",
      element: (
        <Layout>
          <Obras tipo={"series"} />
        </Layout>
      ),
    },
    {
      path: "/livros",
      element: (
        <Layout>
          <Obras tipo={"livros"} />
        </Layout>
      ),
    },
    {
      path: "/livros/:livroId",
      element: (
        <Layout>
          <LivroPage />
        </Layout>
      ),
    },
    {
      path: "/pesquisa/:searchVar",
      element: (
        <Layout>
          <Pesquisa />
        </Layout>
      ),
    },
    {
      path: "/cadastro",
      element: (
        <Layout>
          <Cadastro />
        </Layout>
      ),
    },

    {
      path: "/series/:serieId",
      element: (
        <Layout>
          <SeriePage />
        </Layout>
      ),
    },
    {
      path: "/pages/gerenciar/livros",
      element: (
        <Layout>
           <ContentLivros />
        </Layout>
      ),
    },
    {
      path: "/pages/gerenciar/series",
      element: (
        <Layout>
           <ContentSeries />
        </Layout>
      ),
    },
    {
      path: "/pages/gerenciar/filmes",
      element: (
        <Layout>
           <ContentFilmes />
        </Layout>
      ),
    },
    {
      path: "/pages/gerenciar/usuarios",
      element: (
        <Layout>
           <ContentUsers />
        </Layout>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default App;
