const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", (req, res) => {
  res.json("Website A");
});

app.post('/github-event', (req, res) => {

  if(req.body.show == "Ini trigger dari x"){
    console.log('Ada trigger dari event-X')
    return res.json()
  }
  else if (req.body.show == "Ini trigger dari y"){
    console.log('Ada trigger dari event-Y')
    return res.json()
  }

  console.log("something doesn't match")
  res.status(400).json()

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});