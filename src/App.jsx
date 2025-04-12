import Header from "./components/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ShoesDetails from "./pages/ShoesDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/s/:id" element={<ShoesDetails />} />
      </Routes>
    </>
  );
};

export default App;
