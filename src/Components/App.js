import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Logements from "../Pages/Logements";
import "../styles/App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/Error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
