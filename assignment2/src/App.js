import logo from './logo.svg';
import Browse from './Browse';
import './App.css';
import Cart from './Cart';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
