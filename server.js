const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.get("/api/", (req, res) => {
  const data = fs.readFileSync("data.json");

  const parsedData = JSON.parse(data);

  res.send(parsedData);
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'));