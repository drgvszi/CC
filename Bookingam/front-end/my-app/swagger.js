const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes.js']; // root file where the route starts.

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/index');           // Your project's root file
})