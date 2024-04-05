import products from './products.json'
import {useNavigate} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

function Confirmation() {
    const cartItems = products;
    const navigate = useNavigate();

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div className="">
            
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

                {cartItems.map((item) => (
                    <div key={item.id} className="row mb-2">
                        <div className="col-4 d-flex align-items-center">
                            <img src={item.images[0]} alt={item.title} className='cart-image' />
                            <p className='text-start'>{item.title}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">3</div>
                        <div className="col-4 d-flex align-items-center justify-content-center">${item.price}</div>
                    </div>
                ))}

                <div className="row text-center mt-4">
                    <div className="col-4"><strong>Total</strong></div>
                    <div className="col-4"></div>
                    <div className="col-4"><strong>$500</strong></div>
                </div>
            </div>

            <div className="footer d-flex justify-content-center bg-dark text-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <p><strong>Name:</strong> <br /> Tristan Nono</p>
                        </div>
                        <div className="col">
                            <p><strong>Email:</strong> <br /> trist020703@yahoo.com</p>
                        </div>
                        <div className="col">
                            <p><strong>Credit Card:</strong> <br /> 1234</p>
                        </div>
                        <div className="col">
                            <p><strong>Address:</strong> <br /> 123 North Street</p>
                        </div>
                        <div className="col">
                            <p><strong>City, State, ZIP:</strong> <br /> Chicago, Illinois, 60006</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
