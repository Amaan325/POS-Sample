const getCategory = (req,res) => {
    res.status(200).json({message : `The Category is : `})
}

const updateCategory =(req,res) => {
    res.status(200).json({message : `Updating the category`});
}
const deleteCategory = (req,res) => {
    res.status(200).json({message : `Deleting the Category`});
}
module.exports = {getCategory ,updateCategory , deleteCategory} ;