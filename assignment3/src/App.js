import logo from './logo.svg';
import Browse from './Browse';
import Checkout from './Checkout';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
