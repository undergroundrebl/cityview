const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8000

app.use(cors());


app.use(express.static(path.join(__dirname, 'web/html/js')));



app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("invalid endpoint");
});

app.listen(port, () =>{
  console.log('Server running on port '+port);
});