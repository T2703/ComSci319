import logo from './logo.svg';
import Browse from './Browse';
import './App.css';
import Cart from './Cart';
import Confirmation from './Confirmation'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useMemo, useState } from 'react';
import items from './products.json';

function App() {
  const [products, setProducts] = useState(items);
  const [inputSearch, setInputSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState({});

  const handleSearchChange = (term) => {
    setInputSearch(term);
  };

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(inputSearch.toLowerCase());
  });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    let itemFound = false;
        const updatedCart = cart.filter((cartItem) => {
            if (cartItem.id === item.id && !itemFound) {
                itemFound = true;
                return false;
            }
            return true;
        });

        if (itemFound) {
            setCart(updatedCart);
        }
  };

  const aggregatedCart = useMemo(() => {
    return cart.reduce((acc, item) => {
        const existingItem = acc.find(accItem => accItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            acc.push({ ...item, quantity: 1 });
        }
        return acc;
    }, []);
}, [cart]);
  
  const handlePayment = (paymentInfo) => {
    setPayment(paymentInfo);
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse onSearchChange={handleSearchChange} filteredProducts={filteredProducts} cart={cart} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} currentCart={aggregatedCart} />} />
        <Route path="/cart" element={<Cart cart={aggregatedCart} handlePayment={handlePayment} />} />
        <Route path="/confirmation" element={<Confirmation cart={aggregatedCart} payment={payment} clearCart={clearCart} />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
