const express = require('express')
const app = express()

const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.listen(5000);