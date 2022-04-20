const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

async function formRecognition(endpoint, key, formUrl) {

    // create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
    const clientForm = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
    const poller = await clientForm.beginAnalyzeDocument("prebuilt-document", formUrl);
    const {
        keyValuePairs,
        entities
    } = await poller.pollUntilDone();
    return {
        keyValuePairs: keyValuePairs,
        entities: entities
    }
}
module.exports = { formRecognition };