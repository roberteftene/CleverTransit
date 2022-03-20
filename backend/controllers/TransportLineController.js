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
};

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
        return res.status(404).send({message: err.message});
    }
};

const addTransportLine = async(req,res) => {
    try {
        let line = await transportLine.create({
            lineName: req.body.lineName,
            route: req.body.route,
            lineDescription: req.body.lineDescription,
            transportMethodId: req.body.transportMethodId
        });
        res.status(200).send(line);
    } catch(err) {
        return res.status(500).send('Internal server error');
    }
};

const editTransportLine = async(req,res) => {
    try {

        let line = await transportLine.findByPk(req.params.id);
        if(line) {
            await line.update({
                lineName : req.body.lineName,
                route: req.body.route,
                lineDescription: req.body.lineDescription,
                transportMethodId: req.body.transportMethodId
            });
            res.status(200).send({message: 'Line updated'});
        } else {
            res.status(404).send({message: 'Line not found'});
        }

    } catch(err) {
        res.status(500).send('Internal server error');
    }
};

module.exports = {
    getTransportLines,
    getTransportLineByTransportMethodId,
    addTransportLine,
    editTransportLine
};