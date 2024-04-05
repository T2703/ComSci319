import React, { useState, useEffect  } from 'react';

function Confirmation() {

    return (
        <div className="container">
            <div className="row justify-content-center my-5 ">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body text-center">
                            <h1 className="card-title">Summary:</h1>
                            <p className="card-text border-bottom">Name: Tristan Nono</p>
                            <p className="card-text border-bottom">Email: trist020703@yahoo.com</p>
                            <p className="card-text border-bottom">Credit Card: 1234</p>
                            <p className="card-text border-bottom">Address: 123 North Street</p>
                            <p className="card-text border-bottom">Chicago, Illinois, 60006</p>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
