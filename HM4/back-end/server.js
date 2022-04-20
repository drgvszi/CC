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

const { CosmosClient } = require("@azure/cosmos");
const cosmosDbConfig = require("./configs/cosmosDbConfig.js");

const client = new CosmosClient({ endpoint: cosmosDbConfig.endpoint, key: cosmosDbConfig.key });
const dbConfig = require("./utils/cosmosContext.js");
dbConfig.create(client).then(() => console.log("Connected to CosmosDB!")).catch(err => console.error(err));

// SQL, translate, azure function, image recog, form recog -> 5 services


//FORM RECOGNITION

// const formRec = require('./configs/formRec');
// const formUtil = require('./utils/formRecogn')
// const key = formRec.key;
// const endpoint = formRec.endpoint;
// const formUrl = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-layout.pdf"
// formUtil.formRecognition(endpoint,key,formUrl)

const imageRouter = require('./routes/imageR')
const formRouter = require('./routes/formRec');
const todosRouter = require('./routes/todos');
app.use("/todos", todosRouter);
app.use("/form-recognition",formRouter)
app.use("/image-recognition", imageRouter);
app.listen(5000);