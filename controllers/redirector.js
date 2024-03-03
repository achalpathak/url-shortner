const URL = require("../models/urls");

async function handleUrlRedirect(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortID: shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    },
  );

  res.redirect(entry.redirectURL);
}

module.exports = {
  handleUrlRedirect,
};
