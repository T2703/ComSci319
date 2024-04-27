import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';

function Add() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/createProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Product added successfully!');
                navigate('/');
            } else {
                alert('Failed to add product. Please try again later.');
            }
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Add new product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">Id:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id"
                                {...register("id", { required: true })}
                                placeholder="Enter the id"
                            />
                            {errors.title && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                {...register("title", { required: true })}
                                placeholder="Enter the title"
                            />
                            {errors.title && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                {...register("description", { required: true })}
                                placeholder="Enter the description"
                            />
                            {errors.description && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                id="price"
                                {...register("price", { required: true, valueAsNumber: true })}
                                placeholder="Enter the price"
                            />
                            {errors.price && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="category"
                                {...register("category", { required: true })}
                                placeholder="Enter the category"
                            />
                            {errors.category && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rate" className="form-label">Rate:</label>
                            <input
                                type="number"
                                step="0.01"
                                className="form-control"
                                id="rate"
                                {...register("rating.rate", { required: true, valueAsNumber: true })}
                                placeholder="Enter the rate"
                            />
                            {errors.rating?.rate && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="count" className="form-label">Count:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="count"
                                {...register("rating.count", { required: true, valueAsNumber: true })}
                                placeholder="Enter the count"
                            />
                            {errors.rating?.count && <p className='text-danger'>This field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image"
                                {...register("image", { required: true })}
                                placeholder="Enter the image URL"
                            />
                            {errors.image && <p className='text-danger'>This field is required</p>}
                        </div>
                        <button type="submit" className="btn btn-primary mb-5">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add;
