const express = require('express');
const app = express();

const router = require('./routes/route');
app.get('/', router);

// const port = Process.env.port || 3000;
const port = 3000;
app.listen(port, () => {
    console.log("server running")
})