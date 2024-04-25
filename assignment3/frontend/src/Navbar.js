import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand me-5" to="/">Catalog</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link me-3" aria-current="page" to="/" end>
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link me-3" to="/add">
                Add Product
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/update">
                Update
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link" to="/delete">
                Delete
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar