const express = require('express');
const cors = require("cors");
const {connection} = require('./helpers/dbConnect')

require('dotenv').config();
const app = express();
app.use(cors());
const port = process.env.PORT;

//Mongoose
connection();

//* Para parsear // traducir
app.use(express.json());
//* Para parsear req con urlencoded payload
app.use(express.urlencoded({ extended: false }));

//* RUTAS
app.use('/api', require('./routers/apiRouters'));

app.use((req, res, next) => {
    res.status(404).send("404", {
        titulo: 'error 404',
        parrafo: `Page not found`
    })
});

//* Listener
app.listen(port, () => {
    console.log(`Back-end connected from port ${port}`)
})