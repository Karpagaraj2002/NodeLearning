const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('./dbconfig');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


connect().then((connection) => {
    console.log("database connected");
}).catch((error) => {
    console.log(`connection failed ${error}`)
});

app.get('/', (res, req) => {
    req.send('hello world')
})

app.listen(port, () => {
    console.log(`running in ${port}`)
})
