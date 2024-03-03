const express = require("express");
const {
  handlerGenerateNewShortURL,
  handleAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handlerGenerateNewShortURL);
router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
