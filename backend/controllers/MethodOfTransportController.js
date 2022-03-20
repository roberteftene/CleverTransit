const MethodOfTransport = require('../models').transportMethod;

const getAllMethods = async(req,res) => {
    try {
        await MethodOfTransport.findAll()
            .then((allMethods) => {
                res.status(200).json(allMethods);
            });
    } catch (err) {
        return res.status(404).send({message: 'No data found'});
    }
};

module.exports = {
    getAllMethods
};