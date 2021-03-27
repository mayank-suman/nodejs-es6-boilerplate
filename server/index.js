const express = require("express");
const app = express();
const port = 3000;

import add from "../src/sum";

app.get("/", (req, res) => {
  const val = add(1, 2);
  res.send("Hello World!" + val);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
