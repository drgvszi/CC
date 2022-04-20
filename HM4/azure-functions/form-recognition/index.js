const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    const response = await axios({
        baseURL: " https://api.cognitive.microsofttranslator.com",
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': "8743dcb775ec42138f5a86cb9d72806b",
            'Ocp-Apim-Subscription-Region': "northeurope",
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'ro',
            'to': ['en']
        },
        data: [{
            'text': req.body.text
        }],
        responseType: 'json'
    });

    var result = JSON.parse(JSON.stringify(response.data, null, 4));
    context.res = {
        body: result[0].translations[0].text
    }
}