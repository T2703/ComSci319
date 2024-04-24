import React from 'react';

function Delete() {
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">Delete Product</h2>
                    <h2 className="text-center">Enter in the product ID</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">ID:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                placeholder="Enter the ID"
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
