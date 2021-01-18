const { req, res } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const model = require('./models');
const PORT = require('./config/config.json').port;
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

model.sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log(err);
        console.log('Unable to connect to database');
    });

// Standard
model.sequelize.sync();

// If we have modification for the tables
// model.sequelize.sync({ alter: true });
const public = path.join(__dirname,'../frontend/build');
app.use(cors());
app.use('/api', routes);
app.use('/', express.static(public));

app.get("/*", (req,res) => {
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App started on http://localhost:${PORT}`);
});
