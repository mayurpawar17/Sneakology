
import "../assets/styles/Footer.css";
import Logo from "../assets/sneakology.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img className="logo" src={Logo} />

        <p className="logo-name">Sneakology</p>
      </div>
      <p className="tagline">
        Step Into the Culture – Where Sneakers Meet Storytelling at Sneakology
      </p>
      <p className="copyright">
        © 2025 Sneakology | Owned by <span>Mayur</span> | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
