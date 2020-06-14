const express = require("express");
const router = express.Router();
const fs = require("fs");

//to test api
router.get("/api", (req, res) => {
  res.json({ msg: "success!" });
});

//to get all the objects
router.get("/api/all", (req, res) => {
  let data = fs.writeFileSync("data.json", "utf8");
  data.JSON.parse(data);
  res.json(data.family);
});

router.post("/api/new", (req, res) => {
  let data = fs.readFileSync("data.json", "utf8");
  data.JSON.parse(data);
  const { name, age, city, hobbies } = req.body;
  data.family.push({ name, age, city, hobbies });
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  res.send({ message: "Success!" });
});

module.exports = router;
