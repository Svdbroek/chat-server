const express = require("express");
const messageRouter = require("./message/router");
const bodyParser = require("body-parser");
const Sse = require("json-sse");
const messageModel = require("./message/model");

const parserMiddleware = bodyParser.json();
const stream = new Sse();
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  stream.send("hi");
  res.send("hello");
});

app.get("/stream", async (req, res, nxt) => {
  try {
    const messages = await messageModel.findAll(); // get array out ouf database
    const string = JSON.stringify(messages); //Convert array into string
    stream.updateInit(string); //send data to client right after they connect
    stream.init(req, res); //connect user to the stream
  } catch (error) {
    nxt(err);
  }
});

app.use(parserMiddleware);
app.use(messageRouter);

app.listen(port, console.log(`listening on port ${port}`));
