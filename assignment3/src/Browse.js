import { useState, useEffect } from "react";


function Browse() {
   // Test
   const [data, setData] = useState([])

   // Testing 
   const fetchData = async (setData) => {
      try {
         const response = await fetch('https://fakestoreapi.com/products');
         const data = await response.json();
         setData(data || []);
      } 
      catch (error) {
         console.error('ERROR:', error);
      } 
   };

   useEffect(() => {
      fetchData(setData);
    }, []);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <input
                type="search"
                className="form-control search-input w-50"
                placeholder="Search"
              />
              <button className="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.rating.rate}</p>
                    <button className="btn btn-primary">+</button>
                    <button className="btn btn-primary">-</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Browse;