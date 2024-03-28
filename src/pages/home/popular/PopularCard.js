import React, { useState } from "react";
import "./Popup.css";
import Popup from "./Popup";
import { Link } from "react-router-dom";

export const PopularCard = ({ item: { _id, avatar, name } }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <Link to={"/movie/" + _id} className="MovieBox">
        <div className="img">
          <img src={avatar} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
        </div>
      </Link>
      {/* 
      <Popup trigger={isPopupOpen} onClose={togglePopup}>
        <h1>asd</h1>
      </Popup> */}
    </>
  );
};
