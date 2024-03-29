import React, { useState } from "react";
import "./MenuMobile.css"; // Estilo para o menu (veja abaixo)

const MenuMobile = ({ options, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Lógica para lidar com a seleção da opção
    console.log(`Você selecionou: ${option}`);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-btn" onClick={handleToggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className="menu-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="menu-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
