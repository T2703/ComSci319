import {useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

function Confirmation({cart, payment, clearCart}) {
    const navigate = useNavigate();

    const handleReturn = () => {
        clearCart();
        navigate('/');
    };

    const calculateTotalPrice = () => {
        let total = 0;
        cart.map(({price, quantity}) => {
            total += price * quantity
        })
        return total;
    };

    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className="container-fluid">
                        <button className='btn btn-dark' onClick={handleReturn}>
                            <FaArrowLeft /> Return
                        </button>
                    </div>
                </nav>

                <h3 className='text-center'>Order Details</h3>
                <h4 className='text-center'>Thank you for your order!</h4>
            </header>

            {/* Cart Details */}
            <div className='payment-container'>
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
                        <div className="col-4 d-flex align-items-center justify-content-center">{item.quantity}</div>
                        <div className="col-4 d-flex align-items-center justify-content-center">${item.quantity * item.price}</div>
                    </div>
                ))}

                <div className="row text-center mt-4">
                    <div className="col-4"><strong>Total</strong></div>
                    <div className="col-4"></div>
                    <div className="col-4"><strong>${calculateTotalPrice()}</strong></div>
                </div>
            </div>

            <div className="footer d-flex justify-content-center align-items-center text-center bg-dark text-white m-4 p-2">
                <div className="container-fluid">
                    <div className="row mt-3">
                        <div className="col">
                            <p className='p-0 m-0'><strong>Name:</strong> <br />{payment.fullName}</p>
                        </div>
                        <div className="col p-0 m-0">
                            <p><strong>Email:</strong> <br /> {payment.email}</p>
                        </div>
                        <div className="col p-0 m-0">
                            <p><strong>Credit Card:</strong> <br /> {payment.creditCard}</p>
                        </div>
                        <div className="col p-0 m-0">
                            <p><strong>Address:</strong> <br /> {payment.address}</p>
                        </div>
                        <div className="col p-0 m-0">
                            <p><strong>City, State, ZIP:</strong> <br /> {payment.city}, {payment.state}, {payment.zipCode}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Confirmation;
