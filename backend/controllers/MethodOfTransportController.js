const MethodOfTransport = require('../models').transportMethod;

const createMethodOfTransport = async (req,res) => {
    await MethodOfTransport.create({
        name: req.body.name
    }).then(result => res.send(result));
}

const getAllMethods = async(req,res) => {
    let methods;
    try {
        await MethodOfTransport.findAll()
        .then((allMethods) => methods = allMethods );
    } catch (err) {
        return res.status(404).send({message: "No data found"});
    }
    res.send(methods);
}

module.exports = {
    getAllMethods
}