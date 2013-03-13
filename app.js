var app, express;

express = require('express');

exports.app = app = express();

app.get("/", function(req, res) {
  return res.send("Hello, world!");
});

app.post("/", function(req, res) {
  return res.send("You posted!");
});

if (__filename === process.argv[1]) {
  app.listen(6789);
}

