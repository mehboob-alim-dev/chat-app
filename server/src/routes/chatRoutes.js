const express = require("express");
const router = express.Router();

// Example endpoint
router.get("/", (req, res) => {
  res.json({ message: "Chat API is running!" });
});

module.exports = router;
