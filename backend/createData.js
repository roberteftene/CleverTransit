const model = require('./models');


const data = [{name: "Bus"},{name:"Tram"}, {name:"Subway"},{name:"Train"},{name:"Popular"},{name:"My Reviews"}];
const lineData = [{lineName: "M2",route:"A-B",transportMethodId: 8},{lineName: "101",route:"A-B",transportMethodId:5}];
const reviewMock = [{start_point:'Piata Victoriei', end_point:'Aurel Vlaicu', leaving_hour:'14:30',duration:30,congestion_level:5,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:3}, {start_point:'Piata Presei', end_point:'Arcul de Triumf', leaving_hour:'14:30',duration:20,congestion_level:2,observations:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",satisfaction_level:5}];


// This is for inserting data
// (async () => {
//     await model.TransportLine.bulkCreate(lineData);
// })()

(async () =>  {
    await model.Review.bulkCreate(reviewMock);
})()


//This is for deleting tables
// (async () => {
//     await model.Line.drop()
// })()

//This is for deleting data
// (async () => {
//     await model.transportMethod.destroy({where: {
//         id:[11,12,13,14]
//     }});
// })()
