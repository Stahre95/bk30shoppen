import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home/Home';
import KontaktaOss from './components/kontakta-oss/kontaktaOss';
import Main from './components/Main/Main';

// data information
import data from "../src/assets/json/data.json"





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="klader" element={<Main data={data[0]} name="klader"/>} />
            <Route path="souvenir" element={<Main data={data[0]} name="souvenir" />} />
            <Route path="ovrigt" element={<Main data={data[0]} name="ovrigt" />} />
            <Route path="kontakta-oss" element={<KontaktaOss />} />
        </Routes>
    </Router>
    </>      
    
  );
}

export default App;
