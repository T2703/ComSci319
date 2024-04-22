import React from 'react';

function Add() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Add new product</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
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
                                placeholder="Enter the description"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                placeholder="Enter the price"
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
