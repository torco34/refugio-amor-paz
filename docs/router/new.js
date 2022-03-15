const express = require("express");
const { router } = require("../router/app");
const router = express.Router();
router.post("/send-email", async (req, res) => {
  const { to, subject, text, html } = req.body;
  const msg = {
    to,
    from: "luisleonardovegaarias38@gmail.com",
    subject,
    text,
    html,
  };
  res.status(201).send({ success: true });
});
module.exports = router;
