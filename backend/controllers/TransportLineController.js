const transportLine = require('../models').TransportLine;
const transportMethod = require('../models').transportMethod;

const getTransportLines = async(req,res) => {
    let linesData;
    try {
        await transportLine.findAll().then((allLines) => linesData = allLines);
    } catch(err) {
        return res.status(404).send({ message: 'No data found'});
    }
    return res.send(linesData);
}

const getTransportLineByTransportMethodId = async(req,res) => {
    let transportMethodId;
    try {
        await transportMethod.findOne(
            {
                where: {id: req.params.id}
            }
        ).then((result) => transportMethodId = result.id);
        await transportLine.findAll({
            where: { transportMethodId: transportMethodId }
        }).then(result => res.send(result));
    } catch(err) {
        return res.status(404).send({message: err.message})
    }


}

module.exports = {
    getTransportLines,
    getTransportLineByTransportMethodId
}