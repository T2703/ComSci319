const Product = require('./model');

exports.createProduct = async (req, res) => {
    try {
        const productData = await req.body;

        await Product.create(productData)
            .then((createdProduct) => {
                if (!createdProduct) {
                    return res.status(404).json({
                        success: false,
                        message: 'Product creation failed',
                        error: 'Unable to create a product'
                    });
                }

                res.status(201).json({
                    success: true,
                    product: createdProduct
                })
            })
            .catch(error => {
                if (error.code === 11000) {
                    res.status(400).json({
                        error: 'Bad Request. A product with that id already exists'
                    })
                }
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        Product.find()
            .then((allProducts) => {
                res.status(200).json({
                    success: true,
                    products: allProducts
                })
            })
            .catch(error => {
                res.status(404).json({
                    success: false,
                    message: 'Products not found',
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            id: Number(req.params.id)
        });

        if (!product) {
            return res.status(404).send({
                message: 'Product not found'
            });
        }

        res.status(200).json({
            success: true,
            product
        });

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
};

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { id },
            updatedData,
            {
                new: true,
                runValidators: true,
                useFindAndModify: false
            }
        );

        if (!updatedProduct) {
            return res.status(404).send({
                messgae: 'Product not found'
            })
        }

        res.status(200).json({
            success: true,
            updatedProduct
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            id: Number(req.params.id)
        });

        if (!product) {
            return res.status(404).send({
                message: 'Product not found'
            })
        }

        await Product.deleteOne({
            id: Number(req.params.id)
        })

        res.status(200).json({
            mesage: 'Product deleted successfully'
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

