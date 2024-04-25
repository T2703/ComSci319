import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Browse() {
   const [data, setData] = useState([]);
   const [searchId, setSearchId] = useState("");
   const navigate = useNavigate();

   const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:5000/products'); 
        const data = await response.json();
        setData(data.products || []); 
        console.log(data);
    } catch (error) {
        console.error('ERROR:', error);
    } 
  };
   useEffect(() => {
      fetchData(setData);
    }, []);

  const fetechDataByID = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`);
      const product = await response.json();
      console.log(product);
    } catch(error) {
      console.error('ERROR:', error);
    }
  }

  const handleDelete = () => {
      navigate('/Delete');
  }

  const handleAdd = () => {
      navigate('/Add');
  }

  const handleChange = (event) => {
    fetechDataByID(searchId);
    setSearchId(event.target.value);
  };

  const filteredData = data.filter(item => item.id.toString().includes(searchId));

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-5">
                        <input
                            type="search"
                            className="form-control search-input offset-md-10"
                            placeholder="Search by ID"
                            style={{ maxWidth: "200px", marginTop: "10px" }}
                            value={searchId}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                        <button className="btn btn-primary" onClick={handleAdd}>Add</button>
                        <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredData.map((item) => (
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
                                <p className="card-text">{item.rating.count}</p>
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