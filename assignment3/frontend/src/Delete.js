import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Delete() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null); 

    const handleChange = (event) => {
        setProductId(event.target.value);
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

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/products/${productId}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ "id": productId })
            });
            alert("Product deleted!");
            navigate('/');
        } catch (error) {
            console.error('ERROR:', error);
        }
    };

    useEffect(() => {
        console.log(product); // Access the updated product state here
    }, [product]); // This will run whenever the product state change

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Delete Product</h2>
                    <h2 className="text-center">Enter in the product ID</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productId" className="form-label">ID:</label>
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
                        <button type="submit" className="btn btn-primary">Find Product</button>
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
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Count: {product.rating.count}</p>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete Product</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Delete;
