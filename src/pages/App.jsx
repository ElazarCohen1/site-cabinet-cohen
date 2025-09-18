import NavbarMenu from "../components/NavBar";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Accueil";
import Cabinet from "./Cabinet";
import Honoraires from "./honoraires";
import Domaines from "./Domaines";
import MentionsLegales from "./MentionsLegales";
import ScrollToTop from "../components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavbarMenu />
        <div className=" ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/domaines" element={<Domaines />} />
            <Route path="/honoraires" element={<Honoraires />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
          </Routes>
        </div>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <h2> Cabinet Cohen</h2>
          <Link to="/mentionslegales" >Mentions legales </Link> |{" "}
          <p>© 2025 Cabinet Cohen. Tous droits réservés.</p>
          <p>Adresse: 26 rue Daubighy, 75017 Paris</p>
          <p>Email: avocat.cohen@gmail.com</p>
          <p>Téléphone: +33 1 23 45 67 89</p>
          
        </footer>
      </Router>
      
    </>
  );
}

export default App;