const express = require("express");
const Message = require("./model");

const { Router } = express;

const router = new Router();

router.get("/message", (req, res, nxt) => {
  Message.findAll().then(messages => {
    res.send(messages).catch(nxt);
  });
});

module.exports = router;
