import React from "react";
import "../components/Header.css";
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

      {/* <h1 className="animate__animated animate__backOutUp">
        An animated element
      </h1> */}

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
