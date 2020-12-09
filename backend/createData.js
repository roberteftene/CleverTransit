const model = require('./models');


const data = [{name: "Bus"},{name:"Tram"}, {name:"Subway"},{name:"Train"},{name:"Popular"},{name:"My Reviews"}];
const lineData = [{lineName: "M2",route:"A-B",transportMethodId: 8},{lineName: "101",route:"A-B",transportMethodId:5}];
// This is for inserting data
// (async () => {
//     await model.TransportLine.bulkCreate(lineData);
// })()

//This is for deleting tables
// (async () => {
//     await model.Line.drop()
// })()

//This is for deleting data
(async () => {
    await model.transportMethod.destroy({where: {
        id:[11,12,13,14]
    }});
})()
