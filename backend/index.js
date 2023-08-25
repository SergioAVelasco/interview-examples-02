var express = require("express");
const bodyParser = require("body-parser");
const PORT = 3001;
var cors = require('cors');

const app = express();
app.use(cors());

let databaseRate = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/rate", (req, res) => {
  res.send({ rate: databaseRate });
});

app.post("/rate", (req, res) => {
  body = req.body;
  const { rate } = body;
  if(rate === databaseRate) databaseRate = 0
  else databaseRate = rate;
  res.send({ rate: databaseRate });
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
