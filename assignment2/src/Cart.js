import React from 'react'
import { FaArrowLeft, FaCreditCard, FaShoppingCart } from 'react-icons/fa'
import { UsaStates } from 'usa-states';
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

function Cart({cart, handlePayment}) {
    const states = new UsaStates();

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    const stateOptions = states.states.map(state => (
        <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
    ));

    const handleReturn = () => {
        navigate('/');
    };

    const calculateTotalPrice = () => {
        let total = 0;
        cart.map(({price, quantity}) => {
            total += price * quantity
        })
        return total;
    };

    const onSubmit = data => {
        handlePayment(data);
        navigate('/confirmation');
    };

    return (
    <div>
        {/* Header for the Cart page */}
        <header>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <button className='btn btn-dark' onClick={handleReturn}>
                        <FaArrowLeft /> Return
                    </button>
                </div>
            </nav>
        </header>

        {/* Cart Details */}
        <div className="container mt-4">
            <div className="row text-center mb-2">
                <div className="col-4"><strong>Item</strong></div>
                <div className="col-4"><strong>Quantity</strong></div>
                <div className="col-4"><strong>Price</strong></div>
            </div>

            {cart.map((item) => (
            <div key={item.id} className="row mb-2">
                <div className="col-4 d-flex align-items-center">
                <img src={item.images[0]} alt={item.title} className='cart-image' />
                    <p className='text-start'>{item.title}</p>
                </div>
                <div className="col-4 text-center d-flex justify-content-center align-items-center">{item.quantity}</div>
                <div className="col-4 text-center d-flex justify-content-center align-items-center">${item.price * item.quantity}</div>
            </div>
            ))}

            <div className="row text-center mt-4">
            <div className="col-4"><strong>Total</strong></div>
            <div className="col-4"></div>
            <div className="col-4"><strong>${calculateTotalPrice()}</strong></div>
            </div>
        </div>

        {/* Payment Information Section */}
        <div className="container mt-4">
            <h2>Payment Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Row 1: Full Name and Email */}
                <div className="row mb-3">
                    <div className="col">
                        <input {...register("fullName", { required: "Full name is required" })} type="text" className="form-control" placeholder="Full Name" />
                        {errors.fullName && <p className="text-danger text-start">*{errors.fullName.message}</p>}
                    </div>
                    <div className="col">
                        <input {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Entered value does not match email format"
                            }})} 
                            type="email" className="form-control" placeholder="Email" />
                        {errors.email && <p className="text-danger text-start">*{errors.email.message}</p>}
                    </div>
                </div>

                {/* Row 2: Credit Card */}
                <div className="row mb-3">
                    <div className="col">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1"><FaCreditCard /></span>
                            <input 
                                {...register("creditCard", {
                                    required: "Credit card number is required",
                                    pattern: {
                                        value: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/,
                                        message: "Invalid credit card number"
                                    }
                                })}
                                type="text" className="form-control" placeholder="xxxx-xxxx-xxxx-xxxx" aria-label="Credit Card Number" aria-describedby="basic-addon1" />
                        </div>
                        {errors.creditCard && <p className="text-danger text-start">*{errors.creditCard.message}</p>}
                    </div>
                </div>

                {/* Row 3 & 4: Address & Address2 */}
                <div className="row mb-3">
                    <div className="col">
                        <input {...register("address", { required: "Address is required" })} type="text" className="form-control" placeholder="Address" />
                        {errors.address && <p className="text-danger text-start">*{errors.address.message}</p>}
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Address 2" />
                    </div>
                </div>

                {/* Row 5: City, State, Zip */}
                <div className="row mb-3">
                    <div className="col">
                        <input {...register("city", { required: "City is required" })} type="text" className="form-control" placeholder="City" />
                        {errors.city && <p className="text-danger text-start">*{errors.city.message}</p>}
                    </div>
                    <div className="col">
                        <select {...register("state", { required: "Please select a state" })} className="form-select">
                            <option value="">State</option>
                            {stateOptions}
                        </select>
                        {errors.state && <p className="text-danger text-start">* {errors.state.message}</p>}
                    </div>
                    <div className="col">
                        <input
                            {...register("zipCode", {
                                required: "ZIP Code is required",
                                pattern: {
                                    value: /^\d{5}$/,
                                    message: "Invalid ZIP Code, must be 5 digits"
                                }
                            })}
                            type="text" className="form-control" placeholder="Zip" />
                        {errors.zipCode && <p className="text-danger text-start">*{errors.zipCode.message}</p>}
                    </div>
                </div>

                {/* Row 6: Checkbox */}
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-check d-flex">
                            <input
                                {...register("checkMeOut", { required: "You must check this box to proceed" })}
                                type="checkbox"
                                className="form-check-input me-2"
                                id="checkMeOut"
                            />
                            <label className="form-check-label" htmlFor="checkMeOut">Check me out</label>
                        </div>
                        {errors.checkMeOut && <p className="text-danger">* {errors.checkMeOut.message}</p>}
                    </div>
                </div>

                {/* Row 7: Submit Button */}
                <div className="row mb-3">
                    <div className="col d-flex">
                        <button type="submit" className="btn btn-success">
                            <FaShoppingCart /> Order
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
};

export default Cart