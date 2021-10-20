const express = require("express");
const router = new express.Router();

router.get("/akash", (req, res) => {
  res.send("hello madafaka");
});

module.exports = router;
