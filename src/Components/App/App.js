import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Router from "../Router";

function App() {
  return (
    <div className="App column">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
