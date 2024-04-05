import logo from './logo.svg';
import Browse from './Browse';
import './App.css';
import Cart from './Cart';
import Confirmation from './Confirmation'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
