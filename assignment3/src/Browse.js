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
              <div className="input-group mb-5">
                <input
                  type="search"
                  className="form-control search-input offset-md-10"
                  placeholder="Search"
                  style={{ maxWidth: "200px", marginTop: "10px" }}
                />
              </div>
              <div className="col d-flex justify-content-end align-items-center">
                <button className="btn btn-primary">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {data.map((item) => (
              <div key={item.id} className="col">
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top img-fluid"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.rating.rate}</p>
                    <div className="mt-auto">
                      <button className="btn btn-primary">+</button>
                      <button className="btn btn-primary">-</button>
                    </div>
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