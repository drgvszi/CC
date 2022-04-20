
const cosmosDbConfig = {
    endpoint: process.env.COSMOS_DB_ENDPOINT,
    key: process.env.COSMOS_DB_AUTH_KEY,
    databaseId: process.env.COSMOS_DB_ID,
    containerId: process.env.COSMOS_DB_CONTAINER_ID,
  };

  module.exports = cosmosDbConfig;