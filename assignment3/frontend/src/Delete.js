import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Delete() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const handleDelete = async (productId) => {
        try {
            await fetch(`http://localhost:5000/products/${productId}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(
                    { "id": productId}
                )
            });
            alert("Product deleted!");
            navigate('/');
            console.log("Deleted", productId);
            
        } catch (error) {
            console.error('ERROR:', error);
        }
    };

    const handleChange = (event) => {
        setProductId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleDelete(productId);
    };


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
                        <button type="submit" className="btn btn-primary">Delete</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Delete;
