import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Update() {
    const navigate = useNavigate();
    const [productId, setProductId] = useState("");
    const [product, setProduct] = useState(null); 
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newRating, setNewRating] = useState('');
    const [newCount, setNewCount] = useState('');
    const [newImage, setNewImage] = useState('');

    const handleChange = (event) => {
        setProductId(event.target.value);
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setNewDescription(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setNewCategory(event.target.value);
    };

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value);
    };

    const handleRateChange = (event) => {
        setNewRating(event.target.value);
    };

    const handleCountChange = (event) => {
        setNewCount(event.target.value);
    };

    const handleImageChange = (event) => {
        setNewImage(event.target.value);
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
                title: newTitle || product.title,
                description: newDescription || product.description,
                category: newCategory || product.category,
                price: newPrice || product.price,
                rating: {
                    rate: newRating || product.rating.rate,
                    count: newCount || product.rating.count
                },
                image: newImage || product.image
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
        console.log(product); // Access the updated product state here
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
                            <label htmlFor="newTitle" className="form-label">
                                New Title:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="newTitle"
                                value={newTitle}
                                onChange={handleTitleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newDescription" className="form-label">
                                New Description:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="newDescription"
                                value={newDescription}
                                onChange={handleDescriptionChange}
                            />
                        </div>
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
                        <div className="mb-3">
                            <label htmlFor="newCategory" className="form-label">
                                New Category:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="newCategory"
                                value={newCategory}
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newRating" className="form-label">
                                New Rating:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="newRating"
                                value={newRating}
                                onChange={handleRateChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newCount" className="form-label">
                                New Count:
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="newCount"
                                value={newCount}
                                onChange={handleCountChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newImage" className="form-label">
                                New Image:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="newImage"
                                value={newImage}
                                onChange={handleImageChange}
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
