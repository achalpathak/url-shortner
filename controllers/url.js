const shortid = require("shortid");
const URL = require("../models/urls");

async function handlerGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url)
    return res.status(400).json({ error: "url field is required." });
  const shortID = shortid();

  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res
    .status(201)
    .json({ success: "Short url created successfully", short_id: shortID });
}

async function handleAnalytics(req, res) {
  const shortID = req.params.shortId;
  const result = await URL.findOne({ shortID });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handlerGenerateNewShortURL,
  handleAnalytics,
};
