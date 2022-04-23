import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Klader from './components/Kläder/Klader';
import Souvenir from './components/Souvenir/Souvenir';
import Ovrigt from './components/Övrigt/Ovrigt';
import KontaktaOss from './components/kontakta-oss/KontaktaOss';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="klader" element={<Klader />} />
            <Route path="souvenir" element={<Souvenir />} />
            <Route path="ovrigt" element={<Ovrigt />} />
            <Route path="kontakta-oss" element={<KontaktaOss />} />
        </Routes>
    </Router>
    </>      
    
  );
}

export default App;
