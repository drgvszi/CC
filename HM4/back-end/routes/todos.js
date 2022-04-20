const router = require('express').Router();
const axios = require("axios").default;

const { CosmosClient } = require("@azure/cosmos");
const cosmosDbConfig = require("../configs/cosmosDbConfig.js");

const client = new CosmosClient({ endpoint: cosmosDbConfig.endpoint, key: cosmosDbConfig.key });

const database = client.database(cosmosDbConfig.databaseId);
const container = database.container(cosmosDbConfig.containerId);

router.get('/', async (req, res) => {
    const querySpec = {
        query: "SELECT * from c"
    };

    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

    res.json(items);
});

router.post("/", async (req, res) => {

    // const translatedDescription = await axios.post("http://localhost:7071/api/form-recognition", {
    const translatedDescription = await axios.post("https://form-recognition.azurewebsites.net/api/form-recognition?code=RaI50eeDOIrZPNZKBPu7wwdZAHkgcpyZOQ0ZTbU4NGF8uNjmBpxV4w==", {
        text: req.body.description
    })

    const todosItem = {
        description: req.body.description,
        descriptionTranslated: translatedDescription.data
    }

    const { resource: createdItem } = await container.items.create(todosItem);

    res.json(createdItem);
});


module.exports = router