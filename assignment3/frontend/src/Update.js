import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Update() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null); 
    const [newPrice, setNewPrice] = useState('');

    const handleChange = (event) => {
        setProductId(event.target.value);
    };

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetechDataByID(productId);
    };

    const fetechDataByID = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/products/${productId}`);
            const productData = await response.json();
            setProduct(productData.product);
        } catch(error) {
            console.error('ERROR:', error);
        }
    }

    const handleUpdateProduct = async () => {
        try {
            const updatedProduct = {
                id: productId,
                title: product.title,
                description: product.description,
                category: product.category,
                price: newPrice || product.price,
                rating: {
                    rate: product.rating.rate,
                    count: product.rating.count
                },
                image: product.image
            };

            await fetch(`http://localhost:5000/products/${productId}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updatedProduct),
            });
            alert("Product Updated!");
            navigate('/');
        } catch (error) {
            console.error('ERROR:', error);
        }
    };

    useEffect(() => {
    }, [product]); // This will run whenever the product state change

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Update Product</h2>
                    <h2 className="text-center">Enter the product ID</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productId" className="form-label">
                                ID:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="productId"
                                value={productId}
                                placeholder="Enter the ID"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Find Product
                        </button>
                    </form>
                </div>
                {product && (
                    <div className="col-md-6">
                        <h3>Product Information</h3>
                        <img
                                src={product.image}
                                className="card-img-top img-fluid"
                                alt={product.title}
                                style={{ height: "200px", objectFit: "contain" }}
                            />
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Count: {product.rating.count}</p>
                    
                        <div className="mb-3">
                            <label htmlFor="newPrice" className="form-label">
                                New Price:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="newPrice"
                                value={newPrice}
                                onChange={handlePriceChange}
                            />
                        </div>
                        
                        <button
                            className="btn btn-primary"
                            onClick={handleUpdateProduct}
                        >
                            Update Product
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Update;