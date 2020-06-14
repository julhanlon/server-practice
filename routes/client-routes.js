const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

router.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/add.html"));
});

module.exports = router;
