import logo from './logo.svg';
import Browse from './Browse';
import Delete from './Delete';
import Add from './Add';
import Update from './Update';
import About from './About';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;