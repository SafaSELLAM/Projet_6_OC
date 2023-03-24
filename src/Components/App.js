import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Logements from "../Pages/Logements";
import "../styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
