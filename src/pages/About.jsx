import "../assets/styles/About.css";
import Logo from "../assets/sneakology.svg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-title-container">
          <p className="about-title">About</p>
          <img className="about-logo" src={Logo} />
          <p className="about-title">Sneakology</p>
        </div>

        <div className="des-container">
          <p className="description">
            Welcome to Sneakology – your ultimate hub for all things sneakers!
            Founded by Mayur, a passionate sneaker enthusiast, Sneakology is
            dedicated to celebrating sneaker culture, trends, and history.
            Whether you're a seasoned collector or just starting your sneaker
            journey, we’ve got you covered with the latest drops, styling tips,
            and in-depth stories behind iconic kicks.
          </p>
        </div>

        <h5>
          Note: Sneakology is currently not a responsive web app, but we’re
          working hard to make it fully responsive in the near future. Stay
          tuned for updates!
        </h5>
      </div>
    </>
  );
};

export default About;
