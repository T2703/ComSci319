import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Add() {
    const [formData, setFormData] = useState({
        id: 3,
        title: '',
        description: '',
        price: '',
        category: '',
        rating: {
            rate: '',
            count: '',
        },
        image: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch('http://localhost:5000/createProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log("Response");
            if (response.ok) {
                console.log("Sucess");
                alert('Product added successfully!');
                navigate('/');
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleTest = () => {
        console.log("SP");
    }

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Add new product</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter the title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter the description"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Enter the price"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                placeholder="Enter the category"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rate" className="form-label">Rate:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="rate"
                                name="rate"
                                value={formData.rating.rate}
                                onChange={handleChange}
                                placeholder="Enter the rate"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="count" className="form-label">Count:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="count"
                                name="count"
                                value={formData.rating.count}
                                onChange={handleChange}
                                placeholder="Enter the count"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Enter the image URL"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
