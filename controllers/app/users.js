const getInfo = (req,res) => {
    res.status(200).json({message : `Getting all the information`});
}

const createUser = (req,res) => {
    res.status(200).json({message : `Creating the User`});
}
const updateInfo = (req,res) => {
    res.status(200).json({message : `Updating the information`});
}

module.exports = {getInfo , createUser , updateInfo} ;

