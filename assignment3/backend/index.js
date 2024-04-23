const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('./controller');

// Create express server
const app = express();
const PORT = 5000;

// Express configuration
dotenv.config();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connect to database
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@coms319.xi9lklp.mongodb.net/reactdata?retryWrites=true&w=majority&appName=coms319`;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(connectionString, {});
        console.log(`Connected to db successfully: ${connection.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);       
    }
};

connectDB();


// Start express server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});

// Testing route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Getting all products
app.get('/products', getAllProducts);

// Getting a product by id
app.get('/products/:id', getProductById);

// Creating a product
app.post('/createProduct', createProduct);

// Updating a product
app.put('/products/:id', updateProduct);

// Deleting a aproduct
app.delete('/products/:id', deleteProduct);

// No other requests exist
app.all('*', (req, res) => {
    res.status(400).send({
        message: 'Bad Request'
    })
});
