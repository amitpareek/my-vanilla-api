const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();
app.get("api/:foo/:bar", (req, res) => {
  res.json({
    foo: req.params.foo,
    bar: req.params.bar,
  });
});
app.get("/message", (req, res) => {
  res.json({ test: "Hello from Express!" });
});
module.exports = createHandler(app);
