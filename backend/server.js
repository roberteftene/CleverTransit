const { req, res } = require('express')
const express = require('express')
const app = express()
const model = require('./models');
const PORT = require('./config/config.json').port;
const routes = require('./routes')

model.sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})

model.sequelize.sync();

app.use('/', routes);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`)
});