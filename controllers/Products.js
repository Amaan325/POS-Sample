const getProduct = (req,res) => {
    res.status(200).json({message : `Get the products`});
}

const getAllProduct = (req,res) => {
    res.status(200).json({message : `Getting all the products`})
}

const updateProduct = (req,res) => {
    res.status(200).json({message : `Update the Product`});
}

const addProduct = (req,res) => {
    res.status(200).json({message : `Update the Product`});
} 

const deleteProduct = (req,res) => {
    res.status(200).json({message : `Delete the Product`});
}

module.exports = {getAllProduct , getProduct , updateProduct , addProduct , deleteProduct} ;