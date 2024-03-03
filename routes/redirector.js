const express = require("express");

const { handleUrlRedirect } = require("../controllers/redirector");

const router = express.Router();

router.get("/:shortId", handleUrlRedirect);

module.exports = router;
