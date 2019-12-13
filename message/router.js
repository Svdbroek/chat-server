const express = require("express");
const Message = require("./model");

const { Router } = express;

const router = new Router();

router.get("/message", (req, res, nxt) => {
  Message.findAll().then(messages => {
    res.send(messages).catch(nxt);
  });
});

router.post("/message", async (req, res, nxt) => {
  try {
    const message = await Message.create(req.body);
    res.send(message);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
