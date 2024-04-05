import React, { useState, useEffect  } from 'react';

function Confirmation() {

    return (
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Summary:</h1>
                            <p className="card-text">Tristan Nono</p>
                            <p className="card-text">trist020703@yahoo.com</p>
                            <p className="card-text">1234</p>
                            <p className="card-text">123 North Street</p>
                            <p className="card-text">Chicago, Illinois, 60006</p>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
