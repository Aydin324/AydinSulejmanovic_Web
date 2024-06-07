import "./App.css";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Write from "./pages/Write.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Header />
      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
