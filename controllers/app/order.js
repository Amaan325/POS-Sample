const getOrder = (req,res) => {
    res.status(200).json({message : `Getting the order`});
}
const getAllOrders = (req,res) => {
    res.status(200).json({message : `Getting all orders`});
}
const createOrder = (req,res) => {
    res.status(200).json({message : `Create the order`});
}

module.exports = {getOrder , getAllOrders , createOrder} ;