import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import MechBay from './pages/Mechbay';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mechbay" element={<MechBay />} />
      </Routes>
  );
}

export default App;
