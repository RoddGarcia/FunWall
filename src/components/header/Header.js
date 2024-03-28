import "./header.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const menuOptions = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];

  const handleCloseMenu = () => {
    console.log("Menu fechado");
  };

  return (
    <header>
      <div className="container navbar">
        <nav className="navbar">
          <div className="nav_left">
            <div className="logo">
              <img href={"./"} src={logo} alt="logo" />
            </div>
            <ul className="navbar">
              <div className="menuOptions">
                <Link to="/pages/Movie">Filmes</Link>
                <Link to="/pages/Movie">Séries</Link>
                <Link to="/pages/Book">Livros</Link>
              </div>
            </ul>
          </div>
          <div className="nav_right">
            <form className="search">
              <input type="text" placeholder="Search"></input>
            </form>

            {/* <MenuMobile options={menuOptions} onClose={handleCloseMenu} /> */}

            {/* <div className="language">
              <p>US</p>
              <p>ER</p>
            </div> */}
            <button className="login">Login</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
