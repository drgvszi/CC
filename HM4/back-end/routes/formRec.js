const router = require('express').Router();
const formRec = require('../configs/formRec');
const formUtil = require('../utils/formRecogn')
const key = formRec.key;
const endpoint = formRec.endpoint;
// "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-layout.pdf"


router.post('/', async (req, res) => {
    const formUrl = req.body.formUrl;
    const resp = await formUtil.formRecognition(endpoint,key,formUrl);
    res.json(resp);

});

module.exports = router;