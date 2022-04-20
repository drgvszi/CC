async function computerVision(tagsURL, computerVisionClient) {
  const tags = (await computerVisionClient.analyzeImage(tagsURL, { visualFeatures: ['Tags'] })).tags;
  return tags;
}

module.exports = { computerVision };