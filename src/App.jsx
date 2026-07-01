import Features from "./components/Features.jsx";
import Landing from "./components/Landing.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Models from "./pages/Models.jsx";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />}  />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
