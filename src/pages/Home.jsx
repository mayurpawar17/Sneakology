import shoesBg from "../assets/shoes_bg.jpg";
import ShoesCollection from "../components/ShoesCollection";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";


const Home = () => {
  return (
    <>
      <div className="container">
        <img className="shoes-bg" src={shoesBg} loading="lazy" />
      </div>
      <ShoesCollection />
      <Footer />
    </>
  );
};

export default Home;
