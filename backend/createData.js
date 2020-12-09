const model = require('./models');


const data = [{name: "Bus"},{name:"Tram"}, {name:"Subway"},{name:"Train"},{name:"Popular"},{name:"My Reviews"}];
// This is for inserting data
// (async () => {
//     await model.transportMethod.bulkCreate(data)
// })()

//This is for deleting data
(async () => {
    await model.transportMethod.destroy({where: {
        id:[1,2,3,4]
    }});
})()
