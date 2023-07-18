const Product = require("../models/Products")

const getProduct = async (req,res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({message :product});
}

const getAllProduct =async (req,res) => {
    const products = await Product.find();
    res.status(200).json({message : products})
}

const updateProduct = async (req,res) => {
    const productId = req.params.id;
    const product = await Product.findOneAndUpdate({_id:productId} , 
        {
            name : req.body.name ,
            id : req.body.id ,
            category : req.body.category ,
            price : req.body.price ,
            barcode : req.body.barcode ,
            stockQuantity : req.body.stockQuantity
        });
    res.status(200).json({message : product});
}

const addProduct = async (req,res) => {
    try {

        const product = await Product.create(req.body);
        res.status(200).json({message : product});        
    } catch (error) {
        console.log(error);
    }

} 

const deleteProduct = async(req,res) => {
    const productId = req.params.id;
    const product = await Product.deleteOne({_id:productId});
    res.status(200).json({message : product});
}

module.exports = {getAllProduct , getProduct , updateProduct , addProduct , deleteProduct} ;