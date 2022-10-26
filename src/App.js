import "./App.css";
import ExplorerBar from "./Components/ExplorerBar";
import NavBar from "./Components/NavBar";
import { useLocation, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Projects, Skills } from "./Components/Pages";
function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <ExplorerBar pathname={pathname} />
      <div id="content-container">
        <NavBar />
        <div id="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects/:projectID" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
