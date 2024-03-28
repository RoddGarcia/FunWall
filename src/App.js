import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { HomePage } from "./pages/home";
import MoviePage from "./pages/moviePages/MoviePage";

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
      path: "/movie/:movieId",
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
          {/* <ErrorPage /> */}
          <h1>Ops, página não encontrada!</h1>
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
