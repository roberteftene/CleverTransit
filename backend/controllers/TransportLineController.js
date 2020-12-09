const transportLine = require('../models').TransportLine;

const getTransportLines = async(req,res) => {
    let linesData;
    try {
        await transportLine.findAll().then((allLines) => linesData = allLines);
    } catch(err) {
        return res.status(404).send({ message: 'No data found'});
    }
    return res.send(linesData);
}

module.exports = {
    getTransportLines
}