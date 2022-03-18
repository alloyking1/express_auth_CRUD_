const express = require('express');
const app = express();
const cors = require("cors");


const db = require("./models");
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
const router = require('./routes/route');
app.use('/', router);

// const port = Process.env.port || 3000;
const port = 3000;
app.listen(port, () => {
    console.log("server running")
})