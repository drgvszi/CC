const cosmosDbConfig = require("../configs/cosmosDbConfig.js");

const create = async (client) => {
    /* Create cosmos db */
    const { database } = await client.databases.createIfNotExists({ id: cosmosDbConfig.databaseId });
    
    console.log(`Database ${database.id} created!`)

    /* Create container */
    const { container } = await database.containers.createIfNotExists({ id: cosmosDbConfig.containerId });

    console.log(`Container ${container.id} created!`)
}

module.exports = { create };