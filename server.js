//import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


//create app
const app = express();

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

//routes

//route to prove it works
app.get('/', (req, res) => {
    res.send('Hello Team')
});

//listen to app
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Howdy'duty port ${PORT}`));