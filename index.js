const express = require("express");
const messageRouter = require("./message/router");
const bodyParser = require("body-parser");

const parserMiddleware = bodyParser.json();
const app = express();

const port = 4000;

app.use(parserMiddleware);
app.use(messageRouter);
app.listen(port, console.log(`listening on port ${port}`));
