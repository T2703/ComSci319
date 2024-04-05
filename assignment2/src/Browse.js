import React, { useState, useEffect  } from 'react';
import products from './products.json';
import index from './index.css';

function Browse() {
    const [productsCategory, setProductsCategory] = useState(products);
    const [searchInput, setSearchInput] = useState('');
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        const results = products.filter(eachProduct => {
            if (e.target.value === "") {
                return true;
            }
            return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setProductsCategory(results);
        console.log(productsCategory);
    }

    const addToCart = (el) => {
        setCart([...cart, el]);
    }

    const removeFromCart = (el) => {
        let itemFound = false;
        const updatedCart = cart.filter((cartItem) => {
            if (cartItem.id === el.id && !itemFound) {
                itemFound = true;
                return false;
            }
            return true;
        });
        if (itemFound) {
            setCart(updatedCart);
        }
    }

    function howManyofThis(id) {
        let hmot = cart.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <input type="search" className="form-control search-input w-50" placeholder="Search" value={searchInput} onChange={handleChange} />
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                    <div className="row">
                        {productsCategory.map((el) => (
                            <div key={el.id} className="col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card w-100 card-container">
                                    <img src={el.images[0]} className="card-img-top" alt={el.title} />
                                    <div className="card-body">
                                        <span className="price">${el.price}</span>
                                        <h5 className="card-title">{el.title}</h5>
                                        <p className="desc-text">{el.description}</p>
                                        <div className="bottom-left">
                                            <div className="btn-group">
                                                <button className="btn btn-primary" onClick={() => addToCart(el)}>+</button>
                                                <button className="btn btn-secondary" onClick={() => removeFromCart(el)}>-</button>
                                            </div>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="close"></span>{howManyofThis(el.id)}x
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Browse;