const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlencoded({ extended: false })

const port = 3001

app.use(cors())
app.use(jsonParser)
app.use(urlencodeParser)

app.get("/", async (req, res) => {
  const response = await fetch("http://localhost:3000/");
  const body = await response.text();

  console.log(body);
  res.json("Website B");
});

app.get('/trigger-x', async (req, res) => {
  try {
      const data = {
          show: "Ini trigger dari x",
      }
      const response = await fetch('http://localhost:3000/github-event', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
      })

      res.json('Event X success')
  } catch (error) {
      console.error(error);
  }
})

app.get('/trigger-y', async (req, res) => {
  try {
      const data = {
          show: "Ini trigger dari y",
      }
      const response = await fetch('http://localhost:3000/github-event', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
      })

      res.json('Event Y success')
  } catch (error) {
      console.error(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})