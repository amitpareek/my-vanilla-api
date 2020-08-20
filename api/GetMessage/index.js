const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const app = express();
app.get("/:foo/:bar", (req, res) => {
  res.json({
    foo: req.params.foo,
    bar: req.params.bar,
  });
});
module.exports = createHandler(app);
