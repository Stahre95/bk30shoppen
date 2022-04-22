import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Klader from './components/Kläder/Klader';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="klader" element={<Klader />} />
            <Route path="souvenir" element={<Klader />} />
            <Route path="ovrigt" element={<Klader />} />
            <Route path="kontakta-oss" element={<Klader />} />
        </Routes>
    </Router>
    </>      
    
  );
}

export default App;
