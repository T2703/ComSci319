import React, { useState, useEffect  } from 'react';
import products from './products.json';
import index from './index.css';
import {useNavigate} from 'react-router-dom';

function Browse({onSearchChange, filteredProducts, cart, addToCart, removeFromCart}) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/cart');
    };

    function howManyofThis(id) {
        let hmot = cart.filter((cartItem) => cartItem.id === id);
        return hmot.length;
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <input type="search" className="form-control search-input w-50" placeholder="Search" onChange={e => onSearchChange(e.target.value)} />
                        <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
                    </div>
                    <div className="row">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="col-md-6 mb-4 d-flex align-items-stretch">
                                <div className="card w-100 card-container">
                                    <img src={product.images[0]} className="card-img-top" alt={product.title} />
                                    <div className="card-body">
                                        <span className="price">${product.price}</span>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="desc-text">{product.description}</p>
                                        <div className="bottom-left">
                                            <div className="btn-group">
                                                <button className="btn btn-primary" onClick={() => addToCart(product)}>+</button>
                                                <button className="btn btn-secondary" onClick={() => removeFromCart(product)}>-</button>
                                            </div>
                                        </div>
                                        <div className="bottom-right">
                                            <span className="close"></span>{howManyofThis(product.id)}x
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