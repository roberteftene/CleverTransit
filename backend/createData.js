const model = require('./models');


const data = [{name: "test"},{name:"test2"}];

(async () => {
    await model.transportMethod.bulkCreate(data)
})()
