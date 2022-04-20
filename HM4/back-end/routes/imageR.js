const router = require('express').Router();
const recognUtil = require('../utils/recognUtil');
const recognConfig = require("../configs/recognConfig")
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;
const computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': recognConfig.key } }), recognConfig.endpoint);

// 'https://moderatorsampleimages.blob.core.windows.net/samples/sample16.png'

router.post('/', async (req, res) => {
    const tagsURL = req.body.tagsURL;
    const resp = await recognUtil.computerVision(tagsURL, computerVisionClient);
    res.json(resp);
});

module.exports = router;