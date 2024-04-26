import React from 'react';

function About() {
    return (
        <div className="container">
            <div className="card mt-3">
                <div className="card-body">
                    <div className="sub-container-custom">
                        <h3>Info: </h3>
                        <p>Welcome to our catalog manager project this is a MERN stack project utlizing those technologies. In this website, user can manage and view the products of the items.
                            Users can add products, view products, delete products, search for products, update products. We have designed this to be 
                            as user friendly and nice on the eyes for our users to make this website easy to understand and use. 
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3>Course Name: </h3>
                            <p>COM S 319</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3>Students Names: </h3>
                            <p>Tristan Nono</p>
                            <p>Joshua Gutierrez</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3>Emails: </h3>
                            <p>nt0307e@iastate.edu</p>
                            <p>josh1015@iastate.edu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3>Date: </h3>
                            <p>04/25/2024</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body text-center">
                            <h3>Professor's Name: </h3>
                            <p>Ali Jannesari</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
