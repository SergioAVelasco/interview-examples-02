var express = require("express");
const bodyParser = require("body-parser");
const PORT = 3001;

const app = express();

let databaseRate = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/rate", (req, res) => {
  res.send({ rate: databaseRate });
});

app.post("/rate", (req, res) => {
  body = req.body;
  const { rate } = body;
  databaseRate = rate;
  res.send({ rate: databaseRate });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
