import React from "react";
import "../assets/styles/Header.css";
import { Button, Card, Image } from "antd";
import Logo from "../assets/sneakology.svg";
import "animate.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} />

        <p className="logo-name">Sneakology</p>
      </div>

  

      <nav>
        <a href="/">
          <Button color="default" variant="text">
            <p>Home</p>
          </Button>
        </a>
        <a href="/about">
          <Button color="default" variant="text">
            <p>About</p>
          </Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
