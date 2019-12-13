const express = require("express");
const Message = require("./model");

const { Router } = express;

function factory(stream) {
  const router = new Router();

  router.get("/message", (req, res, nxt) => {
    Message.findAll().then(messages => {
      res.send(messages).catch(nxt);
    });
  });

  router.post("/message", async (req, res, nxt) => {
    try {
      const message = await Message.create(req.body);

      const string = JSON.stringify(message);
      stream.send(string);

      res.send(message);
    } catch (error) {
      nxt(error);
    }
  });

  return router;
}
module.exports = factory;
