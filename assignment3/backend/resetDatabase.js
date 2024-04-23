// This script is for development purposes only

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const ProductModal = require('./model');

const rawData = fs.readFileSync(path.join(__dirname, 'default_products.json'));
const defaultProducts = JSON.parse(rawData);
dotenv.config();

const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@coms319.xi9lklp.mongodb.net/reactdata?retryWrites=true&w=majority&appName=coms319`;


mongoose.connect(connectionString, {})
    .then(() => {
        console.log('Connected to mongodb');
        return ProductModal.deleteMany({});
    })
    .then(() => {
        console.log('Database has been cleared');
        return ProductModal.insertMany(defaultProducts);
    })
    .then(() => {
        console.log('Database reseeded');
        mongoose.disconnect();
    })
    .catch(error => {
        console.error('Error resetting the database', error);
        mongoose.disconnect();
    });
