const express = require("express");
const messageRouter = require("./message/router");
const app = express();

const port = 4000;

app.use(messageRouter);
app.listen(port, console.log(`listening on port ${port}`));
