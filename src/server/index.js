const express = require("express");
const getTopic = require("./routes/topics/get");

const app = express();

app.use(express.static("dist"));

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const port = process.env.PORT || 3000;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.post("/topic", async function (request, response) {
  const meaningCloudApiRepsonse = await getTopic.get(request.body);
  response.send(meaningCloudApiRepsonse);
});
