import React from "react";
import LoGo from "../../assets/image.webp";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img className="header__logo" src={LoGo} alt="" />
      <h1>Xto10x Technologies Assignment</h1>
    </header>
  );
};

export default Header;